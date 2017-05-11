'use strict';

class Subscriber {
  constructor(id) {
    this.id = id;
    this.publishers = [];
  }
  notify (information) {
    console.log(information);
  }
  subscribe (publisher) {
    this.publishers.push(publisher);
    publisher.subscribe(this);
  }
  unsubscribe (publisher) {
    let index;
    let i = 0;
    let len = this.publishers.length;
    for(i = 0; i < len; i++) {
      if(this.publishers[i].id === publisher.id) {
        index = i;
        break;
      }
    }
    this.publishers.splice(index, 1);
    publisher.unsubscribe(this);
  }
}

module.exports = Subscriber;
