import { Link } from "react-router";
export default function Banner() {
  return (
    <div className="banner">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <h2
          className="type-heading-2"
          style={{ color: "#fff", textAlign: "center" }}
        >
          LET'S GET YOU BACK ON THE ROAD.
        </h2>
        <h3 className="type-body" style={{ color: "#fff" }}>
          Tell us what your vehicle needs. We’ll help with the next step.
        </h3>
        <Link to="/book-appointment">
          <button className="large-orange-button click-effect">
            Request an appointment
          </button>
        </Link>
      </div>
    </div>
  );
}
