import { Metric } from "../@types";
import Service from "../Service";

class MetricService extends Service {
  static readonly REQUEST_MAPPING: string = "/metrics";

  static getTop3Tags() {
    return this.Http.get<Metric.EditorTagRatio>(
      `${this.REQUEST_MAPPING}/editor/top3-tags`
    ).then(this.getData);
  }

  static getEditorMonthlyEarnings() {
    return this.Http.get<Metric.EditorMonthlyEarnings>(
      `${this.REQUEST_MAPPING}/editor/monthly-earnings`
    ).then(this.getData);
  }

  static getMonthlyRevenuesExpenses() {
    return this.Http.get<Metric.MonthlyRevenuesExpenses>(
      this.REQUEST_MAPPING.concat(
        "/monthly-revenues-expenses"
      ),
      { headers: { "Content-Type": "application/json" } }
    ).then(this.getData);
  }

  static getMonthlyRevenuesExpensesChartJs() {
    return this.Http.get<Metric.MonthlyRevenuesExpensesChartJs>(
      this.REQUEST_MAPPING.concat(
        "/monthly-revenues-expenses"
      ),
      {
        headers: {
          "Content-Type":
            "application/vnd.alganews.chartjs+json",
        },
      }
    ).then(this.getData);
  }
}

export default MetricService;
