import MenuLink from "../menu-link/menu-link";
import TextComponent from "../text-component/text-component";
import Divider from "../divider/divider";
import Button from "../button/button";
import ItemCard from "../item-card/item-card";

import "./app.scss";
import item1 from "./../img/item1.png";
import item2 from "./../img/item2.png";
import item3 from "./../img/item3.png";

function App() {
    return (
        <div className="App">
            <section className="header-section">
                <nav className="navigation-menu">
                    <MenuLink name="Coffee House" href="#" />
                    <MenuLink name="Our Coffee" href="#" />
                    <MenuLink name="For Your Pleasure" href="#" />
                </nav>
                <TextComponent
                    text="Everything You Love About Coffee"
                    mainClass="text-component-44"
                    color="white"
                ></TextComponent>
                <Divider color="white" />
                <TextComponent
                    text="We makes every day full of energy and taste. Want to try our beans?"
                    mainClass="text-component-27"
                    color="white"
                ></TextComponent>
                <Button text="More" color="white"></Button>
            </section>
            <section className="section-aboutus">
                <TextComponent
                    text="About Us"
                    mainClass="text-component-27"
                    color="black"
                ></TextComponent>
                <Divider color="black" />
                <div className="aboutus-text">
                    <TextComponent
                        text="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.

                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now."
                        mainClass="text-component-14"
                        color="black"
                    ></TextComponent>
                </div>
            </section>
            <section className="section-items">
                <TextComponent
                    text="Our Best"
                    mainClass="text-component-27"
                    color="black"
                ></TextComponent>
                <div className="cards">
                    <ItemCard
                        imgsrc={item1}
                        imgalt="coffee"
                        text="Solimo Coffee Beans 2 kg"
                        price="10.73$"
                    ></ItemCard>
                    <ItemCard
                        imgsrc={item2}
                        imgalt="coffee"
                        text="Solimo Coffee Beans 2 kg"
                        price="10.73$"
                    ></ItemCard>
                    <ItemCard
                        imgsrc={item3}
                        imgalt="coffee"
                        text="Solimo Coffee Beans 2 kg"
                        price="10.73$"
                    ></ItemCard>
                </div>
            </section>
            <footer className="footer">
                <nav class="navigation-menu menu-footer">
                    <MenuLink name="Coffee House" href="#" color="black" />
                    <MenuLink name="Our Coffee" href="#" color="black" />
                    <MenuLink name="For Your Pleasure" href="#" color="black" />
                </nav>
                <Divider color="black" />
            </footer>
        </div>
    );
}

export default App;
