function Subscriber (id) {
  this.id = id;
  this.notify = function (information) {
    console.log(information);
  };
  this.publishers = [];
  this.subscribe = function (publisher) {
    this.publishers.push(publisher);
    publisher.subscribe(this);
  };
  this.unsubscribe = function (publisher) {
    var index;
    for(var i = 0; i < this.publishers.lenght; i++){
      if(this.publishers[i].id === publisher.id) {
        index = i;
        break;
      }
    }
    this.publishers.splice(index, 1);
    publisher.unsubscribe(this);
  };
}
