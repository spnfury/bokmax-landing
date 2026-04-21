import { Link } from "react-router-dom";
import LogoV2 from "./LogoV2";

function FooterV2() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer v2-theme"
      style={{
        backgroundColor: "var(--v2-navy)",
        color: "white",
        padding: "100px 0 40px",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "4rem",
        }}
      >
        <div style={{ gridColumn: "span 2" }}>
          <LogoV2 variant="white" style={{ marginBottom: "2rem" }} />
          <p
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "400px",
              marginTop: "1.5rem",
              lineHeight: "1.7",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
            }}
          >
            The elite referral network designed for the modern grooming
            industry. Secure, transparent, and built for growth.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              aria-label="Download on the App Store"
              className="v2-footer-store"
            >
              <svg
                width="22"
                height="22"
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
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.05em",
                    opacity: 0.8,
                  }}
                >
                  Download on the
                </span>
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  App Store
                </span>
              </div>
            </a>

            <a
              href="#"
              aria-label="Get it on Google Play"
              className="v2-footer-store"
            >
              <svg
                width="22"
                height="24"
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
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.05em",
                    opacity: 0.8,
                  }}
                >
                  GET IT ON
                </span>
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Google Play
                </span>
              </div>
            </a>
          </div>
          <style>{`
            .v2-footer-store {
              color: white;
              background: rgba(255, 255, 255, 0.08);
              border: 1px solid rgba(255, 255, 255, 0.15);
              border-radius: 12px;
              padding: 8px 16px;
              display: inline-flex;
              align-items: center;
              gap: 10px;
              text-decoration: none;
              transition: all 0.3s ease;
              min-height: 48px;
            }
            .v2-footer-store:hover {
              background: rgba(255, 255, 255, 0.15);
              transform: translateY(-3px);
            }
          `}</style>
        </div>

        <div>
          <h4
            style={{
              fontSize: "0.9rem",
              fontWeight: "800",
              textTransform: "uppercase",
              marginBottom: "1.75rem",
              letterSpacing: "0.05em",
            }}
          >
            Legal
          </h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <li>
              <Link to="/privacy" className="v2-footer-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="v2-footer-link">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="v2-footer-link">
                Cookies Info
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: "100px",
          paddingTop: "40px",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(255, 255, 255, 0.4)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          &copy; {currentYear} BOKMAX NETWORK. ALL RIGHTS RESERVED.
        </p>
      </div>
      <style>{`
        .v2-footer-link {
          color: rgba(255, 255, 255, 0.6);
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        .v2-footer-link:hover {
          color: var(--v2-blue-light);
          padding-left: 5px;
        }
      `}</style>
    </footer>
  );
}

export default FooterV2;
