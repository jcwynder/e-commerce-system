// Method that takes "price" and "category" arguments to calculate and return the Product's tax amount
export function calculateTax(price: number, category: string): number {
  const standardTaxRate = 0.0475; // Variable used to represent default standard tax rate of 4.75% for each Product
  const groceryTaxRate = 0.03; // Variable used to represent tax rate of 3% for Product's with "groceries" category
  // Variable used to determine Product's proper tax rate ("groceryTaxRate"OR "standardTaxRate") based on category entry
  const applicableTaxRate =
    category.toLowerCase() === "groceries" ? groceryTaxRate : standardTaxRate;
  // Calculates and returns Product's tax amount
  return price * applicableTaxRate;
}
