// class Product {
//   constructor(name, price, discountable) {
//     this.name = name;
//     this.price = price;
//     this.discountable = discountable;
//   }

//   get ClearancePrice() { //getter method: a method that gets a computed property value
//     return this.price * 0.5;
//   }
//   set ClearancePrice(newPrice) { //setter method: a method that sets a property value
//     this.price = newPrice * 2;
//   }
// }

// const product1 = new Product("Coffee Maker", 99.95, false);
// console.log(`Clearance Price: $${product1.ClearancePrice}`); 

class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this._price = price;
    this.discountable = discountable;
  }

  get price() {
    return this._price;
  }
  
  set price(price) {
    if (typeof price !== "number") {
      return this._price;
    } else {
      this._price = price; 
    }
  }
}

const product1 = new Product("Coffee Maker", 99.95, false);
product1.price = 30;
console.log(product1.price);
// product1.price = {};
// console.log(product1.clearancePrice);
// product1.price = {};
// console.log(product1.newPrice);