import "../styles/Home.css";
import MarqueeModule from "react-fast-marquee";
import Car from "../assets/images/icons/Car.png";
import ThumbsUp from "../assets/images/icons/ThumbsUp.png";
import Cash from "../assets/images/icons/GetCash.png";
import Location from "../assets/images/icons/HomeAddress.png";
import Banner from "../components/Banner.jsx";
import ThumbnailCard from "../components/ThumbnailCard.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import { useNavigate, Link } from "react-router";
import CheckingOil from "../assets/images/checking-oil.jpg";
import Engine from "../assets/images/engine.jpg";
import Wheels from "../assets/images/wheels.jpg";

const Marquee = MarqueeModule.default;
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <section className="hero">
        <div className="hero-container">
          <h1
            className="type-heading-3"
            style={{ color: `var(--color-accent)` }}
          >
            YOUR NEIGHBORHOOD AUTO REPAIR SHOP
          </h1>
          <h1
            className="type-heading-1"
            style={{ color: "#fff", paddingBottom: ".5rem" }}
          >
            GOOD HANDS.
            <br />
            BETTER MILES.
          </h1>
          <p className="hero-subheading" style={{ paddingBottom: "1rem" }}>
            From everyday maintenance to the unexpected repair, we make car care
            straightforward. Honest advice. Clear estimates. No work without
            your approval.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/book-appointment">
              <button className="large-orange-button click-effect">
                Request an appointment
              </button>
            </Link>
            <Link to="/services">
              <button className="large-white-button click-effect">
                Explore our services
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="marquee-section">
        <Marquee speed={50}>
          <div className="marquee-item">
            <div className="marquee-icon-container">
              <img src={Cash} alt="" className="marquee-icon" />
            </div>
            <span className="type-label">UPFRONT ESTIMATES</span>
          </div>
          <div className="marquee-item">
            <div className="marquee-icon-container">
              <img src={ThumbsUp} alt="" className="marquee-icon" />
            </div>
            <span className="type-label">REPAIRS YOU APPROVE</span>
          </div>
          <div className="marquee-item">
            <div className="marquee-icon-container">
              <img src={Car} alt="" className="marquee-icon" />
            </div>
            <span className="type-label">ALL MAKES & MODELS</span>
          </div>
          <div className="marquee-item">
            <div className="marquee-icon-container">
              <img src={Location} alt="" className="marquee-icon" />
            </div>
            <span className="type-label">LOCAL, PERSONAL SERVICE</span>
          </div>
        </Marquee>
      </div>
      <section className="section-margin">
        <div className="heading-container">
          <h2 className="type-heading-2">THE CARE YOUR CAR NEEDS.</h2>
          <h3 className="type-body" style={{ paddingBottom: "10px" }}>
            A few essentials, one dependable shop.
          </h3>
        </div>

        <div className="services-grid">
          <ThumbnailCard
            img={CheckingOil}
            service="maintenance"
            title="OIL & MAINTENANCE"
            subtitle="01 / ROUTINE CARE"
            description="Oil changes, fluid checks and scheduled care to keep your vehicle running at its best."
          />
          <ThumbnailCard
            img={Wheels}
            service="brakes-tires"
            title="BRAKES & TIRES"
            subtitle="02 / SAFETY FIRST"
            description="Brake inspections, tire rotation and alignment for a smoother, more confident drive."
          />
          <ThumbnailCard
            img={Engine}
            service="engine"
            title="ENGINE DIAGNOSTICS"
            subtitle="03 / FIND THE CAUSE"
            description="Warning light on? We’ll help identify the issue and explain your repair options."
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <Link to="/services">
            <button className="large-orange-button click-effect">
              VIEW ALL SERVICES
            </button>
          </Link>
        </div>
      </section>

      <section className="section-margin" style={{ backgroundColor: "#fff" }}>
        <div className="home-about-section">
          <h2 className="home-about-section-heading">
            NO GUESSWORK.
            <br />
            NO RUNAROUND.
          </h2>

          <div className="about-list-container">
            <h3
              className="type-heading-3"
              style={{ textDecoration: "underline" }}
            >
              You’ll know before we begin.
            </h3>
            <p className="type-label">
              We explain what we find and provide an estimate before you approve
              any work.
            </p>
            <h3
              className="type-heading-3"
              style={{ textDecoration: "underline" }}
            >
              Your priorities come first.
            </h3>
            <p className="type-label">
              We help you understand what needs attention now and what can be
              planned for later.
            </p>
            <h3
              className="type-heading-3"
              style={{ textDecoration: "underline" }}
            >
              A real person, every step.
            </h3>
            <p className="type-label">
              Get straightforward answers and updates from a team that takes
              time to listen.
            </p>
          </div>
        </div>
      </section>
      <section className="reviews-section">
        <div className="heading-container">
          <h2 className="type-heading-2">REVIEWS</h2>
          <h3 className="type-body" style={{ paddingBottom: "10px" }}>
            Don't just take our word for it. Hear what our customers have to
            say.
          </h3>
        </div>
        <Marquee speed={50}>
          <ReviewCard
            type="review"
            review={5}
            footerText="Sample review / Customer 01"
            description="Clear communication, honest advice and no surprises. Exactly what I want from my local shop."
          />
          <ReviewCard
            type="review"
            review={5}
            footerText="Sample review / Customer 02"
            description="“They explained my options and helped me prioritize the repairs. A refreshingly simple experience."
          />
          <ReviewCard
            type="review"
            review={5}
            footerText="Sample review / Customer 03"
            description="“Easy to book, friendly to deal with and a clear estimate before the work started.”"
          />
        </Marquee>
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "15px",
        }}
      >
        <Banner />
      </div>
    </div>
  );
}
