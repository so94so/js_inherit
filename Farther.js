
function Farther() {
    this.name = "Farther";
    this.age = 100;
    this.actions = ['say','walk','ear'];
}

Farther.prototype.toSay = function() {
    return this.name;
}

module.exports = Farther;
