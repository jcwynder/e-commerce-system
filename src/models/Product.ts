// Imports to utilize data and functions from these files
import { dimensions, reviews, meta } from "./Types";
import { calculateDiscount } from "../utils/discountCalculator";
import { calculateTax } from "../utils/taxCalculator";

// Defines Product class that represents a product with various properties and methods
export class Product {
  // Method used to create and initialize an object of the Product's properties
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public category: string,
    public price: number,
    public discountPercentage: number,
    public rating: number,
    public stock: number,
    public tags: string[],
    public brand: string,
    public sku: string,
    public weight: number,
    public dimensions: dimensions,
    public warrantyInformation: string,
    public shippingInformation: string,
    public availabilityStatus: string,
    public reviews: reviews,
    public returnPolicy: string,
    public minimumOrderQuantity: number,
    public meta: meta,
    public thumbnail: string,
    public images: string[]
  ) {}

  // Method used to calculate and return the Product's price after applying discount
  getPriceWithDiscount(): number {
    // Returns the original price minus the calculated discount
    return this.price - calculateDiscount(this.price, this.discountPercentage);
  }

  // Method used to calculate and return the tax amount for the discounted Product's category
  getTaxAmount(): number {
    // Returns the tax amount calculated based on the discounted price for Product's category
    return calculateTax(this.getPriceWithDiscount(), this.category);
  }

  // Method used to log Product information
  displayDetails(): void {
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
    console.log(
      `Dimensions (WxHxD): ${this.dimensions.width} x ${this.dimensions.height} x ${this.dimensions.depth} cm`
    );
    console.log(`Warranty Information: ${this.warrantyInformation}`);
    console.log(`Shipping Information: ${this.shippingInformation}`);
    console.log(`Return Policy: ${this.returnPolicy}`);
    console.log(`Tags: ${this.tags.join(", ")}`);

    // Display reviews
    console.log(`Reviews (${this.reviews.length}):`);
    this.reviews.forEach((review, index) => {
      console.log(
        `  ${index + 1}. ${review.rating} - "${review.comment}" by ${
          review.reviewerName
        } on ${review.date}`
      );
    });

    // Display meta information
    console.log(
      `Meta: Created at ${this.meta.createdAt}, Updated at ${this.meta.updatedAt}`
    );
    console.log(`Barcode: ${this.meta.barcode}`);
    console.log(`QR Code: ${this.meta.qrCode}`);

    // Display tax amount calculated on discounted price
    console.log(`Tax: $${this.getTaxAmount().toFixed(2)}`);
  }
}
