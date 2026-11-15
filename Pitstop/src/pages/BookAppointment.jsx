import { Link } from "react-router";
import "../styles/BookAppointment.css";
import { useSearchParams } from "react-router";
import { useState } from "react";
export default function About() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("");
  const selectedService = searchParams.get("service") || "";
  const [service, setService] = useState(selectedService);
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const customerInfo = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      description: formData.get("description"),
    };

    console.log(customerInfo);

    setStatus("success");

    e.currentTarget.reset();
    setService("");
  }
  return status === "success" ? (
    <div className="app">
      <section className="confirmation-section">
        <h1 className="type-heading-2" style={{ textAlign: "center" }}>
          Thank You.
          <br />
          Your request has been received
        </h1>
        <p className="type-body" style={{ padding: "10px 0px" }}>
          We will contact you as soon as possible.
        </p>
        <Link to="/">
          <button className="large-orange-button click-effect">
            Back home
          </button>
        </Link>
      </section>
    </div>
  ) : (
    <div className="app">
      <section className="heading-container">
        <span className="type-label" style={{ color: `var(--color-accent)` }}>
          LET’S TALK ABOUT YOUR CAR
        </span>
        <h1 className="type-heading-2">
          YOUR NEXT MILE
          <br />
          STARTS HERE.
        </h1>
        <p className="type-body">
          Request an appointment below or give us a call. We’ll get back to you
          to discuss your vehicle and confirm a time.
        </p>
      </section>
      <section className="section-margin">
        <form className="form-container" onSubmit={handleSubmit}>
          <h2 className="type-heading-2">REQUEST AN APPOINTMENT</h2>
          <p className="type-body">
            Fields marked * are required. This is a request, not a confirmed
            booking.
          </p>
          <div className="form-grid">
            <div className="form-input-container">
              <label className="type-small-semibold">Full Name *</label>
              <input
                name="name"
                className="form-input"
                placeholder="e.g. Alex Morgan"
                required
              />
            </div>
            <div className="form-input-container">
              <label className="type-small-semibold">E-mail *</label>
              <input
                name="email"
                className="form-input"
                placeholder="e.g. name@email.com"
                required
              />
            </div>
            <div className="form-input-container">
              <label className="type-small-semibold">Phone Number *</label>
              <input
                name="phone"
                className="form-input"
                placeholder="e.g. (123) 456-7891"
                required
              />
            </div>
            <div className="form-input-container">
              <label className="type-small-semibold" htmlFor="service">
                Service Needed{" "}
              </label>
              <select
                id="service"
                name="service"
                className="form-select"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="" className="form-select-option">
                  Choose a service
                </option>
                <option value="maintenance" className="form-select-option">
                  Oil & Maintenance
                </option>
                <option value="brakes-tires" className="form-select-option">
                  Brakes & Tires
                </option>
                <option value="engine" className="form-select-option">
                  Engine Diagnostics
                </option>
                <option value="ac" className="form-select-option">
                  Heating & A/C
                </option>
                <option value="suspension" className="form-select-option">
                  Steering & Suspension
                </option>
                <option value="electrical" className="form-select-option">
                  Battery & Electrical
                </option>
                <option value="other" className="form-select-option">
                  Other/Not sure
                </option>
              </select>
            </div>
            <div className="form-input-container">
              <label className="type-small-semibold">Description </label>
              <textarea
                name="description"
                className="form-textarea"
                placeholder="Tell us what is going on with your vehicle."
              />
            </div>
          </div>
          <p className="type-body" style={{ marginBottom: "5px" }}>
            By submitting, you agree that the shop may contact you about this
            request. Please do not include sensitive payment information.
          </p>
          <button className="large-orange-button" type="submit">
            Send appointment request
          </button>
        </form>
      </section>
      <section
        className="section-margin"
        style={{ backgroundColor: "#fff", padding: "15px 0" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 className="type-heading-2">WHAT HAPPENS NEXT?</h2>
        </div>
        <div className="appointment-about-container">
          <div className="appointment-about-text-container">
            <h3 className="type-heading-3">01 / We get in touch</h3>
            <p className="type-body">
              Our team follows up to understand what you need and discuss
              availability.
            </p>
          </div>
          <div className="appointment-about-text-container">
            <h3 className="type-heading-3">02 / We confirm a time</h3>
            <p className="type-body">
              We agree on an appointment and explain what to bring.
            </p>
          </div>
          <div className="appointment-about-text-container">
            <h3 className="type-heading-3">03 / We make a plan</h3>
            <p className="type-body">
              After inspection, we’ll discuss findings and next steps before any
              repair.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
