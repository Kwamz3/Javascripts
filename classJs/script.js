class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    };

    displayProduct() {
        console.log(`Your product: ${this.name}`);
        console.log(`Your price: $${this.price.toFixed(2)}`);
    };

    calculateTax(salesTax) {
        return this.price + (this.price * salesTax);
    }

};

const salesTax = 0.05;

const product1 = new Product("shirt", 23);
product1.displayProduct();
const total = product1.calculateTax(salesTax);
console.log(`SalesTax included: $${total}`);

const product2 = new Product("blouse", 45);
product2.displayProduct()