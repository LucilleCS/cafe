import React from "react";
import cafe from "../images/ofCafe/cafe.jpg";
import oscar from "../images/cats/oscar.jpg";
import cafe3 from "../images/ofCafe/cafe3.png";
import "./pagesCSS/Home.css"

const Home = () => {
  return (
    <div id="page">
      <main>
        <h1>Home</h1>
        <div id="topHome">
          <section id="left">
            <section id="picture">
              <img src={cafe} alt="cafe" />
            </section>
            <section id="aboutUs">
              <p>
                Welcome to Pauws for Beans, the purrfect place where cozy meets
                cuddly! Nestled in the heart of the community, our cat cafe is a
                unique blend of relaxation, fun, and love — all served with a
                warm cup of coffee and a side of sweet treats. Here, we believe
                in the magic of feline companionship and the joy of a great cup
                of coffee, so we’ve created a space where you can enjoy both at
                the same time. Whether you're in the mood to unwind with a
                handcrafted latte, enjoy a delicious pastry, or simply curl up
                with a good book, our cafe provides the perfect atmosphere. Our
                cozy space is filled with friendly felines who are all up for
                playtime, lounging, or simply sharing some quiet company.
              </p>
            </section>
          </section>

          <a href="individualCat.html">
            <section id="catOfWeek">
              <h3>Cat Of The Week</h3>
              <h3>Oscar</h3>

              <img src={oscar} alt="Oscar the cat" />
              <p>
                Meet Oscar! The good kitty of the week. Normally hanging out
                inside the comforts of the cat huts, he decided to be brave this
                week and venture out on the main floor! To staff's surprise, he
                braved on and interacted with customers and sat quietly while
                customers enjoyed their coffee.
                <br />
                Way to go Oscar! Catplause for this brave kitty this week.
              </p>
            </section>
          </a>
        </div>

        <div id="middleHome">
          <div id="whatIs">
            <section>
              <h3>What Is A Cat Cafe?</h3>
              <p>
                A cat cafe is a place for humans and rescue cats to meet! <br />
                We take in rescue cats, train them, and get them ready for their
                forever homes. The cafe acts as a meet and greet so people can
                see if they like the cats! People can also just enjoy the cats for
                fun.
              </p>
            </section>

            <section>
              <img src={cafe3} alt="Cafe atmosphere" />
            </section>
          </div>
        </div>
        <div id="news"></div>
      </main>
    </div>
  );
};

export default Home;
