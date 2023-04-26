import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // commented after passing the state below using custom hooks

    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);
    // const handleClick = () => {
    //     setName('luigi');
    //     setAge(29);
    // }

    // const [name, setName] = useState('mario')
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // function for handling user input
    // const handleClickAgain = (name, e) => {
    //     console.log('Hi ' + name, e.target);
    // }


    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
            {/* <h2>Homepage</h2> */}
            {/* <p>{name} is {age} years old</p> */}
            {/* <button onClick={() => setName('luigi')}>Click me</button> */}
            {/* {name} */}
            {/* <button onClick={(e) => handleClickAgain('rock', e)}>Click me 2nd</button> */}
        </div>
    );
}

export default Home;