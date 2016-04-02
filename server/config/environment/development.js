'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // Sever Domain name
  domain: process.env.DOMAIN || 'localhost',
  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'solidsaturn-secret'
  },
  // Winston logger config
  log: {
    accessLog: process.env.LOG_ACCESS || 'solid-saturn.access',
    errorLog: process.env.LOG_ERROR || 'solid-saturn.error',
    path: process.env.LOG_PATH || './server/log'
  },
  // File upload path
  upload: {
    path: '/tmp'
  },
  // JWT token expiration in minutes
  token: {
    expiration: '7d' // 7 days
  },
  // RethinkDB database config
  dbConfig: {
    host: process.env.RDB_HOST || 'localhost',
    port: parseInt(process.env.RDB_PORT) || 28015,
    db: process.env.RDB_DB || 'mvp',
    authKey: '',
    maxPoolSize: 10 // Max number of simultaneous DB connections (set to 1 to disable pooling)
  },
  // Redis database configuration
  redis: {
    host: '127.0.0.1',
    port: 6379,
    auth: ''
  },
  // Kue/Redis configuration
  kue: {
    host: '127.0.0.1',
    port: 6379,
    auth: ''
  },
  countryLookup: {
    address: 'http://127.0.0.1:4000/api/locations/',
    default: {
      'name': 'United States',
      'alpha2': 'US',
      'country-code': '840'
    }
  },
  // Course Hit Traffic Outbound
  trafficProducer: {
    port: parseInt(process.env.TRFC_PRDCR_PORT) || 5000
  },
  // Bcrypt config - for setting the amount of salting rounds for passwords
  bcryptConfig: {
    saltFactor: 2
  },
  // spoxrBot Config
  spoxrbot: {
    id: '51a22fb9-ef8c-4e09-b90a-0849fb5d95ef'
  },
  catalogs: {
    start: 'c8daafe5-bce9-413e-b72b-cbea0d256b72'
  }
};