import * as services from './services';
import * as utils from './utils';

/* allow import directly and without all path where uses */
export { default as FileService } from './services/File.service';
export { default as MetricService } from './services/Metric.service';
export { default as UserService } from './services/User.service';
export { default as PostService } from './services/Post.service';
export { default as generateQueryString } from './utils/generateQueryString';

export default {
  services, utils
}