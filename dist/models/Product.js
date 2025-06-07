"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const discountCalculator_1 = require("../utils/discountCalculator");
const taxCalculator_1 = require("../utils/taxCalculator");
// Defines Product class that represents a product with various properties and methods
class Product {
    // Method used to create and initialize an object of the Product's properties
    constructor(id, title, description, category, price, discountPercentage, rating, stock, tags, brand, sku, weight, dimensions, warrantyInformation, shippingInformation, availabilityStatus, reviews, returnPolicy, minimumOrderQuantity, meta, thumbnail, images) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.tags = tags;
        this.brand = brand;
        this.sku = sku;
        this.weight = weight;
        this.dimensions = dimensions;
        this.warrantyInformation = warrantyInformation;
        this.shippingInformation = shippingInformation;
        this.availabilityStatus = availabilityStatus;
        this.reviews = reviews;
        this.returnPolicy = returnPolicy;
        this.minimumOrderQuantity = minimumOrderQuantity;
        this.meta = meta;
        this.thumbnail = thumbnail;
        this.images = images;
    }
    // Method used to calculate and return the Product's price after applying discount
    getPriceWithDiscount() {
        // Returns the original price minus the calculated discount
        return this.price - (0, discountCalculator_1.calculateDiscount)(this.price, this.discountPercentage);
    }
    // Method used to calculate and return the tax amount for the discounted Product's category
    getTaxAmount() {
        // Returns the tax amount calculated based on the discounted price for Product's category
        return (0, taxCalculator_1.calculateTax)(this.getPriceWithDiscount(), this.category);
    }
    // Method used to log Product information
    displayDetails() {
        console.log(`Product: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Category: ${this.category}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
        console.log(`Discounted Price: $${this.getPriceWithDiscount().toFixed(2)}`);
        console.log(`Discount Percentage: ${this.discountPercentage}%`);
        console.log(`Rating: ${this.rating}`);
        console.log(`Stock: ${this.stock}`);
        console.log(`Availability: ${this.availabilityStatus}`);
        console.log(`Minimum Order Quantity: ${this.minimumOrderQuantity}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`SKU: ${this.sku}`);
        console.log(`Weight: ${this.weight} kg`);
        console.log(`Dimensions (WxHxD): ${this.dimensions.width} x ${this.dimensions.height} x ${this.dimensions.depth} cm`);
        console.log(`Warranty Information: ${this.warrantyInformation}`);
        console.log(`Shipping Information: ${this.shippingInformation}`);
        console.log(`Return Policy: ${this.returnPolicy}`);
        console.log(`Tags: ${this.tags.join(", ")}`);
        // Display reviews
        console.log(`Reviews (${this.reviews.length}):`);
        this.reviews.forEach((review, index) => {
            console.log(`  ${index + 1}. ${review.rating} - "${review.comment}" by ${review.reviewerName} on ${review.date}`);
        });
        // Display meta information
        console.log(`Meta: Created at ${this.meta.createdAt}, Updated at ${this.meta.updatedAt}`);
        console.log(`Barcode: ${this.meta.barcode}`);
        console.log(`QR Code: ${this.meta.qrCode}`);
        // Display tax amount calculated on discounted price
        console.log(`Tax: $${this.getTaxAmount().toFixed(2)}`);
    }
}
exports.Product = Product;
