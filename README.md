 **Explain, generally, what is meant by a NoSQL database.**

The general definition of a NoSql environment, is pretty much a non relational, they're agile and not predictable in the same way rational databases are, and thrive when there's a lot of unpredictable data incoming.

**Pros and Cons**

Pros
* Scaleability
* Capacity
* Performance
* Cost

Cons
* Difficult to manage
* Quite new

**Explain how databases like MongoDB and redis would be classified in the NoSQL world**

They're both document based databases, where the key value got data stored with it, and each document got a unique key to retrieve it.

**Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB**

To implement features that are lacking, for an example with the mongoose on MongoDB makes it object relational mapped. (ORM)

**Explain, using relevant examples, the strategy for querying MongoDB (all CRUD operations)**

CRUD = Create, Retrieve, Update and Delete.

First you have to specify what database you want to access, then you have specify what collection in the database.

database.collection.operation

**Create**
.insert()

To create a new object in the mongoDB you have to call the .insert()

```javascript
db.employees.insert(
{
  name: "random",
  lastName: "randomLastName",
  titles: [ { title1: "title1" }, { title2: "title2"} ]
})
```

**Retrieve**
.find()

To retrieve a item you have to call either .find() or .findOne()

.findOne() where it gets the first item that matches the search
```javascript
db.employees.findOne(
{
  name: "random"
})
```

**Update**
.update()

When you want to change a item to have to call the $Set to specify what field have to be changed
```javascript
db.employees.update(
{ name: "random" },
   {
   $set: { lastName: "NEWrandomLastName" }
   }
  )
```

**Delete**
.remove()

to remove all documents in the specific collection or specific
```javascript
db.employees.remove();
```
```javascript
db.employees.findOne(
{
  name: "random"
})
```

**Demonstrate, using a REST-API, how to perform all CRUD operations on a MongoDB**

Can be found in the restapi-demonstration.js
