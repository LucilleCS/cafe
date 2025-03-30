import React from "react";
import MenuItem from "../components/MenuItem";
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
            <MenuItem 
              image={coffeeImg} 
              name="Coffee" 
              description="Enjoy a nice cup of coffee, available in 3 different roasts. The original default medium roast, our light roast, or our bold and dark roast." 
              price="2.99" 
            />
          </a>

          <MenuItem 
            image={hotChocolateImg} 
            name="Hot Chocolate" 
            description="Hot chocolate with milk at its base! Substituted with water if needed." 
            price="4.99" 
          />

          <MenuItem 
            image={teaImg} 
            name="Tea" 
            description="Sip on some relaxing house special tea with our signature secret ingredients. It has notes of relaxing herbs and a semi-sweet floral taste." 
            price="2.99" 
          />

          <hr />

          <h1>Cold Drinks</h1>

          <MenuItem 
            image={sweetTeaImg} 
            name="Iced Sweet Tea" 
            description="Try a super sweet southern style version of iced sweet tea." 
            price="3.99" 
          />

          <MenuItem 
            image={lemonadeImg} 
            name="Lemonade" 
            description="Try a refreshing fresh lemonade. Made with real lemons, we juice them each morning for customers to enjoy." 
            price="3.99" 
          />

          <hr />

          <h1>Foods and Pastries</h1>

          <MenuItem 
            image={croissantImg} 
            name="Croissant" 
            description="Freshly baked croissants, with an egg wash and crisp but soft layers." 
            price="4.99" 
          />

          <MenuItem 
            image={saladImg} 
            name="Salad" 
            description="Try our fresh mix of veggies and cheese!" 
            price="10.99" 
          />

          <MenuItem 
            image={sandwichImg} 
            name="Sandwich" 
            description="Our sandwich comes with kale, ham, onion, egg, and cheese!" 
            price="8.99" 
          />

          <MenuItem 
            image={strawberryTartImg} 
            name="Strawberry Tart" 
            description="Delicious strawberry tarts, with preserved jam jelly in the middle. It's baked with shortbread cookies and goes great with coffee. (This is personally the owner's favorite!)" 
            price="0.99" 
          />

          <MenuItem 
            image={snackTrayImg} 
            name="Snack Tray" 
            description="Sample a snack tray which includes grapes, blueberries, and assortments of crackers, cheese, and meats!" 
            price="12.99" 
          />
        </div>
      </main>
    </div>
  );
};

export default Menu;
