import { Payment } from '../@types';
import Service from '../Service';
import generateQueryString from '../utils/generateQueryString';

class PaymentService extends Service {

  static readonly REQUEST_MAPPING: string = "/payments";

  static getAllPayments(query: Payment.Query) {
    const queryString = generateQueryString(query);
    const uri = this.REQUEST_MAPPING.concat(queryString);
    return this.Http
      .get<Payment.Paginated>(uri)
      .then(this.getData);
  }

  static getExistingPayment(paymentId: number) {
    return this.Http
      .get<Payment.Detailed>(`${this.REQUEST_MAPPING}/${paymentId}`)
      .then(this.getData);
  }

  static insertNewPayment(payment: Payment.Input) {
    return this.Http
      .post<Payment.Detailed>(this.REQUEST_MAPPING, payment)
      .then(this.getData);
  }

  static getPaymentPreview(paymentInfo: Payment.PreviewInput) {
    return this.Http
      .post<Payment.Preview>(this.REQUEST_MAPPING.concat('/previews'), paymentInfo)
      .then(this.getData);
  }

  static approvePayment(paymentId: number) {
    return this.Http
      .put<{}>(`${this.REQUEST_MAPPING}/${paymentId}/approval`)
      .then(this.getData);
  }

  static getExistingPaymentPosts(paymentId: number) {
    return this.Http
      .get<Payment.PostWithEarnings[]>(`${this.REQUEST_MAPPING}/${paymentId}/posts`)
      .then(this.getData);
  }

  static removeExistingPayment(paymentId: number) {
    return this.Http
      .delete<{}>(`${this.REQUEST_MAPPING}/${paymentId}`)
      .then(this.getData);
  }

  static approvePaymentsBatch(paymentIds: number[]) {
    return this.Http
      .put<{}>(this.REQUEST_MAPPING.concat('/bulk-approvals'), paymentIds)
      .then(this.getData);
  }
}

export default PaymentService;