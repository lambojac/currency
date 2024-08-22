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

      {/* next section */}
      <section className="mission-and-shop">
  <div className="container">
    <div className="mission-content">
      <h2>Our Mission</h2>
      <p>
        We started Sleepify with 1 simple goal: to be your best friend at bedtime. 
        We, just like you, deal with stress, unrest, and trouble sleeping from a number of daily things like school work, exams, trauma, and people. 
        That's why we created products that aim to:
      </p>
      <ul>
        <li>Promote Calm</li>
        <li>Support Sleep</li>
        <li>Reduce Stress</li>
        <li>Aid Relaxation</li>
      </ul>
    </div>
    <div className="mission-image">
      <img src="featuredused.png" alt="Mission" />
    </div>
  </div>
  <div className="shop-callout">
    <h2>Visit Our Shop</h2>
    <p>
      Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. 
      A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
    </p>
    <button>Visit Shop</button>
  </div>
</section>
{/* end */}

{/* next xection */}
<div className="product-reviews-container">
      <div className="product-reviews-header">
        <h1>Product Reviews</h1>
      </div>
      <div className="product-reviews-list">
        <div className="product-review-item">
          <img src="rectangle6.png" alt="Product" />
          <p>
            Works great! Just use it and then relax, I fall asleep with no
            problem every time I use it.
          </p>
          <h4>Rachel Dill</h4>
          <div className="product-review-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
        <div className="product-review-item">
          <img src="rectangle6.png" alt="Product" />
          <p>
            It really helps me fall right to sleep compared to melatonin pills.
          </p>
          <h4>Javier Mendez</h4>
          <div className="product-review-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
        <div className="product-review-item">
          <img src="rectangle6.png" alt="Product" />
          <p>
            I've tried a lot of things to sleep but none of those worked, so I
            tried Cloudy and wow! I sleep like a baby now.
          </p>
          <h4>Naomi Nwazurike</h4>
          <div className="product-review-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
        <div className="product-review-item">
          <img src="rectangle6.png" alt="Product" />
          <p>
            I have been falling asleep and sleeping through the night.
          </p>
          <h4>Nate Jacobs</h4>
          <div className="product-review-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
      </div>
    </div>
    {/* end */}
      {/* footer */}
      <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Jobs</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-links">
              <li><a href="#">Phone: +234 706 507 3126</a></li>
              <li><a href="#">Address: 18, Ogindipe Close Upston Close</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="footer-heading">Consumer Advisory</h3>
            <p>These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.</p>
            <p>By using our website or product, you agree to follow our <a href="#">terms of service</a>.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="social-media">
              <h3 className="footer-heading">Get in Touch</h3>
              <p>Feel free to get in touch with us via email</p>
              <a href="#">hello@sleepstiq.com</a>
              <ul className="social-links">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            <div className="copyright">
              <p>&copy; 2023 sleepstiq All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
    // end code
  );
}

export default Home;
