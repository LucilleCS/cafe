import React from 'react';
import './css/Footer.css'; // Import the CSS file for the footer styles
import ownerImage from '../images/ofCafe/owner.png'; // Import the owner image
import facebookIcon from '../images/icons/facebook.png'; // Import social media icons
import instagramIcon from '../images/icons/instagram.png';
import twitterIcon from '../images/icons/twitter.png';

function Footer() {
    return (
        <footer>
            <section>
                <h1>About the owner</h1>
            </section>
            <div id="footer">
                <section id="aboutOwner">
                    <img src={ownerImage} id="ownerImg" alt="Owner" />
                    <p>
                        I'm Maria Sue, and I'm the proud owner of Pauws for Beans. Get it,
                        pause/paws for beans (coffee beans). I wanted to create a safe and
                        cozy space for people and cats to get along. <br />
                        After having my own childhood cat, Sprinkles, I wished people could
                        enjoy a cat's company more than anything. I hope you stop by and
                        enjoy this cafe as much as I think Sprinkles would have!
                    </p>
                </section>
                <section id="information">
                    <section id="icons">
                        <img src={facebookIcon} className="icon" alt="Facebook" />
                        <img src={instagramIcon} className="icon" alt="Instagram" />
                        <img src={twitterIcon} className="icon" alt="Twitter" />
                    </section>
                    <hr />
                    <p>Mail:</p>
                    <a href="mailto:MariaSue001@gmail.com">MariaSue001@gmail.com</a>
                </section>
            </div>
            <p>&copy; Lucille Oshea</p>
        </footer>
    );
}

export default Footer;
