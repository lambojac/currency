import React from 'react';
import "../styles/Home.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><a href="#">About us</a></li>
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
            <p>
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.
            </p>
            <p>
              By using our website or product, you agree to follow our <a href="#">terms of service</a>.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="social-media">
              <h3 className="footer-heading">Get in Touch</h3>
              <p>Feel free to get in touch with us via email</p>
              <a href="mailto:hello@sleepstiq.com">hello@sleepstiq.com</a>
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
  );
};

export default Footer;
