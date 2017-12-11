var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

function connect(){
    // if database specified in url doesnt exist, mongodb will create one
    // mongodb://localhost:27017/newdb
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connection stablished");
    db.close();
  });
}  

function closeConnection(){
    db.close();
}

function createNewCollection(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbase = db.db("eatjs"); //here
        dbase.createCollection("eatjsCollection", function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });
}

function insertDocumentIntoCollection(){
    MongoClient.connect(url, function(err, db) {
        var dbase = db.db("eatjs"); //here        
        if (err) throw err;
        var myobj = { name: "Company Inc", address: "Highway 37" };
        var dbase = db.db("eatjs"); //here
        dbase.collection("eatjsCollection").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
}

(function main(){
    connect();
    insertDocumentIntoCollection();
    createNewCollection();
})();

