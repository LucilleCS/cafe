import React from "react";

import "./pagesCSS/Cats.css"
import oscarImg from "../images/cats/oscar.jpg";
import dustyImg from "../images/cats/dusty.jpg";
import miloImg from "../images/cats/milo.jpg";
import morganaImg from "../images/cats/morgana.jpg";
import wormImg from "../images/cats/worm.jpg";
import sootImg from "../images/cats/soot.jpg";

const Cats = () => {
  return (
    <div id="page">
      <main>
        <h1>About Our Cats</h1>
        <div id="aboutCat">
          <a href="individualCat.html">
            <section className="catItem">
              <div>
                <h3 id="catName">Oscar</h3>
                <p>
                  Meet Oscar! A 3 year old male, who prefers a quiet afternoon.
                  He's quiet and likes sleeping beside other cats! He enjoys
                  staying in the cat huts and squeezes into small areas. Don't
                  worry! He warms up easily to repeat customers and is easy to
                  please. <br />
                  If you're lucky, you might see him on your next visit!
                </p>
              </div>
              <div className="catImg">
                <img src={oscarImg} alt="Oscar" />
              </div>
            </section>
          </a>

          <section className="catItem">
            <div className="catImg">
              <img src={dustyImg} alt="Dusty" />
            </div>
            <div>
              <h3>Dusty</h3>
              <p>
                Meet Dusty! A funny and adorable young female cat around 1 year
                old. Dusty likes sitting near people, and occasionally might go on
                top of the table. Like her name, her tail seems to dust the
                tables as it swings. She's friendly with other cats and seems to
                purr up next to children.
              </p>
            </div>
          </section>

          <section className="catItem">
            <div>
              <h3>Milo</h3>
              <p>
                Meet the youngest kitten of our roster. Milo, just being a few
                months old seems to have bursts of energy as well as times of
                absolute laziness. Milo is often seen bothering other cats, his
                favorite being Oscar who only seems to tolerate the kitten's
                behavior. Milo enjoys running around the cafe, and won't
                hesitate to play with your shoe lace, or pick up running with a
                toy you might have in your hand.
              </p>
            </div>
            <div className="catImg">
              <img src={miloImg} alt="Milo" />
            </div>
          </section>

          <section className="catItem">
            <div className="catImg">
              <img src={morganaImg} alt="Morgana" />
            </div>
            <div>
              <h3>Morgana</h3>
              <p>
                Meet Morgana, an older 6 years old female cat. She likes to be a
                lap kitty and enjoys a good scratch under the chin. She even
                doesn't mind a small belly rub! Being a semi-senior cat at the
                establishment, she won't hesitate to use her baby doll eyes to
                try and beg for a quick snack.
              </p>
            </div>
          </section>

          <section className="catItem">
            <div>
              <h3>Worm</h3>
              <p>
                Meet Worm. A wiggly small 4 year old male, who seems to just
                love sitting on our bookshelves. He likes staring at customers
                who walk in as well as people who walk past the cafe. Does he
                know how to read? We'll never know.
              </p>
            </div>
            <div className="catImg">
              <img src={wormImg} alt="Worm" />
            </div>
          </section>

          <section className="catItem">
            <div className="catImg">
              <img src={sootImg} alt="Soot" />
            </div>
            <div>
              <h3>Soot</h3>
              <p>
                Meet Soot, our charming little ball of fluff! This striking
                black cat has a luxurious coat of soft fur that’s impossible to
                resist petting. Soot may be a bit shy at first, but once you’ve
                earned his trust, you’ll be greeted with endless purrs and
                cuddles. He loves to lounge around and soak up the sun, but
                don’t be fooled — when he’s in the mood, Soot can be quite the
                playful cat, chasing after toys with surprising energy.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Cats;
