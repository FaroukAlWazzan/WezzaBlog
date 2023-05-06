import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";


const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('ihsan');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      navigate('/');
    })
  }


  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />

        <label>Blog Body:</label>
        <textarea required value={body} onChange={e => setBody(e.target.value)}></textarea>

        <label>Blog Author:</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="jack">Jack</option>
          <option value="ihsan">Ihsan</option>
        </select>

        {/* If no submitted and not loading */}
        {!isPending && <button>Add Blog</button>}

        {/* If submitted and loading loading */}
        {isPending && <button disabled>Adding Blog...</button>}

        {/* <p>{author}</p> */}
        {/* <button onClick={() => navigate('/blogs/1')}>redirect to the first blog</button> */}
        {/* the next is for nested routes.  And in app.js we make the parent path like this '/about/*'  */}
        {/* <Routes>
                    <Route path="offers" element={<Offers />} />
        </Routes> */}

      </form>
    </div>
  );
}

export default Create;