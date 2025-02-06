import { IProduct } from './product.types';
let products: IProduct[] = [];

export const addProduct = (payload: IProduct) => {
  const newProducts = [...products];
  if (!payload.name) {
    throw new Error('Product name is required');
  }
  if (!payload.price || isNaN(payload.price)) {
    throw new Error('Product price is required');
  }
  const product = newProducts.find((product) => product.id === payload.id);
  if (product) {
    throw new Error('Product already exists');
  }
  newProducts.push(payload);
  products = newProducts;
  console.log('products');
  return payload;
};

export const deleteProduct = (id: number) => {
  const newProducts = products.filter((product) => product.id !== id);
  products = newProducts;
  return products;
};

export const updateProduct = (id: string, payload: Partial<IProduct>) => {
  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    throw new Error('Product not found');
  }
  const newProducts = products.map((product) => {
    if (product.id === Number(id)) {
      return {
        ...product,
        ...payload,
      };
    }
    return product;
  });

  products = newProducts;
  return products;
};

export const getProductById = (id: string) => {
  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};

export const getProduct = () => products;
