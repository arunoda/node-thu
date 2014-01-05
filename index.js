module.exports = function(context, funcName /*, args */) {
  var args;
  var func;
  if(typeof context == 'function') {
    func = context;
    context = this;
    args = Array.prototype.slice.call(arguments, 1);
  } else if(typeof context == 'object' && typeof funcName == 'string') {
    func = context[funcName];
    args = Array.prototype.slice.call(arguments, 2);
  } else {
    throw new Error('UNSUPPORTED_ARGUMENTS');
  }

  return function(done) {
    args.push(done);
    func.apply(context, args);
  }
};