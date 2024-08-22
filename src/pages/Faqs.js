import React, { useState } from 'react';
import "../styles/Faq.css";

function Faqs() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here, using searchTerm
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-header">How can we assist?</h1>
      <form className="faq-search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search FAQs here"
          value={searchTerm}
          onChange={handleChange}
          className="faq-search-input"
        />
        <button type="submit" className="faq-search-button">Search</button>
      </form>
      <div className="faq-product-info">
        <h2>Sleepstiq Product</h2>
        <ul>
          <li>Order</li>
          <li>Melantonin</li>
        </ul>
      </div>
      <div className="faq-section">
        <h3>FAQ</h3>
        <ul className="faq-list">
          <li className="faq-item">
            <strong>Q1: How does it work?</strong>
            <p>
              Inhaling on the diffuser will turn the inside liquids (melatonin,
              lavender, chamomile) into a light mist which you inhale, and then
              exhale out your nose. Inhaling the melatonin allows for a
              near-instant effect, and also allows you to experience the
              soothing aromatherapeutic effect of lavender and chamomile.
            </p>
          </li>
          <li className="faq-item">
            <strong>Q2: Why inhale melatonin?</strong>
          </li>
          <li className="faq-item">
            <strong>Q3: How much melatonin is there per inhale?</strong>
          </li>
          <li className="faq-item">
            <strong>Q4: Is it an e-cigarette or tobacco product?</strong>
          </li>
          <li className="faq-item">
            <strong>Q5: What's in it?</strong>
          </li>
          <li className="faq-item">
            <strong>Q6: What's not in it?</strong>
          </li>
          <li className="faq-item">
            <strong>Q7: How long does it last?</strong>
          </li>
          <li className="faq-item">
            <strong>Q8: How do I know it has run out/died?</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Faqs;
