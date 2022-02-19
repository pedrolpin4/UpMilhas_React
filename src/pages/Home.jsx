import { useState } from "react";
import FAQ from "../components/Home/FAQ";
import Header from "../components/Home/Header";
import HowWorks from "../components/Home/HowWorks";
import Register from "../components/Home/Register";
import WhoWeAre from "../components/Home/WhoWeAre";
import Footer from "../components/Home/Footer";

const Home = () => {
    const [intersected, setIntersected] = useState(1);
    return(
        <>
            <Header intersected = {intersected} setIntersected = {setIntersected}/>
            <main>
                <Register />
                <HowWorks />
                <WhoWeAre />
                <FAQ />
            </main>
            <Footer />
        </>
    )
}

export default Home;
