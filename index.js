var PubSub = function () {
  this.handlers = {};
};

var pubsub = module.exports = new PubSub();

PubSub.prototype.on = function (event, handler) {
  if(!has(this.handlers, event)) {
    this.handlers[event] = [];
  }

  this.handlers[event].push(handler);
  return this;
};

PubSub.prototype.emit = function (event) {
  var handlerArgs = Array.prototype.slice.call(arguments, 1);
  this.handlers[event].forEach(function (handler) {
    handler.apply(this, handlerArgs);
  });
};

var has = function (obj, prop) {
  return Object.prototype.propertyIsEnumerable.call(obj, prop);
};
