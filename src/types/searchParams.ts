export enum SearchParams {
  CATEGORY = "category",
  BRAND = "brand",
  PRICE = "price",
  STOCK = "stock",
  SORT = "sort",
  VIEW = "view"
}

export type SearchParamsObject = Record<string, string | null>;

export type SearchParamsArray = [string, string][];