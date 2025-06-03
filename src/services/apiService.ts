// Imports to utilize data and functions from these files
import { Product } from "../models/Product";
import { handleApiError } from "../utils/errorHandler";

// Method used to fetch Product data and return a Promise that resolves to an array of "Product" objects
export async function fetchProducts(): Promise<Product[]> {
  // Attempts to fetch data from the specified API endpoint
  try {
    const response = await fetch("https://dummyjson.com/products");
    // Checks if "response" from the above fetch call was unsuccesful (condition: true)
    if (!response.ok) {
      // If "response" is NOT OK (unsuccessful), throws descriptive Error message
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parses the JSON body of the successful "response"
    const data = await response.json();

    /*
    Maps over the "Product's" array obtained from the fetched data
    For each "Product" object, creates a new 'Product' instance with structured data
    */
    return data.products.map(
      (product: any) =>
        new Product(
          product.id,
          product.title,
          product.description,
          product.category,
          product.price,
          product.discountPercentage,
          product.rating,
          product.stock,
          ["popular", "featured"],
          product.brand || "Generic",
          `SKU-${product.id}`,
          1.2,
          { width: 10, height: 5, depth: 2 },
          "1 year warranty",
          "Ships within 3-5 business days",
          product.stock > 0 ? "In Stock" : "Out of Stock",
          [
            {
              rating: 4,
              comment: "Great product!",
              date: "2025-01-15",
              reviewerName: "Alice",
              reviewerEmail: "alice@example.com",
            },
            {
              rating: 5,
              comment: "Highly recommend!",
              date: "2025-01-18",
              reviewerName: "Bob",
              reviewerEmail: "bob@example.com",
            },
          ],
          "30-day return policy",
          1,
          {
            createdAt: "2024-01-01",
            updatedAt: "2025-05-01",
            barcode: `BC${product.id}XYZ`,
            qrCode: `QR${product.id}XYZ`,
          },
          product.thumbnail,
          product.images
        )
    );
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}
