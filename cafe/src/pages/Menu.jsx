import React from "react";
import coffeeImg from "../images/foods/coffee.jpg";
import hotChocolateImg from "../images/foods/hotChocolate.jpg";
import teaImg from "../images/foods/tea.jpg";
import sweetTeaImg from "../images/foods/sweetTea.jpg";
import lemonadeImg from "../images/foods/lemonade.jpg";
import croissantImg from "../images/foods/crossiant.jpg";
import saladImg from "../images/foods/salad.png";
import sandwichImg from "../images/foods/sandwich.png";
import strawberryTartImg from "../images/foods/stawberryTart.jpg";
import snackTrayImg from "../images/foods/snackTray.jpg";

const Menu = () => {
  return (
    <div id="page">
      <main>
        <h1>MENU</h1>
        <p id="menuAbout">Explore our menu and pick what you prefer!</p>
        <div id="menu">
          <h1>Hot Drinks</h1>

          <a href="individualFood.html" className="menuLink">
            <section className="menuItem">
              <img src={coffeeImg} alt="Coffee" />
              <section className="paragraph">
                <h4>Coffee</h4>
                <p>
                  Enjoy a nice cup of coffee, available in 3 different roasts.
                  The original default medium roast, our light roast, or our
                  bold and dark roast.
                </p>
              </section>
              <p className="price">...2.99</p>
            </section>
          </a>

          <section className="menuItem">
            <img src={hotChocolateImg} alt="Hot Chocolate" />
            <section className="paragraph">
              <h4>Hot Chocolate</h4>
              <p>
                Hot chocolate with milk at its base! Substituted with water if
                needed.
              </p>
            </section>
            <p className="price">...4.99</p>
          </section>

          <section className="menuItem">
            <img src={teaImg} alt="Tea" />
            <section className="paragraph">
              <h4>Tea</h4>
              <p>
                Sip on some relaxing house special tea with our signature
                secret ingredients. It has notes of relaxing herbs and a
                semi-sweet floral taste.
              </p>
            </section>
            <p className="price">...2.99</p>
          </section>

          <hr />

          <h1>Cold Drinks</h1>

          <section className="menuItem">
            <img src={sweetTeaImg} alt="Iced Sweet Tea" />
            <section className="paragraph">
              <h4>Iced Sweet Tea</h4>
              <p>
                Try a super sweet southern style version of iced sweet tea.
              </p>
            </section>
            <p className="price">...3.99</p>
          </section>

          <section className="menuItem">
            <img src={lemonadeImg} alt="Lemonade" />
            <section className="paragraph">
              <h4>Lemonade</h4>
              <p>
                Try a refreshing fresh lemonade. Made with real lemons, we
                juice them each morning for customers to enjoy.
              </p>
            </section>
            <p className="price">...3.99</p>
          </section>

          <hr />

          <h1>Foods and Pastries</h1>

          <section className="menuItem">
            <img src={croissantImg} alt="Croissant" />
            <section className="paragraph">
              <h4>Croissant</h4>
              <p>
                Freshly baked croissants, with an egg wash and crisp but soft
                layers.
              </p>
            </section>
            <p className="price">...4.99</p>
          </section>

          <section className="menuItem">
            <img src={saladImg} alt="Salad" />
            <section className="paragraph">
              <h4>Salad</h4>
              <p>
                Try our fresh mix of veggies and cheese!
              </p>
            </section>
            <p className="price">...10.99</p>
          </section>

          <section className="menuItem">
            <img src={sandwichImg} alt="Sandwich" />
            <section className="paragraph">
              <h4>Sandwich</h4>
              <p>
                Our sandwich comes with kale, ham, onion, egg, and cheese!
              </p>
            </section>
            <p className="price">...8.99</p>
          </section>

          <section className="menuItem">
            <img src={strawberryTartImg} alt="Strawberry Tart" />
            <section className="paragraph">
              <h4>Strawberry Tart</h4>
              <p>
                Delicious strawberry tarts, with preserved jam jelly in the
                middle. It's baked with shortbread cookies and goes great with
                coffee. (This is personally the owner's favorite!)
              </p>
            </section>
            <p className="price">...0.99</p>
          </section>

          <section className="menuItem">
            <img src={snackTrayImg} alt="Snack Tray" />
            <section className="paragraph">
              <h4>Snack Tray</h4>
              <p>
                Sample a snack tray which includes grapes, blueberries, and
                assortments of crackers, cheese, and meats!
              </p>
            </section>
            <p className="price">...12.99</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Menu;
