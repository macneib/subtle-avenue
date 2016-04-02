'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Sever Domain name
  host: 'spoxr.com',
  port: process.env.PORT,
  // Secret for session
  secrets: {
    session: '5h1s1sapr0udct10nt3st'
  },
  // Winston logger config
  log: {
    accessLog: 'solid-saturn.access',
    errorLog: 'solid-saturn.error',
    path: './server/log'
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
    host: process.env.RDB_HOST,
    port: parseInt(28015),
    db: 'spoxr_prod',
    authKey: '',
    maxPoolSize: parseInt(10)
  },
  // Redis development configuration
  redis: {
    host: process.env.REDIS_HOST,
    port: 6379,
    auth: ''
  },
  // Kue/Redis configuration
  kue: {
    host: process.env.KUE_HOST,
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
    port: parseInt(5000)
  },
  // Bcrypt config - for setting the amount of salting rounds for passwords
  bcryptConfig: {
    saltFactor: parseInt(11)
  },
  // spoxrBot Config
  spoxrbot: {
    id: '51a22fb9-ef8c-4e09-b90a-0849fb5d95ef'
  },
  catalogs: {
    start: 'c8daafe5-bce9-413e-b72b-cbea0d256b72'
  }
};