import StepCard from "../components/StepCard";
import { Link } from "react-router";
import "../styles/About.css";
import Banner from "../components/Banner";
export default function About() {
  return (
    <div className="app">
      <section className="heading-container">
        <span className="type-label" style={{ color: `var(--color-accent)` }}>
          MEET YOUR LOCAL SHOP
        </span>
        <h1 className="type-heading-2">
          BUILT ON TRUST.
          <br />
          DRIVEN BY PEOPLE.
        </h1>
        <p className="type-body">
          We believe looking after your car starts with looking after you.
          Friendly service, clear advice and quality work — without the
          runaround.
        </p>
      </section>
      <section
        className="section-margin"
        style={{ padding: "15px 0", backgroundColor: "#fff" }}
      >
        <div className="about-container body-padding">
          <h2 className="type-heading-2">
            A NEIGHBORHOOD SHOP.
            <br />A PERSONAL APPROACH.
          </h2>
          <div className="about-container">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <p className="type-body">
                At Pitstop, we’re here for the everyday journeys: the school
                run, the morning commute and the weekend away. Our job is to
                help you feel confident about the vehicle that gets you there.
              </p>
              <p className="type-body">
                We take time to listen, explain what we find and make a plan
                with you. Whether it’s routine care or an unfamiliar noise, you
                can expect straightforward communication from the first
                conversation to pickup.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin body-padding">
        <div className="about-card-grid">
          <StepCard
            title="01"
            subtitle="HONEST CONVERSATIONS"
            description="Plain-language explanations, clear estimates and room for your questions."
          />
          <StepCard
            title="02"
            subtitle="CARE THAT MAKES SENSE"
            description="Recommendations that consider your vehicle, your schedule and your priorities."
          />
          <StepCard
            title="03"
            subtitle="RESPECT FOR YOUR TIME"
            description="An agreed plan, helpful updates and a team you can reach when you need us."
          />
        </div>
      </section>

      <section
        className="section-margin"
        style={{ backgroundColor: "var(--color-subtle)" }}
      >
        <div className="contact-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <h2 className="type-heading-2">COME SAY HELLO.</h2>
            <span className="type-body">123 Workshop Lane, Your City</span>
            <span className="type-body">
              A friendly place to ask a question and plan your next service.
            </span>
            <Link>
              <button
                className="large-white-button click-effect"
                style={{ width: "200px" }}
              >
                Contact the shop
              </button>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h3
              className="type-heading-3"
              style={{ textDecoration: "underline" }}
            >
              SHOP HOURS
            </h3>

            <div className="hours-grid">
              <span className="type-small">Monday–Friday</span>
              <span className="type-small">8:00am–6:00pm</span>
              <span className="type-small">Saturday</span>
              <span className="type-small">9:00am–2:00pm</span>
              <span className="type-small">Sunday</span>
              <span className="type-small">Closed</span>
            </div>
          </div>
        </div>
      </section>

      <Banner />
    </div>
  );
}
