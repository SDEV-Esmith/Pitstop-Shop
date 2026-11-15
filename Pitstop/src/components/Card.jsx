import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
export default function Card({ title, subtitle, description, service }) {
  return (
    <Link to={`/book-appointment?service=${encodeURIComponent(service)}`}>
      <button
        className="card-container click-effect"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <div className="card-content">
          <h4 className="card-subtitle type-body">{subtitle}</h4>
          <h3 className="card-title type-heading-3">{title}</h3>
          <p
            className="card-description type-label"
            style={{ color: `var(--color-dark)` }}
          >
            {description}
          </p>
          <div className="card-link">
            <p className="type-small" style={{ color: "var(--color-accent)" }}>
              Ask about this service
            </p>
            <FaArrowRight className="card-link-icon" />
          </div>
        </div>
      </button>
    </Link>
  );
}
