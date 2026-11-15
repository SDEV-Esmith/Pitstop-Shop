import Logo from "../assets/PitstopLogo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
export default function Footer() {
  return (
    <div className="footer-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={Logo} alt="Pitstop Shop" className="footer-logo" />
        <p className="type-body" style={{ color: "#fff" }}>
          Honest repairs. Reliable service. Your neighborhood auto repair shop.
        </p>
      </div>
      <div className="footer-links">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <FaLocationDot className="footer-icon" />
          <p
            className="type-heading-3"
            style={{ color: "#fff", fontSize: "1.25rem" }}
          >
            123 Workshop Lane, Your City
            <br />
            Mon–Fri 8am–6pm · Sat 9am–2pm
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <FaPhoneAlt className="footer-icon" />
          <p
            className="type-heading-3"
            style={{ color: "#fff", fontSize: "1.25rem" }}
          >
            (555) 010-0123
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <IoIosMail className="footer-icon" />
          <p
            className="type-heading-3"
            style={{ color: "#fff", fontSize: "1.25rem" }}
          >
            hello@yourshop.example
          </p>
        </div>
      </div>
      <p className="type-body" style={{ color: "#fff", textAlign: "center" }}>
        © 2026 Your Shop Name / Contact details and customer reviews are
        placeholders.
      </p>
    </div>
  );
}
