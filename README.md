# E-Commerce System

- [E-Commerce System](#e-commerce-system)
  - [Overview](#overview)
  - [Development](#development)
  - [Reflection](#reflection)

## Overview

For this project, I was tasked with building an **E-Commerce System** using Typescript with the intended goals:

1. **Develop Product Class**:

- **Product Base Class** (`Product.ts`):
  - Define a `Product` class that includes the appropriate properties based on data provided in the API response.
  - Include methods `displayDetails()` and `getPriceWithDiscount()`, and implement them appropriately based on the provided data.

2. **Implement Utilities**:

- **Discount Calculator Module** (`discountCalculator.ts`):

  - Create a `calculateDiscount()` function to handle discount calculations for products.
  - This function should return the dollar amount that a product is discounted by.

- **Tax Calculator Module** (`taxCalculator.ts`):
  - Create a `calculateTax()` function to handle tax calculations for products.
  - This function should return the dollar amount that a product is taxed at.
  - Note that the `product` data returned from the API does not include a `taxPercentage` field like it includes a `discountPercentage` field. Apply a default standard tax rate of 4.75% to each product; however, products with a `category` of “groceries” should only be taxed at 3%.

3. **Handle Asynchronous Operations**:

- **API Service** (`apiService.ts`):
  - Create API requests using `async/await` and Promises.
  - Implement functions to fetch product data and handle errors using `try/catch`.

4. **Error Handling Utility**:

- **Error Handler Module** (`errorHandler.ts`):
  - Implement a custom error class and functions to handle different types of errors gracefully.

5. **Create the Main Application**:

- **Main Entry File** (`index.ts`):
  - Import the product classes, tax calculator, and API service.
  - Create instances of `Product` by fetching product data from the API.
  - Use asynchronous functions to fetch product data and display it.
  - Demonstrate error handling and OOP principles in action.

## Development

This project was developed using **Typescript**. Due to the information given for what needed to be added to the project's deliverables, completion of this project was pretty straight-forward.

While working through code, I had to review material covered in the Typescript lesson we covered. In order to achieve the output I not only wanted, but needed, I had to re-work and manipulate the code several times. Within my **Reflection** section below, I'll give more detail to address how I implemented Typescript, what challeneges I encountered (and how I overcame them), and how I handled asynchronous operations and error management.

## Reflection

Here are three tables showcasing how I implemented Typescript features, OOP principles, and asynchronous operations:

| Principle                 | Implementation Example                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| **Encapsulation**         | All product logic is grouped in the `Product` class (`getPriceWithDiscount`, `displayDetails`).    |
| **Abstraction**           | Consumers of `Product` interact with simple methods, hiding internal complexity (e.g., tax logic). |
| **Modularity**            | Files like `Product.ts`, `discountCalculator.ts`, `apiService.ts` isolate functionality.           |
| **Single Responsibility** | Each class/function has one job: product logic, tax calculation, error handling, etc.              |
| **Reusability**           | Utility functions like `calculateDiscount()` and `calculateTax()` can be used anywhere.            |
| **Basic Polymorphism**    | `handleApiError()` handles different error types (`ApiError`, `Error`, unknown) using type guards. |

| Principle                 | Implementation Example                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| **Encapsulation**         | All product logic is grouped in the `Product` class (`getPriceWithDiscount`, `displayDetails`).    |
| **Abstraction**           | Consumers of `Product` interact with simple methods, hiding internal complexity (e.g., tax logic). |
| **Modularity**            | Files like `Product.ts`, `discountCalculator.ts`, `apiService.ts` isolate functionality.           |
| **Single Responsibility** | Each class/function has one job: product logic, tax calculation, error handling, etc.              |
| **Reusability**           | Utility functions like `calculateDiscount()` and `calculateTax()` can be used anywhere.            |
| **Basic Polymorphism**    | `handleApiError()` handles different error types (`ApiError`, `Error`, unknown) using type guards. |

| Concept                     | Implementation Example                          |
| --------------------------- | ----------------------------------------------- |
| Async control flow          | `async/await` in `init()` and `fetchProducts()` |
| Error resilience            | `try/catch` with custom handler                 |
| Clean separation of logic   | API logic in `services`, error logic in `utils` |
| User-friendly error output  | Console messages via `handleApiError()`         |
| Testing async failure cases | CLI flags for simulation                        |

Challenges I encountered:

- Getting fecthed data from API to return all the fields required by the `Product` class (such as `tags`, `reviews`, tec.) in new `Product` instance.

  - **Solution**: Used mock data for missing fields to ensure every `Product` insatnce was fully constructed.

- Demonstrating error handling to simulate both API and runtime errors
  - **Solution**: Added command-line flags (`--simulate-api-error`, `--simulate-runtime-error`) to control error simulations without changing the core logic.
