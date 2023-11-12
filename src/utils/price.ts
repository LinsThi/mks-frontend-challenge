export function removeCentsIfEquals0(productPrice: string) {
  return productPrice.replace(/\.00/g, "");
}
