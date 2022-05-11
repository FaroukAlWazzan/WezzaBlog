import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('mario');
    const handleClick = () => {
        setName('luigi');
    }

    const handleClickAgain = (name, e) => {
        console.log('Hi ' + name, e.target);
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('rock', e)}>Click me 2nd</button>
        </div>
    );
}

export default Home;