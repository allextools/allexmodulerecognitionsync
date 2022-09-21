var checkftions = require('allex_checkslowlevellib'),
  cleanftions = require('allex_destructionlowlevellib')(checkftions.isFunction, checkftions.isArray, checkftions.isNumber, checkftions.isString),
  inherit = require('allex_inheritlowlevellib'),
  functionmanip = require('allex_functionmanipulationlowlevellib')(inherit.inherit),
  dlinkedlistbase = require('allex_doublelinkedlistbaselowlevellib')(inherit.inherit),
  fifo = require('allex_fifolowlevellib')(dlinkedlistbase, inherit.inherit),
  timeout = require('allex_timeoutlowlevellib')(checkftions.isFunction, fifo),
  eventemitter = require('allex_eventemitterlowlevellib')(dlinkedlistbase, inherit.inherit, checkftions.isFunction, checkftions.isArrayOfFunctions),
  avltreelib = require('allex_avltreelowlevellib')(dlinkedlistbase, inherit.inherit),
  map = require('allex_maplowlevellib')(avltreelib, inherit.inherit),
  _q = require('allex_qlowlevellib')(timeout.runNext, checkftions.isArray, checkftions.isFunction, inherit.inherit, functionmanip.dummyFunc, eventemitter),
  qlib = require('allex_qextlowlevellib')(_q, inherit.inherit, timeout.runNext, fifo, map, cleanftions.containerDestroyAll),
  resolve = require('allex_modulerecognitionlowlevellib')(checkftions.isString, checkftions.isFunction, _q, qlib),
  deasync = require('deasync');


function wrapper (namespacedesc, cb) {
  resolve(namespacedesc).then(
    cb.bind(null, null),
    cb.bind(null)
  )
}

module.exports = deasync(wrapper);

