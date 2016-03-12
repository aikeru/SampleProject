"use strict";
require('babel-register');

const logger = require('../shared/logger.jsx');
logger.setLogLevel(logger.logLevels.NONE);

require('./evaluator/ExpressionRequestHandler.spec.jsx');
require('./evaluator/expressions.spec.jsx');
require('./generator/evaluatorService.spec.jsx');
require('./generator/expressions.spec.jsx');
require('./generator/generator.spec.jsx');
require('./generator/httpRequest.spec.jsx');
require('./shared/random.spec.jsx');
require('./shared/timer.spec.jsx');
require('./shared/logger.spec.jsx');
