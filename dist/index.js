"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiService_1 = require("./services/apiService");
const discountCalculator_1 = require("./utils/discountCalculator");
const taxCalculator_1 = require("./utils/taxCalculator");
const errorHandler_1 = require("./utils/errorHandler");
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Simulate API error
            if (simulateApiError) {
                throw new errorHandler_1.ApiError("Simulated API failure, 503");
            }
            // Fetch products from the API
            const products = yield (0, apiService_1.fetchProducts)();
            console.log(`Successfully fetched ${products.length} products.\n`);
            // Siumlate runtime error
            if (simulateRuntimeError) {
                const broken = undefined;
                // Throws error
                console.log(broken.title);
            }
            // Iterate over each product to demonstrate class functionality
            for (const product of products) {
                product.displayDetails();
                // Manual usage of utility functions (separate from class methods)
                const discount = (0, discountCalculator_1.calculateDiscount)(product.price, product.discountPercentage);
                const tax = (0, taxCalculator_1.calculateTax)(product.price - discount, product.category);
                console.log(`(Manual Discount): -$${discount.toFixed(2)}`);
                console.log(`(Manual Tax on Discounted Price): $${tax.toFixed(2)}`);
                console.log("--------------------------------------------------\n");
            }
            // Catches an errors that occur during the try blocks
        }
        catch (error) {
            // Calls function to process the caught error
            (0, errorHandler_1.handleApiError)(error);
        }
    });
}
// Run the application
main();
