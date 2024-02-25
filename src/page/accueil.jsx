import Header from "../composant/header";
import '../page/accueil.css'
import logo from '../logo/logo-kasa.png'
import Banner from "../composant/banner";
import Card from "../composant/card";



function Home () {
    return (
        <div>
            <Header>
                <img src="../src/logo/logo-kasa.png"></img>
            </Header>
            <Banner />
            <Card/>
        </div>
    )
}

export default Home;