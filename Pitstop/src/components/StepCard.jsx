import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
export default function StepCard({ title, subtitle, description, footerText }) {
  return (
    <Link to="/services">
      <button
        className="card-container click-effect"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <div className="card-content">
          <h2
            className="card-title type-heading-2"
            style={{ color: "var(--color-accent)" }}
          >
            {title}
          </h2>

          <h4
            className="card-subtitle type-heading-3"
            style={{ color: "var(--color-dark)" }}
          >
            {subtitle}
          </h4>
          <p
            className="card-description type-label"
            style={{ color: `var(--color-dark)` }}
          >
            {description}
          </p>
        </div>
      </button>
    </Link>
  );
}
