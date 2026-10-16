import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mt-4">
      <h2>404 - Page nahi mila</h2>
      <Link to="/">Home par jao</Link>
    </div>
  );
}

export default NotFound;