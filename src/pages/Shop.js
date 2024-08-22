import React from 'react';

const Shop = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <img src="sleepstiq.png" alt="Sleepstiq Logo" /> 
            {/* Corrected src value */}
            <p>We're here to help you</p>
            <h1>Relax & Rest</h1>
          </div>
          <div className="hero-image">
            <img src="sleepingman.jpeg" alt="Sleeping Woman" />
          </div>
        </div>
      </section>
      {/* next section */}
      
<section className="product-highlight">
        <div className="container">
          <div className="product-highlight-image">
            <img src="group3.png" alt="Product Highlight" />
          </div>
          <div className="product-highlight-content">
            <h2>About Product</h2>
            <p>
            Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
            </p>
            <ul>
              <li>😊  Promotes calm and relaxation.
‍             ⚕️  3rd-party lab tested..</li>
              <li>💤  Inhalation allows for a rapid effect..</li>
              <li>✅  100% drug-free, plant-based ingredients..</li>
              <li>3rd-party lab tested.</li>
            </ul>
            <p>Price   unit</p>
            <h1>USD 50</h1>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
            <button>Buy</button>
          </div>
        </div>
      </section>
      {/* end  */}
{/* next section */}
<section className="testimonials">
         
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
        </section>
      </div>
      
    
  );
};

export default Shop;
