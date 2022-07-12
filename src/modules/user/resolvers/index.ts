import mutation from './mutation';
import query from './query';
import user from './user';
import subscriptions from './subscriptions';

export default {
  ...query,
  ...mutation,
  ...user,
  ...subscriptions
};
