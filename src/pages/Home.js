import React from 'react';
import "../styles/Home.css"
function Home() {
  return (
    <div>
      
      
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <img src="#12305B" alt="Sleepstiq Logo" />
            <h1>Relax & Rest</h1>
            <p>With the aid of our Merotonin Sleepatią, we can casure you that you get quality sleep.</p>
            <button>Visit Shop</button>
          </div>
          <div className="hero-image">
            <img src="woman.jpg" alt="Sleeping Woman" />
          </div>
        </div>
      </section>
      <section className="our-story">
        <div className="container">
          <h2>Our Amazing Story</h2>
          <p>There's no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid...</p>
          <button>More know About us</button>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="testimonials-slider">
            <div className="testimonial">
              <p>I'm a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq.</p>
              <div className="testimonial-author">
                <img src="author-avatar.jpg" alt="Author Avatar" />
                <h3>Jane Doe</h3>
              </div>
            </div>
            {/* Add more testimonials here */}
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>&copy; 2023 Sleepstiq. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
