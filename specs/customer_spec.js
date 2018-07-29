var _ = require("lodash");

var assert = require("assert");
var Record = require("../record");
var RecordStore = require('../record_store');
var Customer = require("../customer");

describe("Customer", function(){
  let customer, recordStore, record1, record2

  beforeEach(function(){
    customer1 = new Customer();
    customer2 = new Customer();
    recordStore = new RecordStore ("Steve's Record Store", "Glasgow");
    record1 = new Record ("Lauryn Hill", "The Miseducation of Lauryn Hill", "Hip Hop", 7);
    record2 = new Record ("Frank Ocean", "Channel Orange", "R&B", 10);
    record3 = new Record ("The Carters", "Everthing Is Love", "Hip Hop", 12);
    record4 = new Record ("Emile Sande", "Our Version of Events", "Soul", 8)

  });

 it('should be able to buy records', function(){
     customer.buyRecord(record1);
     assert.deepStrictEqual(customer.inventory.length, 1)
   });

 it('should be able to sell records', function(){
    customer.buyRecord(record1);
    customer.sellRecord(record1);
    assert.deepStrictEqual(customer.collection.length, 0);
    assert.deepStrictEqual(customer.wallet, 200);
  });

  it('should not be able to buy records if cash is less', function(){
     customer.buyRecord(record1);
     customer.buyRecord(record2);
     customer.buyRecord(record3);
     assert.deepStrictEqual(customer.buyRecord(record3), "Sorry order was not successful, not enough money");
   });

   it('should be able to view the total value of record collection', function(){
      customer.buyRecord(record1);
      customer.buyRecord(record2);
      assert.deepStrictEqual(customer.totalValueOfCollection(), 17);
    });

});
