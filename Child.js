
var Farther = require('./Farther');

function Child(actions) {
    Farther.call(this,actions);
}

Child.prototype = new Farther();

module.exports = Child;
