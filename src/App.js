import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { useState } from 'react';

function App() {
  // const title = 'Welcome to the blog';
  // const likes = 50; 
  // const link = "http://www.google.com"
  const [cartIsEmpty] = useState(false);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/redir" element={<Navigate to="/" />} />
            <Route path="/checkout" element={cartIsEmpty ? <Navigate to="blogs" /> : <p>This is your checkout</p>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
