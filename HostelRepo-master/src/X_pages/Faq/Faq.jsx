import React from "react";
import "./Faq.css";
import Footer from "../../Components_hub/Footer/Footer";
import Navbar from "../../Components_hub/Navbar/Navbar";

const faq = () => {
  return (
    <>
    <Navbar />
      <header className="header-faq">
        <h1>Hostel FAQ</h1>
      </header>
      <main className="main-faq">
        <section className="faq-section">
          <h2 className="question">What is the check-in time?</h2>
          <dl className="answer">
            <dt className="answer-dt">Check-in time is at 3:00 PM.</dt>
          </dl>
        </section>
        <section className="faq-section">
          <h2 className="question">Is there a curfew?</h2>
          <dl className="answer">
            <dt className="answer-dt">
              There is no curfew, but we do ask guests to be respectful of
              others.
            </dt>
          </dl>
        </section>
        <section className="faq-section">
          <h2 className="question">Can I bring my pet?</h2>
          <dl className="answer">
            <dt className="answer-dt">Pets are not allowed in the hostel.</dt>
          </dl>
        </section>
        <section className="faq-section">
          <h2 className="question">Is there a kitchen?</h2>
          <dl className="answer">
            <dt className="answer-dt">Yes, we have a shared kitchen that guests can use.</dt>
          </dl>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default faq;
