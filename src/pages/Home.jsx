import { useState } from "react";
import Header from "../components/Header";

const Home = () => {
    const [intersected, setIntersected] = useState(1);
    return(
        <>
            <Header intersected = {intersected} setIntersected = {setIntersected}/>
        </>
    )
}

export default Home;
