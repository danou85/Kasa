import Header from "../composant/header";
import '../page/accueil.css'
import logo from '../logo/logo-kasa.png'
import Banner from "../composant/banner";
import Card from "../composant/card";
import Footer from "../composant/footer";
import chezvous from "../image/chezvous.png"




function Home () {
    return (
        <div>
            <Header>
                <img src="../src/logo/logo-kasa.png"></img>
            </Header>
            <Banner/>

            <Card/>
            <Footer/>
        </div>
    )
}

export default Home;