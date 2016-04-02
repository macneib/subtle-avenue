'use strict';

// Test Data
// ===========================

module.exports = {
  socket: {
    path: 'http://localhost:9000',
    config: {
      'reconnection delay': 0,
      'reopen delay': 0,
      'force new connection': true,
      'timeout': 5000
    }
  },
  id: {
    zero: '00000000-0000-0000-0000-000000000000',
    fail: '00000000-0000-0000-0000-000000000000-fail',
    one: '10000000-0000-0000-0000-000000000000'
  },
  values: {
    group: ['00000000-0000-0000-0000-000000000000','00000000-0000-0000-0000-000000000001','00000000-0000-0000-0000-000000000002','00000000-0000-0000-0000-000000000003']
  },
  password: {
    hash: '$2a$04$rKiQsYOu.qXRCl2qfYNO1Ow5ZPEFiwZb1RdjHcRsK5x2FcIPfLWyq',
    decrypt: 'password',
    fail: 'password1'
  },

  signup: {
    before: {}
  },
  activation: {
    before: {
      accountId: '00000000-0000-0000-0000-000000000000',
      activated: false,
      token: '0000000000000000000000000000000000000000000000000000000000000000',
      expires: Date.now() + 172800000
    },
    create: {
      accountId: '00000000-0000-0000-0000-000000000001',
      activated: false,
      token: '0000000000000000000000000000000000000000000000000000000000000001',
      expires: Date.now() + 172800000
    }
  },
  account: {
    before: {
      activated: true,
      email: 'foo@spoxr.com',
      firstName: 'test',
      lastName: 'user',
      lastUpdateDate: 1437569936581,
      password: '$2a$04$rKiQsYOu.qXRCl2qfYNO1Ow5ZPEFiwZb1RdjHcRsK5x2FcIPfLWyq', //password
      provider: 'local',
      role: 'user',
      signupDate: 1437569936581,
      subscribe: false
    },
    secondary: {
      activated: true,
      email: 'bar@spoxr.com',
      firstName: 'bar',
      lastName: 'user',
      lastUpdateDate: 1437569936581,
      password: '$2a$04$rKiQsYOu.qXRCl2qfYNO1Ow5ZPEFiwZb1RdjHcRsK5x2FcIPfLWyq', //password
      provider: 'local',
      role: 'user',
      signupDate: 1437569936581,
      subscribe: false
    },
    offline: {
      activated: true,
      email: 'baz@spoxr.com',
      firstName: 'baz',
      lastName: 'user',
      lastUpdateDate: 1437569936581,
      password: '$2a$04$rKiQsYOu.qXRCl2qfYNO1Ow5ZPEFiwZb1RdjHcRsK5x2FcIPfLWyq', //password
      provider: 'local',
      role: 'user',
      signupDate: 1437569936581,
      subscribe: false
    },
    notInGroup: {
      activated: true,
      email: 'qux@spoxr.com',
      firstName: 'qux',
      lastName: 'user',
      lastUpdateDate: 1437569936581,
      password: '$2a$04$rKiQsYOu.qXRCl2qfYNO1Ow5ZPEFiwZb1RdjHcRsK5x2FcIPfLWyq', //password
      provider: 'local',
      role: 'user',
      signupDate: 1437569936581,
      subscribe: false
    }
  },

  profile: {
    before: {
      accountId: '00000000-0000-0000-0000-000000000000',
      averageRating: 0,
      biography: 'this is a before test profile',
      country: {
        alpha2: 'CA',
        'country-code': '124',
        name: 'Canada'
      },
      displayName: 'beforetest',
      image: 'cf2e1e2f-4b1a-4fb9-ab13-e846781bab1a',
      language: {
        native: 'English (US)',
        value: 'en'
      },
      lastUpdateDate: 1437569936672,
      publicView: false,
      tz: {
        code: 'America/New_York',
        text: '(UTC-04:00) Eastern Time (US and Canada)'
      },
      totalFollowers: 0,
      totalRatings: 0,
      vanityurl: '',
      website: 'www.spoxr.com'
    },
    create: {
      accountId: '00000000-0000-0000-0000-000000000001',
      averageRating: 0,
      biography: 'this is a create test profile',
      country: {
        alpha2: 'CA',
        'country-code': '124',
        name: 'Canada'
      },
      displayName: 'createtest',
      image: 'cf2e1e2f-4b1a-4fb9-ab13-e846781bab1a',
      language: {
        native: 'English (US)',
        value: 'en'
      },
      lastUpdateDate: 1437569936672,
      publicView: false,
      tz: {
        code: 'America/New_York',
        text: '(UTC-04:00) Eastern Time (US and Canada)'
      },
      totalFollowers: 0,
      totalRatings: 0,
      vanityurl: '',
      website: 'www.spoxr.com'
    },
    secondary: {
      averageRating: 0,
      biography: 'this is a secondary test profile',
      country: {
        alpha2: 'CA',
        'country-code': '124',
        name: 'Canada'
      },
      displayName: 'bar',
      image: 'cf2e1e2f-4b1a-4fb9-ab13-e846781bab1a',
      language: {
        native: 'English (US)',
        value: 'en'
      },
      lastUpdateDate: 1437569936672,
      publicView: false,
      tz: {
        code: 'America/New_York',
        text: '(UTC-04:00) Eastern Time (US and Canada)'
      },
      totalFollowers: 0,
      totalRatings: 0,
      vanityurl: '',
      website: 'www.spoxr.com'
    },
    offline: {
      averageRating: 0,
      biography: 'this is a test offline profile',
      country: {
        alpha2: 'CA',
        'country-code': '124',
        name: 'Canada'
      },
      displayName: 'baz',
      image: 'cf2e1e2f-4b1a-4fb9-ab13-e846781bab1a',
      language: {
        native: 'English (US)',
        value: 'en'
      },
      lastUpdateDate: 1437569936672,
      publicView: false,
      tz: {
        code: 'America/New_York',
        text: '(UTC-04:00) Eastern Time (US and Canada)'
      },
      totalFollowers: 0,
      totalRatings: 0,
      vanityurl: '',
      website: 'www.spoxr.com'
    }
  },
  group: {
    before: {
      accountId: '00000000-0000-0000-0000-000000000000',
      name: 'test before group',
      description: 'this is a before group',
      members: ['00000000-0000-0000-0000-000000000000'],
      invites: [],
      public: true,
      created: Date.now()
    },
    insert: {
      accountId: '00000000-0000-0000-0000-000000000000',
      name: 'test insert group',
      description: 'this is an insert group',
      members: ['00000000-0000-0000-0000-000000000000'],
      invites: [],
      public: true,
      created: Date.now()
    },
    invite: {
      accountId: '00000000-0000-0000-0000-000000000000',
      name: 'test invite group',
      description: 'this is an invite test group',
      members: ['00000000-0000-0000-0000-000000000000'],
      invites: ['00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000002'],
      public: true,
      created: Date.now()
    },
    primary: {
      'name': 'test group messaging',
      'description': 'this is a test group for messages',
      'members': [],
      'invites': []
    },
    secondary: {
      'name': 'test group B messaging',
      'description': 'this is a test group B for messages',
      'members': [],
      'invites': []
    }
  },
  message: {
    before: {
      accountId: '00000000-0000-0000-0000-000000000000',
      groupId: '00000000-0000-0000-0000-000000000000',
      msg: 'this is a before mesage',
      created: Date.now()
    },
    insert: {
      accountId: '00000000-0000-0000-0000-000000000000',
      groupId: '00000000-0000-0000-0000-000000000000',
      msg: 'this is an insert mesage',
      created: Date.now()
    },
    create: {
      msg: 'create test message'
    },
    primary: {
      msg: 'test message A'
    },
    secondary: {
      msg: 'test message B'
    }
  },
  course: {
    before: {
      accountId: '00000000-0000-0000-0000-000000000000',
      profileId: '00000000-0000-0000-0000-000000000000',
      catalog: '00000000-0000-0000-0000-000000000000',
      color: '#FFFFFF',
      title: 'before',
      blurb: 'before',
      description: 'This is a before course',
      faq: [],
      background: 'before',
      outcome: 'before',
      courseStart: -1,
      courseEnd: -1,
      classDuration: 0,
      classSchedule: [],
      lessonIds: [],
      image: '',
      country: '',
      language: {
        native: 'English (US)',
        value: 'en'
      },
      access: {
        bidirectional: {
          active: true,
          current: 0,
          minimum: 1,
          maximum: 7,
          price: 0
        },
        livestream: {
          active: false
        },
        ondemand: {
          active: false
        }
      },
      timezone: {
        code: 'America/New_York',
        text: '(UTC-04:00) Eastern Time (US and Canada)'
      },
      totalFavorites: 0,
      totalViews: 0,
      totalRatings: 0,
      averageRating: 0,
      publicationStatus: 'unpublished',
      guidelinesAccept: true,
      guidelinesAcceptDate: Date.now(),
      created: Date.now(),
      updated: Date.now()
    },
    publish: {
      accountId: '00000000-0000-0000-0000-000000000000',
      profileId: '00000000-0000-0000-0000-000000000000',
      catalog: '00000000-0000-0000-0000-000000000000',
      color: '#FFFFFF',
      title: 'published',
      blurb: 'published',
      description: 'This is a published before course',
      faq: [],
      background: 'published',
      outcome: 'published',
      courseStart: Date.now(),
      courseEnd: Date.now(),
      classDuration: 0,
      classSchedule: [],
      lessonIds: [],
      image: '',
      country: '',
      language: {
        native: 'English (US)',
        value: 'en'
      },
      access: {
        bidirectional: {
          active: true,
          current: 0,
          minimum: 1,
          maximum: 7,
          price: 0
        },
        livestream: {
          active: false
        },
        ondemand: {
          active: false
        }
      },
      timezone: {
        code: 'America/New_York',
        text: '(UTC-04:00) Eastern Time (US and Canada)'
      },
      totalFavorites: 0,
      totalViews: 0,
      totalRatings: 0,
      averageRating: 0,
      publicationStatus: 'published',
      guidelinesAccept: true,
      guidelinesAcceptDate: Date.now(),
      created: Date.now(),
      updated: Date.now()
    },
    create: {
      accountId: '00000000-0000-0000-0000-000000000000',
      profileId: '00000000-0000-0000-0000-000000000000',
      catalog: '00000000-0000-0000-0000-000000000000',
      color: '#FFFFFF',
      title: 'create',
      blurb: 'create',
      description: 'This is a create course',
      faq: [],
      background: 'create',
      outcome: 'create',
      courseStart: -1,
      courseEnd: -1,
      classDuration: 0,
      classSchedule: [],
      lessonIds: [],
      image: '',
      country: '',
      language: {
        native: 'English (US)',
        value: 'en'
      },
      access: {
        bidirectional: {
          active: true,
          current: 0,
          minimum: 1,
          maximum: 7,
          price: 0
        },
        livestream: {
          active: false
        },
        ondemand: {
          active: false
        }
      },
      timezone: {
        code: 'America/New_York',
        text: '(UTC-04:00) Eastern Time (US and Canada)'
      },
      totalFavorites: 0,
      totalViews: 0,
      totalRatings: 0,
      averageRating: 0,
      publicationStatus: 'unpublished',
      guidelinesAccept: true,
      guidelinesAcceptDate: Date.now(),
      created: Date.now(),
      updated: Date.now()
    }
  },
  catalog: {
    before: {
      name: 'before',
      slug: 'before',
      title: 'before',
      description: 'this is a before catalog',
      language: {
        native: 'English (US)',
        value: 'en'
      },
      moderator: [{
        profileId: '00000000-0000-0000-0000-000000000000',
        accountId: '00000000-0000-0000-0000-000000000000'
      }],
      type: 'public',
      autoApprove: true,
      contentOptions: 'any',
      spamFilter: 'high',
      isAgeRequired: false,
      isInAll: true,
      excludeBanned: false,
      created: Date.now(),
      updated: Date.now(),
      status: 'active',
      activeCourses: 0,
      totalCourses: 0,
      totalSubscriptions: 0,
      totalIncome: 0,
      subscribers: 0
    },
    create: {
      name: 'test',
      slug: 'test',
      title: 'test',
      description: 'this is a test',
      language: {
        native: 'English (US)',
        value: 'en'
      },
      moderator: [{
        profileId: '00000000-0000-0000-0000-000000000000',
        accountId: '00000000-0000-0000-0000-000000000000'
      }],
      type: 'public',
      autoApprove: true,
      contentOptions: 'any',
      spamFilter: 'high',
      isAgeRequired: false,
      isInAll: true,
      excludeBanned: false,
      created: Date.now(),
      updated: Date.now(),
      status: 'active',
      activeCourses: 0,
      totalCourses: 0,
      totalSubscriptions: 0,
      totalIncome: 0,
      subscribers: 0
    }
  },
  notification: {
    before: {
      accountId: '00000000-0000-0000-0000-000000000000',
      msg: 'Before test notification',
      created: Date.now(),
      type: 'test'
    },
    zero: {
      accountId: '00000000-0000-0000-0000-000000000000',
      msg: 'Zero test notification',
      created: Date.now(),
      type: 'test'
    },
    insert: {
      accountId: '00000000-0000-0000-0000-000000000000',
      msg: 'this is an test insert notification',
      created: Date.now(),
      type: 'test'
    },
    primary: {
      accountId: '00000000-0000-0000-0000-000000000000',
      msg: 'Test notification',
      created: Date.now(),
      type: 'test'
    },
    invite1: {
      accountId: '00000000-0000-0000-0000-000000000001',
      msg: 'You have been invited to test invite group',
      created: 1457560612419,
      type: 'groups',
      docId: '79329941-7901-4da8-9e2d-447775657f93'
    },
    invite2: {
      accountId: '00000000-0000-0000-0000-000000000002',
      msg: 'You have been invited to test invite group',
      created: 1457560612419,
      type: 'groups',
      docId: '79329941-7901-4da8-9e2d-447775657f93'
    }
  },
  enrollment: {
    before: {
      accountId: '00000000-0000-0000-0000-000000000000',
      courseId: '00000000-0000-0000-0000-000000000000',
      type: 'bidirectional'
    },
    create: {
      accountId: '00000000-0000-0000-0000-000000000001',
      courseId: '00000000-0000-0000-0000-000000000001',
      type: 'bidirectional'
    }
  },
  reset: {
    before: {
      accountId: '00000000-0000-0000-0000-000000000000',
      token: '0000000000000000000000000000000000000000000000000000000000000000',
      complete: false,
      attempts: 1,
      expires: Date.now() + 3600000,
      created: Date.now()
    },
    create: {
      accountId: '00000000-0000-0000-0000-000000000001',
      token: '0000000000000000000000000000000000000000000000000000000000000001',
      complete: false,
      attempts: 1,
      expires: Date.now() + 3600000,
      created: Date.now()
    },
    expire: {
      accountId: '00000000-0000-0000-0000-000000000002',
      token: '0000000000000000000000000000000000000000000000000000000000000002',
      complete: false,
      attempts: 1,
      expires: Date.now() - 3600000,
      created: Date.now()
    },
    complete: {
      accountId: '00000000-0000-0000-0000-000000000003',
      token: '0000000000000000000000000000000000000000000000000000000000000003',
      complete: true,
      attempts: 1,
      expires: Date.now() + 3600000,
      created: Date.now()
    }
  }
};