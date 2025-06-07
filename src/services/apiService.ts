// Imports to utilize data and functions from these files
import { Product } from "../models/Product";
import { handleApiError } from "../utils/errorHandler";

// Method used to fetch Product data and return a Promise that resolves to an array of "Product" objects
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Map each API product into a fully constructed Product instance
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
          // Mocked tags
          ["popular", "featured"],
          // Fallback for brand if not provided
          product.brand || "Generic",
          // Construct SKU from ID
          `SKU-${product.id}`,
          // Mocked weight
          1.2,
          // Mocked dimensions object
          { width: 10, height: 5, depth: 2 },
          // Mocked warranty information
          "1 year warranty",
          // Mocked shipping info
          "Ships within 3-5 business days",
          // Availability depends on stock
          product.stock > 0 ? "In Stock" : "Out of Stock",
          // Mocked reviews array
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
          // Mocked return policy
          "30-day return policy",
          // Minimum order quantity mocked as 1
          1,
          // Mocked meta information
          {
            createdAt: "2024-01-01",
            updatedAt: "2025-05-01",
            barcode: `BC${product.id}XYZ`,
            qrCode: `QR${product.id}XYZ`,
          },
          // Thumbnail and images from API response
          product.thumbnail,
          product.images
        )
    );
    // Catches any errors that occur during the try blocks
  } catch (error) {
    // Calls function to process the caught error
    handleApiError(error);
    // Re-throws error to progate it further up the call stack
    throw error;
  }
}
