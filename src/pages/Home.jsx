import { useState } from "react";
import Header from "../components/Header";
import Register from "../components/Register";

const Home = () => {
    const [intersected, setIntersected] = useState(1);
    return(
        <>
            <Header intersected = {intersected} setIntersected = {setIntersected}/>
            <main>
                <Register />
            </main>
        </>
    )
}

export default Home;
