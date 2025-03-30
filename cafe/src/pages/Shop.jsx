import React from "react";
import lightRoast from "../images/shopItems/lightRoast.jpg";
import mediumRoast from "../images/shopItems/mediumRoast.jpg";
import darkRoast from "../images/shopItems/darkRoast.jpg";
import coffeeMug from "../images/shopItems/coffeeMug.png";
import "./pagesCSS/Shop.css"

const Shop = () => {
  return (
    <div id="page">
      <main>
        <h1>Shop</h1>
        <div id="shopPage">
          <a href="individualShop.html">
            <section className="shopItem">
              <h2>Light Roast</h2>
              <img src={lightRoast} alt="Light Roast Coffee" />
              <p>
                Enjoy our light roast! Our light roast is bright, acidic, and
                fruity. It preserves all the natural flavor of our coffee
                beans.
              </p>
            </section>
          </a>

          <section className="shopItem">
            <h2>Medium Roast</h2>
            <img src={mediumRoast} alt="Medium Roast Coffee" />
            <p>
              Enjoy a balanced-flavored roast. Our medium roast has notes of
              caramel, chocolate, and nuts with mild acidity.
            </p>
          </section>

          <section className="shopItem">
            <h2>Dark Roast</h2>
            <img src={darkRoast} alt="Dark Roast Coffee" />
            <p>
              Enjoy our dark roast, with a rich, bold, and chocolate taste. It
              has low acidity and brings out bitter flavors when roasted.
            </p>
          </section>

          <section className="shopItem">
            <h2>Coffee Mug</h2>
            <img src={coffeeMug} alt="Coffee Mug" />
            <p>Enjoy your coffee in a simple yet useful mug.</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Shop;
