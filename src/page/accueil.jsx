
import '../page/accueil.css'
import logo from '../logo/logo-kasa.png'
import Banner from "../composant/banner";
import Card from "../composant/card";
import Footer from "../composant/footer";





function Home () {
    return (
        <div>
            <Banner title="chez vous , partout et ailleur" image= "banner-1"/>
            <Card/>
        </div>
    )
}

export default Home;