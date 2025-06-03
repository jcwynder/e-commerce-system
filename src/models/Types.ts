// Exports property data of the "dimensions" entries from the API response
export type dimensions = {
  width: number;
  height: number;
  depth: number;
};

// Exports property data of the "reviews" entries from the API response
export type reviews = Array<{
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}>;

// Exports property data of the "meta" entries from the API response
export type meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};
