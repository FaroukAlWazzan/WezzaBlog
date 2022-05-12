import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);
    // const handleClick = () => {
    //     setName('luigi');
    //     setAge(29);
    // }
    const [blogs, setBlogs] = useState(null)

    // const [name, setName] = useState('mario')
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then((res) => {
                return res.json();;
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
            })
    }, [])

    // const handleClickAgain = (name, e) => {
    //     console.log('Hi ' + name, e.target);
    // }
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="all blogs" />}
            {/* <h2>Homepage</h2> */}
            {/* <p>{name} is {age} years old</p> */}
            {/* <button onClick={() => setName('luigi')}>Click me</button> */}
            {/* {name} */}
            {/* <button onClick={(e) => handleClickAgain('rock', e)}>Click me 2nd</button> */}
        </div>
    );
}

export default Home;