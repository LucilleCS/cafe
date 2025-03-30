import React from "react";
import coffee from "../images/foods/coffee.jpg";
import strawberryTart from "../images/foods/stawberryTart.jpg";
import snackTray from "../images/foods/snackTray.jpg";
import sandwich from "../images/foods/sandwich.png";
import "./pagesCSS/Reservation.css"

const Reservation = () => {
  return (
    <div id="page">
      <main>
        <h1>Reservations</h1>
        <div id="makeReservation">
          <section id="reservation">
            <h2>Book A Seat!</h2>
            <section className="input">
              <h4>Name:</h4>
              <input type="text" id="name" />
            </section>
            <section className="input">
              <h4>Email:</h4>
              <input type="text" id="email" />
            </section>
            <section className="input">
              <h4>Time Slot:</h4>
              <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                {/* Dropdown logic can be added here */}
              </div>
            </section>
          </section>
        </div>

        <div id="Events">
          <h1>Events</h1>
          <hr className="shortHr" />
          <section className="event">
            <h2>Purrintines</h2>
            <p>Date: February 14th</p>
            <p>Time: All day</p>
            <p>Description</p>
            <p>
              Lonely on Valentine's Day? Not anymore! Stop by the cafe for a
              small date with our cats and enjoy a free strawberry tart!
            </p>
          </section>

          <section className="event">
            <h2>Book club</h2>
            <p>Date: February 28th</p>
            <p>Time: 5pm-7pm</p>
            <p>Description</p>
            <p>
              Come join the cat cafe's local book club. Talk about the book "The
              Cat I Never Named".
            </p>
          </section>

          <section className="event">
            <h2>Support the paws!</h2>
            <p>Date: March 12th</p>
            <p>Time: All day</p>
            <p>Description</p>
            <p>
              Today we're bringing a few new cats into the cafe! Join us as we
              teach about cat advocacy, and introduce our new castaff. Extra
              donations are welcome and will go to shelters and the current
              cats' wellbeing.
            </p>
          </section>
        </div>

        <div id="popularFoods">
          <h2>Popular Foods:</h2>

          <section id="foodRecomendations">
            <div id="foodRecs">
              <a href="individualFood.html">
                <section className="recomendation">
                  <img src={coffee} alt="Coffee" />
                  <h4>Coffee</h4>
                </section>
              </a>
              <section className="recomendation">
                <img src={strawberryTart} alt="Strawberry Tart" />
                <h4>Strawberry Tart</h4>
              </section>
              <section className="recomendation">
                <img src={snackTray} alt="Snack Tray" />
                <h4>Snack Tray</h4>
              </section>
              <section className="recomendation">
                <img src={sandwich} alt="Sandwich" />
                <h4>Sandwich</h4>
              </section>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Reservation;
