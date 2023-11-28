import  Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../assets/hero.jpg";
import Introduccion from "../components/Introduccion";
import Footer from "../components/Footer";

function Home (){
    return(
        <>
        <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Bienvenido a SGRA"
        text="Vas a poder a administrar los reclamos de tu edificio."
        />
        <Introduccion/>
        </>
    )
}

export default Home;