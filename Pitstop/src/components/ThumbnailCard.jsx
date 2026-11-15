import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
export default function ThumbnailCard({
  img,
  title,
  subtitle,
  description,
  service,
}) {
  return (
    <Link to={`/book-appointment?service=${encodeURIComponent(service)}`}>
      <button
        className="card-container click-effect"
        style={{
          backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
        url("${img}")
      `,
        }}
      >
        <div className="card-content">
          <h4 className="card-subtitle type-body">{subtitle}</h4>
          <h3 className="card-title type-heading-3" style={{ color: "#fff" }}>
            {title}
          </h3>
          <p className="card-description type-label">{description}</p>
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
