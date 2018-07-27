var Record = require('../record');
var RecordStore = require('../record_store');
var assert = require('assert');

describe('record', function(){

  var record1

  beforeEach(function () {
    record1 = new Record ("Lauryn Hill", "The Miseducation of Lauryn Hill", "Hip Hop", 7);
    record2 = new Record ("Frank Ocean", "Channel Orange", "R&B", 10);
    record3 = new Record ("The Carters", "Everthing Is Love", "Hip Hop", 12);
    record4 = new Record ("Emile Sande", "Our Version of Events", "Soul", 8)

  });

  it('should have an artist', function (){
    assert.equal(record1.artist, "Lauryn Hill");

  });

  it('should have a title', function (){
    assert.equal(record1.title, "The Miseducation of Lauryn Hill");

  });


  it('should have a genre', function (){
    assert.equal(record1.genre, "Hip Hop");

  });

  it('should have a price', function (){
    assert.equal(record1.price, 7);

  });
  //
  // Create a method that prints out the Record's properties as a string.

  it('should print out the Records properties as a string', function(){
    assert.equal(record1.printString(), "Artist: Lauryn Hill, Title: The Miseducation of Lauryn Hill, Genre: Hip Hop, Price: 7");
  });





});
