'use strict';

// Test specific configuration
// ===========================
module.exports = {
	// Sever Domain name
	domain: process.env.DOMAIN || 'localhost',
	// Secret for session
	secrets: {
		session: 'solidsaturn-test-secret'
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
		expiration: 10080 // 1 week in minutes
	},
    // RethinkDb App connection
    dbConfig: {
        host: 'localhost',
        port: 28015,
        db:  'test',
        authKey: '',
        maxPoolSize: 10, // Max number of simultaneous DB connections (set to 1 to disable pooling)
        tables: {
            'accounts': 'id',
            'profiles': 'id',
            'courses': 'id',
            'lessons': 'id',
            'enrollments': 'id',
            'attendances': 'id',
            'comments': 'id',
            'messages': 'id',
            'follows': 'id',
            'catalogs': 'id',
            'payments': 'id',
            'views': 'id',
            'documents': 'id',
            'hits': 'id',
            'ratings': 'id',
            'groups': 'id'
        },
        indices: {
            'courses': 'accountId',
            'profiles': 'accountId',
            'follows': 'followerId',
            'messages': 'recipientId',
            'payments': 'accountId',
            'views': 'accountId',
            'ratings': 'targetId',
            'groups': 'accountId'
        }
    },
	// Redis configuration
	redis: {
		host: process.env.REDIS_PORT_6379_TCP_ADDR || 'redis',
		port: parseInt(process.env.REDIS_PORT_6379_TCP_PORT) || 6379,
		auth: ''
	},
	// Kue/Redis configuration
	kue: {
		host: process.env.REDIS_PORT_6379_TCP_ADDR || 'kue',
		port: parseInt(process.env.REDIS_PORT_6379_TCP_PORT) || 6379,
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
		port: process.env.TRFC_PRDCR_PORT || 5000
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
	},
	seedDB: true
};