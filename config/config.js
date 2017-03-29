const path = require('path');

const rootPath = path.normalize(`${__dirname}/..`);
const host = 'mongo';
const port = '27017';
const db = 'profiles';

module.exports = {
  app: {
    name: 'profiles',
  },
  env: process.env.NODE_ENV || 'development',
  root: rootPath,
  port: process.env.PORT || 3000,
  mongodb: {
    collection: 'gps',
    connectionString: `mongodb://${host}:${port}/${db}`,
  },
  hotjarId: process.env.HOTJAR_ANALYTICS_TRACKING_ID,
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
  webtrendsId: process.env.WEBTRENDS_ANALYTICS_TRACKING_ID,
};
