import React from 'react';
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <img src="sleepstiq.png" alt="Sleepstiq Logo" /> {/* Corrected src value */}
            <h1>Relax & Rest</h1>
            <p>With the aid of our Merotonin Sleepatią, we can assure you that you get quality sleep.</p>
            <button>Visit Shop</button>
          </div>
          <div className="hero-image">
            <img src="woman.jpg" alt="Sleeping Woman" />
          </div>
        </div>
      </section>

      <div className="story-testimonials-container">
        <section className="our-story">
          <div className="container">
            <h2>10k+ Happy Customers</h2>
            <p>
              There's no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.
            </p>
            <a href="#">Learn More About Us</a> {/* Updated link text */}
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <div className="testimonial-highlight">
              <p>I'm a very anxious person but use this and feel so relaxed and sleep way better now with the aid of Sleepstiq.</p>
              <div className="testimonial-author-highlight">
                <img src="author-avatar.jpg" alt="Author Avatar" />
                <h3>James Miller</h3>
                <p>CEO, Techsliq</p>
              </div>
            </div>
            <div className="testimonials-list">
              <div className="testimonial">
                <p>I love it! I have trouble falling asleep, and this has worked like magic for me.</p>
                <div className="testimonial-author">
                  <h3>John Matthews</h3>
                </div>
              </div>
              <div className="testimonial">
                <p>I work shift work. Swinging from days to nights is sometimes bearable, thanks to Sleepstiq. Thank you!</p>
                <div className="testimonial-author">
                  <h3>Eunice Oliver</h3>
                </div>
              </div>
              <div className="testimonial">
                <p>It's a really good product and helps me sleep better at night.</p>
                <div className="testimonial-author">
                  <h3>Laura Davies</h3>
                </div>
              </div>
              <div className="testimonial">
                <p>Helps me relax and remember my dreams. Stress levels definitely gone down.</p>
                <div className="testimonial-author">
                  <h3>Jane Becks</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
{/* next section */}

<section className="product-highlight">
        <div className="container">
          <div className="product-highlight-image">
            <img src="group3.png" alt="Product Highlight" />
          </div>
          <div className="product-highlight-content">
            <h2>Shop Now</h2>
            <p>
              Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. 
              A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
            </p>
            <ul>
              <li>Promotes calm and relaxation.</li>
              <li>Inhalation allows for a rapid effect.</li>
              <li>100% drug-free, plant-based ingredients.</li>
              <li>3rd-party lab tested.</li>
            </ul>
            <button>Visit Shop</button>
          </div>
        </div>
      </section>
      {/* end  */}
      <footer>
        <div className="container">
          <p>&copy; 2023 Sleepstiq. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
