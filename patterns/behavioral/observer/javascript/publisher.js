function Publisher (id) {
  this.id = id;
  this.subscribers = [];
  this.subscribe = function (subscriber) {
    this.subscribers.push(subscriber);
  };
  this.unsubscribe = function (subscriber) {
    var index;
    for(var i = 0; i < this.subscribers.length; i++) {
      if(this.subscribers[i].id === subscriber.id) {
        index = i;
        break;
      }
    }
    this.subscribers.splice(index, 1);
  };
  this.action = function (info) {
    this.subscribers.forEach(function (s) {
      s.notify(info);
    })
  };
}
