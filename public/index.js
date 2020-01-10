'use strict';

//list of cars
//useful for ALL 5 steps
//could be an array of objects that you fetched from api or database
const cars = [{
  'id': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'name': 'fiat-500-x',
  'pricePerDay': 36,
  'pricePerKm': 0.10
}, {
  'id': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'name': 'mercedes-class-a',
  'pricePerDay': 44,
  'pricePerKm': 0.30
}, {
  'id': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'name': 'bmw-x1',
  'pricePerDay': 52,
  'pricePerKm': 0.45
}];

//list of current rentals
//useful for ALL steps
//the time is hour
//The `price` is updated from step 1 and 2
//The `commission` is updated from step 3
//The `options` is useful for step 4
const rentals = [{
  'id': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
  'driver': {
    'firstName': 'Roman',
    'lastName': 'Frayssinet'
  },
  'carId': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'pickupDate': '2020-01-02',
  'returnDate': '2020-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'driver': {
    'firstName': 'Redouane',
    'lastName': 'Bougheraba'
  },
  'carId': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'pickupDate': '2020-01-05',
  'returnDate': '2020-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'driver': {
    'firstName': 'Fadily',
    'lastName': 'Camara'
  },
  'carId': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'pickupDate': '2019-12-01',
  'returnDate': '2019-12-15',
  'distance': 400,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}];

//list of actors for payment
//useful from step 5
const actors = [{
  'rentalId': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}];

console.log(cars);
console.log(rentals);
console.log(actors);

//PART 1
var pt1 = [] //Result part 1.

function dayDiff(d1, d2)
{
  d1 = d1.getTime() / 86400000;
  d2 = d2.getTime() / 86400000;
  return new Number(d2 - d1).toFixed(0);
}

rentals.forEach(element => {
  var rental = {};
  rental.rentalid = element.carId;
  rental.rentaldriver = element.driver;
  var value1 = cars.find(x => x.id === element.carId);
  var prix = value1.pricePerDay * (new Date(rentals.find(x => x.carId === element.carId).pickupDate.split('-')[2],rentals.find(x => x.carId === element.carId).pickupDate.split('-')[1],rentals.find(x => x.carId === element.carId).pickupDate.split('-')[0]).getDate()
    - new Date(rentals.find(x => x.carId === element.carId).returnDate.split('-')[2],rentals.find(x => x.carId === element.carId).returnDate.split('-')[1],rentals.find(x => x.carId === element.carId).returnDate.split('-')[0]).getDate())
    + value1.pricePerKm * rentals.find(x => x.carId === element.carId).distance;
  rental.rentalpricing = prix;
  pt1.push(rental);
});

console.log(pt1);

//PART2

var pt2 = [] //Result part 1.

rentals.forEach(element => {
  var rental = {};
  rental.rentalid = element.carId;
  rental.rentaldriver = element.driver;

  var price2 = 0;
  var value1 = cars.find(x => x.id === element.carId);
  var value2 = (new Date(rentals.find(x => x.carId === element.carId).pickupDate.split('-')[2],rentals.find(x => x.carId === element.carId).pickupDate.split('-')[1],rentals.find(x => x.carId === element.carId).pickupDate.split('-')[0]).getDate()
  - new Date(rentals.find(x => x.carId === element.carId).returnDate.split('-')[2],rentals.find(x => x.carId === element.carId).returnDate.split('-')[1],rentals.find(x => x.carId === element.carId).returnDate.split('-')[0]).getDate());
  if(value2 < 1)
  {
    price2 = value1.pricePerDay * value2 + value1.pricePerKm * rentals.find(x => x.carId === element.carId).distance;
    rental.rentalpricing = price2;
    pt2.push(rental);
  }
  if(value2 >= 1 && value2 < 4)
  {
    price2 = (value1.pricePerDay * value2 + value1.pricePerKm * rentals.find(x => x.carId === element.carId).distance) * 0.90;
    rental.rentalpricing = price2;
    pt2.push(rental);
  }
  if(value2 >= 4 && value2 < 10)
  {
    price2 = (value1.pricePerDay * value2 + value1.pricePerKm * rentals.find(x => x.carId === element.carId).distance) * 0.70;
    rental.rentalpricing = price2;
    pt2.push(rental);
  }
  if(value2 >= 10)
  {
    price2 = (value1.pricePerDay * value2 + value1.pricePerKm * rentals.find(x => x.carId === element.carId).distance) * 0.50;
    rental.rentalpricing = price2;
    pt2.push(rental);
  }
});

console.log(pt2)


function fetchPrice(id2) {
  var test = (cars).find(element => element.id==id2);
  return [test.pricePerDay,test.pricePerKm]
}

rentals.forEach(element => {
  var returnDate = new Date(element.returnDate);
  var pickup  = new Date(element.pickupDate)
  var duree = parseInt(dayDiff(pickup,returnDate)) + 1;
  
  element.price = duree * fetchPrice(element.carId)[0] + element.distance * fetchPrice(element.carId)[1];
  console.log(element.price)
});