import { useRef, useState } from "react";
import FAQ from "../components/Home/FAQ";
import Header from "../components/Home/Header";
import HowWorks from "../components/Home/HowWorks";
import Register from "../components/Home/Register";
import WhoWeAre from "../components/Home/WhoWeAre";
import Footer from "../components/Home/Footer";
import { BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";

const Home = () => {
    const [intersected, setIntersected] = useState(1);
    const [headerShown, setHeaderShown] = useState(false)
    const registerRef = useRef();
    const howWorksRef = useRef();
    const whoWeAreRef = useRef();
    const faqRef = useRef();

    const encripted = '';
    return(
        <>
            <Header intersected = {intersected} setIntersected = {setIntersected} registerRef = {registerRef} setHeaderShown = {setHeaderShown}
                howWorksRef = {howWorksRef} whoWeAreRef = {whoWeAreRef} faqRef = {faqRef} headerShown = {headerShown}/>
            <main>
                <Register registerRef = {registerRef} setIntersected = {setIntersected} setHeaderShown = {setHeaderShown}/>
                <HowWorks howWorksRef = {howWorksRef} setIntersected = {setIntersected}/>
                <WhoWeAre whoWeAreRef = {whoWeAreRef} setIntersected = {setIntersected}/>
                <FAQ faqRef = {faqRef} setIntersected = {setIntersected}/>
            </main>
            <Footer encripted={encripted} setIntersected = {setIntersected} registerRef = {registerRef} howWorksRef = {howWorksRef} whoWeAreRef = {whoWeAreRef} faqRef = {faqRef}/>
            <Float href={`https://api.whatsapp.com/send?phone=5521967431453&text=${encripted}.`} target="_blank" rel="noreferrer">
                <BsWhatsapp />
            </Float>
        </>
    )
}

const Float = styled.a`
    position:fixed;
    display: flex;
    align-items: center;
    justify-content: center;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
    font-size:30px;
	box-shadow: 2px 2px 3px #999;
    z-index:100;
`;

export default Home;
