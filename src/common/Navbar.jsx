import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [categories, setCategories] = useState([]);
  const cartCount = 0; // placeholder, baad mein state/context se aayega

  useEffect(() => {
    async function loadCategories() {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MyStore</Link>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/cart">Cart</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;