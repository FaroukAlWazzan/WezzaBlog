// the 404 not found page component
import { Link } from "react-router-dom";

const NotFound = () => {

  return (

    <div className="not-found">
      <h2>Sorry</h2>
      <p>We can't find this page (404) code error</p>
      <Link to='/'>Go to Home Page</Link>
    </div>
    
  );
}

export default NotFound;