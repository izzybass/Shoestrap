2.
var pump = function (amount) {
  this.liters += amount;
  console.log('You put ' + amount + ' liters in ' + this.name);
};

var garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ',  garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);

3.
var pumpFuel = function (plane) {
  plane.fuel += 1;
};

var airplane = {
  fuel: 0,
  fly: function () {
    if (this.fuel < 2) {
      return 'on the ground!';
    }
    else {
      return 'flying!';
    }
  }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Can it fly now? ' + airplane.fly());

4.
var tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function () {
    this.coinCount -= 1;
  }
};

tipJar.tip();
console.log('Wishing well should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Wishing well should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Wishing well should have 8 coins: ' + tipJar.coinCount);



5.
var revealSecret = function () {
  return this.secret;
};

var shoutIt = function (person, func) {
  person.revealItAll = func;
  var result = person.revealItAll();
  alert(person.name + " said: " + result);
};

var avi = {
  name: "Avi",
  secret: "Im scared of snakes!"
};

var narkis = {
  name: "Narkis",
  secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);


***Individual Exercise***

var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType]) {
      console.log("I'll try to prepare that for you.");
      if(this.beans<this.drinkRequirements) {"Sorry, we're all out of beans!"
      }else{
        this.beans -= this.drinkRequirements;
        console.log("Your drink is ready!")
      }

    // TODO: Finish this method
    }else{
      console.log("Sorry, we don't make "+ drinkType)
    }
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");


***Individual Exercise Extension 1***

var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType]
      && this.beans>this.drinkRequirements[drinkType]) {
        console.log("Your drink is ready!");
       
    } else {
      console.log("Sorry, we don't make "+ drinkType)
    }
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");


***Individual Exercise Extension 2***

var coffeeShop = {
  beans: 40,
  beanPrice: 0.10,
  money: 100.00,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType]
      && this.beans<this.drinkRequirements) {
        console.log("Your drink is ready!");
       
    } else {
      console.log("Sorry, we don't make "+ drinkType)
    }
  },

  buySupplies: function (newBeans) {
    console.log("The cost of your beans is: "+ this.beanPrice*newBeans);
  }
}

coffeeShop.buySupplies(100);



