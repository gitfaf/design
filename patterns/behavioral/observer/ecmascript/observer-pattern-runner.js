let Subscriber = require('./subscriber');
let Publisher = require('./publisher');


var s1 = new Subscriber(1);
var p1 = new Publisher(1);
var s2 = new Subscriber(2);

s1.subscribe(p1);
s2.subscribe(p1);

p1.action('hi');
