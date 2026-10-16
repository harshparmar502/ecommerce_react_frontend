import { useEffect, useLayoutEffect, useState } from "react";
import ProductCard from "./productCard/ProductCard";
import { getProducts, getCategories, getCategoriesData } from "../api/productApi";
import { Link, useLocation, useParams } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const [allProducts, setallProducts] = useState([]);
  const [visible, setVisible] = useState(6);
  const [categories, setCategories] = useState([]);
  const { slug } = useParams();
  const [searchQuery, SetsearchQuery] = useState('');
  const [sortQuery, SetsortQuery] = useState('');

useLayoutEffect(() => {
    async function loadCategories() {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    }
    loadCategories();
}, []);

 useLayoutEffect(() => {
  async function loadProducts() {
    const data = slug
      ? await getCategoriesData(slug)
      : await getProducts();
    setProducts(data);
    setallProducts(data);
    setVisible(6);
    console.log(data);
  }
  loadProducts();
}, [slug]);


 useLayoutEffect(() => {
  
    const searchProductResult = allProducts.filter((item)=>{
       return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setProducts(searchProductResult);
    // console.log(searchProductResult);
  
    const sortProductResult = searchProductResult.sort((a,b)=>{
      switch (sortQuery) {
          case 'sortbyprice':
            return b.price - a.price
          break;
          case 'sortbystar':
            return a.rating - b.rating
          break;
          case 'sortbyaz':
            return a.title - b.title
          break;
          case 'sortbyza':
            return b.title - a.title
          break;
        
          default:
            return
          break;
      }
    });
    // console.log(sortProductResult);
    setProducts(sortProductResult);

}, [searchQuery, sortQuery]);


  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          <p>{searchQuery}</p>
          <input type="text" value={searchQuery} onChange={(e) => SetsearchQuery(e.target.value)} placeholder="Search Product" />
          <select onChange={(e)=>SetsortQuery(e.target.value)}>
            <option value="">Sort By</option>
            <option value="sortbyprice">Sort By Price</option>
            <option value="sortbystar">Sort By Star</option>
            <option value="sortbyaz">Sort By A-Z</option>
            <option value="sortbyza">Sort By Z-A</option>
          </select>
          <p>{sortQuery}</p>
        </div>
      </div>
    </div>
      <div className="container">
        <div className="row">
          <div className="col" style={{ width: "10rem", maxWidth: "10rem" }}>
            <ul>
              <h3>Categories</h3>
              {categories.map((item) => (
                <li key={item.slug}>
                  <Link to={`/products/${item.slug}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <div className="row">
              {products.slice(0, visible).map((item) => (
                <div className="col" key={item.id}>
                  <ProductCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.thumbnail}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          {visible < products.length ? (
            <button onClick={() => setVisible(visible + 6)}>Load more</button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );

}

export default Product;

