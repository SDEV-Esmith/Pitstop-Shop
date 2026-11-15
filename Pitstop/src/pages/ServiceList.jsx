import Card from "../components/Card";
import { Link } from "react-router";
import "../styles/ServiceList.css";
import Banner from "../components/Banner";
export default function Service({ service }) {
  return (
    <div className="app">
      <section className="heading-container">
        <span className="type-label" style={{ color: `var(--color-accent)` }}>
          WHAT WE DO
        </span>
        <h1 className="type-heading-2">
          FROM ROUTINE CARE
          <br /> TO ROAD-READY REPAIRS.
        </h1>
        <p className="type-body">
          Start with the service you need, or tell us what you’re noticing.
          We’ll help you figure out the right next step.
        </p>
      </section>
      <section className="section-margin">
        <div className="services-card-grid">
          <Card
            title="OIL & MAINTENANCE"
            service="maintenance"
            description="Oil changes, fluid checks, filter replacements and routine maintenance to keep your vehicle running smoothly."
          />
          <Card
            title="BRAKES & TIRES"
            service="brakes-tires"
            description="Brake inspections, pad and rotor replacements, tire rotations and repairs to help keep you safe on the road."
          />
          <Card
            title="ENGINE DIAGNOSTICS"
            service="engine"
            description="Accurate engine diagnostics to identify warning lights, performance issues and mechanical problems."
          />
          <Card
            title="HEATING & A/C"
            service="ac"
            description="Heating and air conditioning inspections, system repairs and refrigerant service to keep your cabin comfortable."
          />
          <Card
            title="STEERING & SUSPENSION"
            service="suspension"
            description="Steering and suspension repairs, including shocks, struts and worn components, for a smoother ride and better handling."
          />
          <Card
            title="BATTERY & ELECTRICAL"
            service="electrical"
            description="Battery testing, replacements and electrical diagnostics to identify starting, charging and wiring issues."
          />
        </div>
        <div className="card-view-all-link">
          <Link
            to="/book-appointment?service=other"
            className="type-small-semibold click-effect body-padding"
            style={{
              color: `var(--color-accent)`,
              textDecoration: "underline",
            }}
          >
            Not Sure? Start with an appointment.
          </Link>
        </div>
      </section>

      <section className="section-margin" style={{ backgroundColor: "#fff" }}>
        <div className="services-about-container body-padding">
          <h2
            className="type-heading-2"
            style={{ textDecoration: "underline", paddingTop: "20px" }}
          >
            SIMPLE FROM THE START.
          </h2>
          <div className="about-grid">
            <div className="step-container">
              <span
                className="type-heading-2"
                style={{ color: `var(--color-accent)` }}
              >
                01
              </span>
              <h3 className="type-heading-3" style={{ fontWeight: "600" }}>
                Tell us what's happening
              </h3>
              <p className="type-label">
                Share your vehicle details and what you’re noticing.
              </p>
            </div>
            <div className="step-container">
              <span
                className="type-heading-2"
                style={{ color: `var(--color-accent)` }}
              >
                02
              </span>
              <h3 className="type-heading-3" style={{ fontWeight: "600" }}>
                Review your options
              </h3>
              <p className="type-label">
                We inspect, explain our findings and prepare an estimate.
              </p>
            </div>
            <div className="step-container">
              <span
                className="type-heading-2"
                style={{ color: `var(--color-accent)` }}
              >
                03
              </span>
              <h3 className="type-heading-3" style={{ fontWeight: "600" }}>
                Approve & get going
              </h3>
              <p className="type-label">
                You decide what work goes ahead. We’ll keep you updated.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin body-padding">
        <div className="faq-container">
          <h2 className="type-heading-2">
            GOOD QUESTIONS.
            <br />
            STRAIGHT ANSWERS.
          </h2>
          <div className="faq-item-container">
            <h3 className="type-heading-3" style={{ fontWeight: "600" }}>
              Do I need to know exactly what’s wrong?
            </h3>
            <p className="type-label">
              No. Tell us about sounds, warning lights or changes in how your
              vehicle drives. We can help identify the next step.
            </p>
          </div>
          <div className="faq-item-container">
            <h3 className="type-heading-3" style={{ fontWeight: "600" }}>
              Will you contact me before starting repairs?
            </h3>
            <p className="type-label">
              Yes. We’ll discuss our findings and estimate with you before any
              repair work is approved.
            </p>
          </div>
          <div className="faq-item-container">
            <h3 className="type-heading-3" style={{ fontWeight: "600" }}>
              How much will my repair cost?
            </h3>
            <p className="type-label">
              Costs depend on your vehicle and the diagnosis. Request an
              appointment so the team can provide an estimate.
            </p>
          </div>
        </div>
      </section>
      <Banner />
    </div>
  );
}
