// Method that takes "price" and "discountedPercentage" arguments to calculate and return the Product's discount amount
export function calculateDiscount(
  price: number,
  discountPercentage: number
): number {
  // Checks if "price" is less than or equal to 0 OR if the "discountPercentage" is less than or equal to 0 (condtion: true)
  if (price <= 0 || discountPercentage <= 0)
    // If either condition above is true, the function returns 0 to indicate no discount for the Product
    return 0;
  // If either condition above is false, the function calculates and returns the percentage amount of the Product's discount
  return (price * discountPercentage) / 100;
}
