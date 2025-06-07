// Imports to utilize data and methods from these files
import { Product } from "./models/Product";
import { fetchProducts } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { handleApiError, ApiError } from "./utils/errorHandler";

// Flags for simulating errors via command line
const simulateApiError = process.argv.includes("--simulate-api-error");
const simulateRuntimeError = process.argv.includes("--simulate-runetime-error");

/**
 * Initializes the application:
 * - Fetches product data from the API
 * - Creates Product instances
 * - Displays each product's details
 * - Demonstrates OOP, discount/tax calculations, and error handling
 */
async function main(): Promise<void> {
  try {
    // Simulate API error
    if (simulateApiError) {
      throw new ApiError("Simulated API failure, 503");
    }
    // Fetch products from the API
    const products: Product[] = await fetchProducts();

    console.log(`Successfully fetched ${products.length} products.\n`);

    // Siumlate runtime error
    if (simulateRuntimeError) {
      const broken = undefined as any;
      // Throws error
      console.log(broken.title);
    }

    // Iterate over each product to demonstrate class functionality
    for (const product of products) {
      product.displayDetails();

      // Manual usage of utility functions (separate from class methods)
      const discount = calculateDiscount(
        product.price,
        product.discountPercentage
      );
      const tax = calculateTax(product.price - discount, product.category);

      console.log(`(Manual Discount): -$${discount.toFixed(2)}`);
      console.log(`(Manual Tax on Discounted Price): $${tax.toFixed(2)}`);
      console.log("--------------------------------------------------\n");
    }

    // Catches an errors that occur during the try blocks
  } catch (error) {
    // Calls function to process the caught error
    handleApiError(error);
  }
}

// Run the application
main();
