import { motion } from "framer-motion";
import heroMockup from "../../assets/hero-mockup.png";
import LogoV2 from "./LogoV2";

function HeroV2() {
  return (
    <section
      className="hero v2-theme"
      id="hero"
      style={{
        background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)",
        padding: "80px 0 100px",
      }}
    >
      <div className="container" style={{ marginBottom: "3rem" }}>
        <LogoV2 variant="primary" />
      </div>
      <div className="container grid-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <div
            className="badge"
            style={{
              marginBottom: "1.5rem",
              background: "var(--v2-blue)",
              color: "white",
              fontFamily: "'Lexend Giga', sans-serif",
              fontSize: "0.65rem",
            }}
          >
            The Barber Booking App
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              marginBottom: "1.5rem",
              color: "var(--v2-navy)",
              fontWeight: "800",
              lineHeight: "1.1",
              textTransform: "uppercase",
            }}
          >
            BOKMAX: <br />
            <span style={{ color: "var(--v2-red)" }}>Your Story</span> <br />
            <span style={{ color: "var(--v2-blue)" }}>Your Style</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              maxWidth: "500px",
              marginBottom: "2.5rem",
              lineHeight: "1.7",
              fontWeight: "400",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            The barbershop app built around a powerful referral system. Book
            appointments, grow your clientele and unlock rewards — with
            memberships from just{" "}
            <strong style={{ color: "var(--v2-navy)" }}>$5</strong>.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              aria-label="Download on the App Store"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "var(--v2-navy)",
                color: "white",
                padding: "10px 22px",
                borderRadius: "12px",
                textDecoration: "none",
                minHeight: "56px",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.564 12.638c-.02-2.09 1.708-3.093 1.786-3.143-.973-1.425-2.487-1.62-3.027-1.643-1.29-.13-2.517.76-3.173.76-.654 0-1.665-.74-2.74-.72-1.41.021-2.71.82-3.434 2.082-1.464 2.537-.374 6.296 1.055 8.356.7 1.009 1.53 2.141 2.615 2.1 1.05-.042 1.446-.68 2.714-.68 1.267 0 1.623.68 2.73.66 1.129-.02 1.844-1.024 2.532-2.04.8-1.17 1.128-2.302 1.148-2.36-.025-.011-2.2-.844-2.222-3.35zM15.53 6.29c.58-.7.97-1.673.863-2.64-.836.034-1.85.556-2.45 1.256-.538.619-1.008 1.612-.88 2.558.933.072 1.886-.475 2.467-1.174z" />
              </svg>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1.1,
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.05em",
                    opacity: 0.8,
                  }}
                >
                  Download on the
                </span>
                <span
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  App Store
                </span>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              aria-label="Get it on Google Play"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "var(--v2-navy)",
                color: "white",
                padding: "10px 22px",
                borderRadius: "12px",
                textDecoration: "none",
                minHeight: "56px",
              }}
            >
              <svg
                width="26"
                height="28"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path
                  fill="#EA4335"
                  d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z"
                />
                <path
                  fill="#FBBC04"
                  d="M104.6 13 325.3 233.7l-60.1 60.1L44.4 72.9c3.9-23.1 17.5-43.3 37.8-53.3 7.7-3.7 15.7-6.1 22.4-6.6z"
                />
                <path
                  fill="#4285F4"
                  d="M385.4 174.2 60.6 361.9c-3.8 2.2-8 3.4-12.4 3.4-3.2 0-6.2-.5-9.1-1.6-7.3-2.8-13.1-8.6-16-16.1-1-3.5-1.5-7.4-1.5-11.2V173.5c0-3.9.5-7.7 1.5-11.2 2.9-7.4 8.7-13.3 16-16l13.5-5.3 332.8 33.2z"
                />
                <path
                  fill="#34A853"
                  d="M385.4 337.9 104.6 499l220.7-220.7 60.1 59.6z"
                />
              </svg>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1.1,
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.05em",
                    opacity: 0.8,
                  }}
                >
                  GET IT ON
                </span>
                <span
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Google Play
                </span>
              </div>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hero-mockup-container"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "radial-gradient(circle, rgba(32, 75, 180, 0.1) 0%, rgba(255, 255, 255, 0) 70%)",
              zIndex: -1,
              top: 0,
            }}
          ></div>

          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={heroMockup}
            alt="Bokmax App Experience"
            className="hero-mockup-img"
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "400px",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroV2;
