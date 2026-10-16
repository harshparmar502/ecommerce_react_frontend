const BASE_URL = "https://dummyjson.com";
const BASE_URL1 = "https://ecommerce-oxj0.onrender.com";


export async function login(params) {
 console.log(params);

} 

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);

  if (!res.ok) {
    throw new Error(`Request fail hui (status: ${res.status})`);
  }

  const data = await res.json();
  return data.products;
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);

  if (!res.ok) {
    throw new Error(`Request fail hui (status: ${res.status})`);
  }

  const data = await res.json();
  return data;
}

export async function getCategoriesData(slug) {
  const res = await fetch(`${BASE_URL}/products/category/${slug}`);

  if (!res.ok) {
    throw new Error(`Request fail hui (status: ${res.status})`);
  }

  const data = await res.json();
  return data.products;
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error(`Request fail hui (status: ${res.status})`);
  }

  return res.json();
}
