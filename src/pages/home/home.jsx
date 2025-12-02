import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Container from "../../components/container/container";
import './home.css';
export default function Home() {
    return (
    <div className="home-page">
        <Navbar />
        <Hero />
        <div className="container-section">
            <Container />
        </div>
        <Footer />  
    </div>
    )
}