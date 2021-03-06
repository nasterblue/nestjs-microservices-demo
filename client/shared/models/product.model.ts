export class ProductModel {
  [key: string]: any;

  constructor(data: Partial<ProductModel>) {
    Object.assign(this, data);
  }
}

export const nasterblueProduct = new ProductModel({
  "@context": "http://schema.org",
  "@type": "ItemList",
  "url": "http://multivarki.ru?filters%5Bprice%5D%5BLTE%5D=39600",
  "numberOfItems": "315",
  "itemListElement": [
    {
      "@type": "Product",
      "image": "http://img01.multivarki.ru.ru/c9/f1/a5fe6642-18d0-47ad-b038-6fca20f1c923.jpeg",
      "url": "http://multivarki.ru/brand_502/",
      "name": "Brand 502",
      "offers": {
        "@type": "Offer",
        "price": "4399 p."
      }
    },
    {
      "@type": "Product",
      "name": "..."
    }
  ]
});