
var Child = require('./Child');

var girl1 = new Child();
girl1.actions.push('play');

console.log(girl1.actions);


var girl2 = new Child();
console.log(girl2.actions);

// 结果是
// [ 'say', 'walk', 'ear', 'play' ]
// [ 'say', 'walk', 'ear' ]
