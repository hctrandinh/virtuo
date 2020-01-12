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

function parseDate(str) {
  var mdy = str.split('-');
  return new Date(mdy[0], mdy[1], mdy[2]);
}

function datediff(first, second) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round((second-first)/(1000*60*60*24));
}

rentals.forEach(element => {
  var rental = {};
  rental.rentalcarid = element.carId;
  rental.rentaldriver = element.driver;
  var value1 = cars.find(x => x.id === element.carId);
  var first_day = parseDate(rentals.find(x => x.carId === element.carId).pickupDate);
  var last_day = parseDate(rentals.find(x => x.carId === element.carId).returnDate);
  var nb_days = datediff(first_day, last_day) + 1;
  var prix = value1.pricePerDay * nb_days
    + value1.pricePerKm * rentals.find(x => x.carId === element.carId).distance;
  rental.rentalpricing = prix;
  pt1.push(rental);
});

console.log("Part 1:", pt1);

//PART2

var pt2 = [] //Result part 1.

rentals.forEach(element => {
  var rental = {};
  rental.rentalcarid = element.carId;
  rental.rentaldriver = element.driver;

  var price2 = 0;
  var value1 = cars.find(x => x.id === element.carId);
  var first_day = parseDate(rentals.find(x => x.carId === element.carId).pickupDate);
  var last_day = parseDate(rentals.find(x => x.carId === element.carId).returnDate);
  var value2 = datediff(first_day, last_day) + 1;
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

console.log("Part 2:", pt2)

//PART 3

var pt3 = [];
pt2.forEach(element => {
  var cover_cost = {};
  var commission = element.rentalpricing * 0.3;
  cover_cost.rentalcarid = element.rentalcarid;
  cover_cost.commission = commission;
  cover_cost.insurance = commission / 2;
  var first_day = parseDate(rentals.find(x => x.carId === element.rentalcarid).pickupDate);
  var last_day = parseDate(rentals.find(x => x.carId === element.rentalcarid).returnDate);
  var nb_days = datediff(first_day, last_day) + 1;
  cover_cost.treasury = nb_days;
  cover_cost.virtuo = commission - cover_cost.insurance - cover_cost.treasury;
  pt3.push(cover_cost);
});

console.log("Part 3:", pt3);

//PART 4
var pt4 = [];
pt2.forEach(element => {
  var deductible = {};
  deductible.rentalcarid = element.rentalcarid;
  deductible.rentaldriver = element.rentaldriver;
  deductible.rentalpricing = element.rentalpricing;
  deductible.options = rentals.find(x => x.carId === element.rentalcarid).options;
  if(rentals.find(x => x.carId === element.rentalcarid).options.deductibleReduction)
  {
    var first_day = parseDate(rentals.find(x => x.carId === element.rentalcarid).pickupDate);
    var last_day = parseDate(rentals.find(x => x.carId === element.rentalcarid).returnDate);
    var nb_days = datediff(first_day, last_day) + 1;
    deductible.rentalpricing += nb_days * 4;
  }
  pt4.push(deductible);
})
console.log("Part 4:", pt4);

//PART 5
var pt5 = [];
var who = ["driver", "partner", "insurance", "treasury", "virtuo"];
var type = ["debit", "credit", "credit" , "credit" , "credit"];

for(let index = 0; index < pt4.length; index++)
{
  var pay = {};
  pay.rentalcarid = pt2[index].rentalcarid;
  var payment = [];
  for(let index2 = 0; index2 < 5; index2++)
  {
    var payment_details = {};
    payment_details.who = who[index2];
    payment_details.type = type[index2];
    if(index2 == 0)
    {
      payment_details.amount = pt4[index].rentalpricing;
    }
    if(index2 == 1)
    {
      payment_details.amount = pt4[index].rentalpricing - pt3[index].commission;
    }
    if(index2 == 2)
    {
      payment_details.amount = pt3[index].insurance;
    }
    if(index2 == 3)
    {
      payment_details.amount = pt3[index].treasury;
    }
    if(index2 == 4)
    {
      if(pt4[index].options.deductibleReduction)
      {
        payment_details.amount = pt3[index].virtuo + pt4[index].rentalpricing - pt2[index].rentalpricing;
      }
      else
      {
        payment_details.amount = pt3[index].virtuo;
      }
    }
    payment.push(payment_details);
  }
  pay.payment = payment;
  pt5.push(pay);
}

console.log("Part 5:", pt5);
/*
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
*/