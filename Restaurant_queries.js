
#Query 1
db.restaurant.find()

#Query 2
db.restaurant.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine:1})

#Query 3
db.restaurant.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine:1})

#Query 4
db.restaurant.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, address: { zipcode: 1 }})

#Query 5
db.restaurant.find({borough: 'Bronx'})

#Query 6
db.restaurant.find({borough: 'Bronx'}).limit(5)

#Query 7
db.restaurant.find({borough: 'Bronx'}).skip(5).limit(5)

#Query 8
db.restaurant.find({'grades.score': {$gt:90}})

#Query 9
db.restaurant.find({'grades.score': {$gt:80, $lt:100}})

#Query 10
db.restaurant.find({'address.coord.0': {$lt:-95.754168}})

#Query 11
db.restaurant.find({$and: [{cuisine: {$not: /American/}}, {'address.coord.1': {$lt:-65.754168}}, {'grades.score': {$gt:90}}]})

#Query 12
db.restaurant.find({cuisine: {$not: /American/}, 'address.coord.1': {$lt:-65.754168}, 'grades.score': {$gt:70}})

#Query 13
db.restaurant.find({cuisine: {$not: /American/}, 'borough': {$not: /Brooklyn/}, 'grades.grade': 'A'}).sort({cuisine: -1})

#Query 14
db.restaurant.find({name: /^Wil/}, {_id:0, restaurant_id: 1, name: 1, borough: 1, cuisine:1})

#Query 15
db.restaurant.find({name: /ces$/}, {_id:0, restaurant_id: 1, name: 1, borough: 1, cuisine:1})

#Query 16
db.restaurant.find({name: /Reg/}, {_id:0, restaurant_id: 1, name: 1, borough: 1, cuisine:1})

#Query 17
db.restaurant.find({cuisine: {$in: [/American/, /Chinese/]}, borough: 'Brooklyn'})

#Query 18
db.restaurant.find({ borough: {$in: ['Staten Island','Queens', 'Bronx', 'Brooklyn']}}, {_id:0, restaurant_id: 1, name: 1, borough: 1, cuisine:1})

#Query 19
db.restaurant.find({ borough: {$nin: ['Staten Island','Queens', 'Bronx', 'Brooklyn']}}, {_id:0, restaurant_id: 1, name: 1, borough: 1, cuisine:1})

#Query 20
db.restaurant.find({'grades.score': {$lte: 10}}, {_id:0, restaurant_id: 1, name: 1, borough: 1, cuisine:1})

#Query 21
db.restaurant.find({$or: [{name: {$not: /^Wil/}}, {cuisine: 'Seafood', cuisine: {$nin: [/American/, /Chinese/]}}]}, {_id:0, restaurant_id: 1, name: 1, borough: 1, cuisine:1})

#Query 22
db.restaurant.find({$or: [{name: {$not: /^Wil/}}, {cuisine: 'Seafood', cuisine: {$nin: [/American/, /Chinese/]}}]}, {_id:0, restaurant_id: 1, name: 1, grades:1})

#Query 23
db.restaurant.find({'grades.1.grade': 'A', 'grades.1.score': 9, 'grades.1.date': ISODate('2014-08-11T00:00:00Z')}, {_id: 0, restaurant_id: 1, name: 1, grades: 1})

#Query 24
db.restaurant.find({'address.coord.1': {$gt: 42, $lte: 52}}, {_id: 0, restaurant_id: 1, name: 1, address: 1})

#Query 25
db.restaurant.find().sort({name: 1})

#Query 26
db.restaurant.find().sort({name: -1})

#Query 27
db.restaurant.find().sort({cuisine: 1, borough: -1})

#Query 28
db.restaurant.find({'address.street': { $exists: false }})

#Query 29
db.restaurant.find({'address.coord': {$type: 'double'}})

#Query 30
db.restaurant.find({'grades.score': {$mod: [7,0]}}, {_id: 0, restaurant_id: 1, name: 1, grades: 1})

#Query 31
db.restaurant.find({name: /mon/}, {_id: 0, name: 1, borough: 1, 'address.coord': 1, cuisine: 1})

#Query 32
db.restaurant.find({name: /^Mad/}, {_id: 0, name: 1, borough: 1, 'address.coord': 1, cuisine: 1})
