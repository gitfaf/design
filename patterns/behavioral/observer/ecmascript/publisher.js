'use strict';

class Publisher {
  constructor (id) {
    this.id = id;
    this.subscribers = [];
  }
  subscribe (subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe (subscriber) {
    let index;
    let i = 0;
    let len = this.subscribers.length;
    for(i = 0; i < len; i++) {
      if(this.subscribers[i].id === subscriber.id) {
        index = i;
        break;
      }
    }
    this.subscribers.splice(index, 1);
  }
  action (info) {
    this.subscribers.forEach(function (s) {
      s.notify(info);
    });
  }
}

module.exports = Publisher;
