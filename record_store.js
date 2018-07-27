var _ = require('lodash');

var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 90000
};


module.exports = RecordStore;

RecordStore.prototype.addRecord = function(record){
  this.inventory.push(record);
};

RecordStore.prototype.listInventory = function(){
  var result = this.inventory.map(function(record){
  return record.printString();
  })
  return result;
}

RecordStore.prototype.sellRecord = function(record){
  index = _.indexOf(this.inventory, record, [fromIndex=0])
  this.inventory.splice[0]
  this.balance += record.price
};
// this.inventory_.indexOf(record)
// _.indexOf(array, value, [fromIndex=0])




RecordStore.prototype.finanicalSituation = function(){


// this get .sumBy method to array of inventory
// then do hashmap on the total balance with the total of the inventory
}

module.exports = RecordStore;
