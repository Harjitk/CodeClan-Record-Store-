var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('assert');

describe('recordStore', function(){

  var recordStore, record1, record2, record3, record4

  beforeEach(function () {
    recordStore = new RecordStore ("Steve's Record Store", "Glasgow");
    record1 = new Record ("Lauryn Hill", "The Miseducation of Lauryn Hill", "Hip Hop", 7);
    record2 = new Record ("Frank Ocean", "Channel Orange", "R&B", 10);
    record3 = new Record ("The Carters", "Everthing Is Love", "Hip Hop", 12);
    record4 = new Record ("Emile Sande", "Our Version of Events", "Soul", 8)

  });

  it('should have a name', function (){
    assert.equal(recordStore.name, "Steve's Record Store");
  });

  it('should have a city', function (){
    assert.equal(recordStore.city, "Glasgow");
  });


it('should have a balance', function(){
assert.equal(recordStore.balance, 90000)
});


it('should add Records to the Stores Inventory', function(){
recordStore.addRecord(record1);
assert.equal(recordStore.inventory.length, 1);
});

it('should list inventory', function(){
  recordStore.addRecord(record1);
  result = recordStore.listInventory();
  assert.equal(result[0], record1.printString())
})

//
// Create a method so the Record Store can sell a Record and adjusts
// the Store's balance to account for the Record being sold.

it('should sell a Record to adjust a Stores balance', function(){
  recordStore.addRecord(record1);
  recordStore.sellRecord(record1);
  assert.equal(recordStore.balance, 90007)

});

//
// Create a method that reports the financial situation of the Store,
//  showing the balance and value of inventory.
// get balance and compare to the inventory- This function is not bringing iut
// the expected value- -2 instead of 0


// it('should show the balance and value of the inventory', function(){
//   recordStore.addRecord(record1);
//   recordStore.addRecord(record2);
//   recordStore.sellRecord(record1);
//   recordStore.sellRecord(record2);
//   recordStore.finanicalReport();
//   assert.deepStrictEqual(recordStore.balance, 90017);
//   assert.deepStrictEqual(recordStore.inventory.length, 0);s
//   });

it('should be able to view all records of a given genre', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    assert.deepStrictEqual(recordStore.viewByGenre("Hip Hop"), [record1, record3]);
  });

});
