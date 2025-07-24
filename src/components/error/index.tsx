import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <div>
        <h1>404</h1>
        <p>Page Not Found</p>
        <NavLink to="/" replace>Go to Home</NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
