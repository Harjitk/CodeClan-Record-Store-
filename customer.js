var _ = require("lodash");

var Customer = function(){
  this.wallet = 200;
  this.collection = [];
};


Customer.prototype.buyRecord = function(record){
  if(this.wallet >= record.price){
    this.wallet -= record.price;
    this.collection.push(record);
  }else{
    return "Sorry order was not successful, not enough money";
  }
};


Customer.prototype.sellRecord = function(record){
  this.collection.pop(record);
  this.wallet += record.price;
}

Customer.prototype.totalValueOfCollection = function(){
  return _.sumBy(this.collection, "price");
};

module.exports = Customer;
