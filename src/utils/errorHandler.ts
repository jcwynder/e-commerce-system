// Method to extend JavaScript's built-in "Error" class to create a custom error for API-related problems
export class ApiError extends Error {
  // Sets up custom error data when you create an instance and adds optional status code property to display HTTP status code
  constructor(message: string, public statusCode?: number) {
    // Passes the error message to the built-in "Error" class
    super(message);
    // Overrides default "name" property to set as "ApiError"
    this.name = "ApiError";
  }
}

/*
Method that takes "error" argument of unknown type, which accepts any type of error. 
"Void" is used to indicate that this function does not return anything
*/
export function handleApiError(error: unknown): void {
  // Checks if the "error" is an instance of "ApiError" (condition: true)
  if (error instanceof ApiError) {
    // If above condition is true, logs a more specific error message including the status code to the console
    console.error(`API Error: ${error.message} (status: ${error.statusCode})`);
    // Checks if the "error" is an instance of "Error" (condition: true)
  } else if (error instanceof Error) {
    // If above condition is true, logs an error message with an "unexpected error" label
    console.error(`Unexpected Error: ${error.message}`);
    // If both conditions above for "error" are false, logs message that unknown error occured
  } else {
    console.error("An unknown error occurred.");
  }
}
