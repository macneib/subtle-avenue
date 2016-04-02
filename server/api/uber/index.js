'use strict';

import {Router} from 'express';
import * as controller from './uber.controller';


var router = new Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:token', controller.activate);

export default router;