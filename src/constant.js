const localhost =
  "https://productdirectorytestservice.gs1ng.org/v1/api/Product/getall";

export const getbyid =
  "https://productdirectorytestservice.gs1ng.org/v1/api/Product/getbyid";

const apiURL = "?PageNumber=1&PageSize=8";

export const endpoint = `${localhost}${apiURL}`;

export const productListURL = `${endpoint}/products/`;
export const productDetailURL = (id) => `${endpoint}/products/${id}/`;
