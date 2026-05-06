import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import screen1 from "../../assets/app-screen-1.png";
import screen2 from "../../assets/app-screen-2.png";
import screen3 from "../../assets/app-screen-3.png";
import screen4 from "../../assets/app-screen-4.png";

const screens = [screen1, screen2, screen3, screen4];

function BrandStoryV2() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="section v2-theme"
      id="brand-story"
      style={{ backgroundColor: "#f8faff", padding: "120px 0" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="badge"
              style={{
                marginBottom: "1rem",
                background: "var(--v2-blue)",
                color: "white",
                fontFamily: "'Lexend Giga', sans-serif",
                fontSize: "0.65rem",
              }}
            >
              Our Story
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 5vw, 3rem)",
                color: "var(--v2-navy)",
                textTransform: "uppercase",
                fontWeight: "800",
                lineHeight: "1.1",
                marginBottom: "2rem",
              }}
            >
              Elevating the Craft
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                lineHeight: "1.8",
                fontFamily: "'Inter', sans-serif",
                marginBottom: "1.5rem",
              }}
            >
              BOKMAX was born from a simple belief: the grooming industry
              deserves a narrative as elite as the skills of its professionals.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(2, 8, 51, 0.7)",
                lineHeight: "1.7",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              We have engineered an ecosystem that respects the tradition of the
              craft while providing the modern tools needed to thrive in a
              digital economy. Our network is a testament to the power of
              community, style, and sustainable growth.
            </p>
          </motion.div>

          {/* Phone carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "200px",
                height: "60px",
                background: "rgba(32, 75, 180, 0.2)",
                filter: "blur(30px)",
                borderRadius: "50%",
              }}
            />

            {/* Phone shell */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "260px",
                height: "540px",
                background: "#0a0a0a",
                borderRadius: "48px",
                border: "10px solid #1a1a1a",
                boxShadow:
                  "0 0 0 1px #333, 0 40px 80px rgba(2, 8, 51, 0.2), inset 0 0 0 1px #2a2a2a",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Notch */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "90px",
                  height: "26px",
                  background: "#0a0a0a",
                  borderRadius: "0 0 18px 18px",
                  zIndex: 10,
                }}
              />

              {/* Screen */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "38px",
                  overflow: "hidden",
                  position: "relative",
                  background: "#fff",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={screens[current]}
                    alt={`App screen ${current + 1}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Side buttons */}
              <div
                style={{
                  position: "absolute",
                  right: "-12px",
                  top: "120px",
                  width: "4px",
                  height: "60px",
                  background: "#222",
                  borderRadius: "0 4px 4px 0",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "-12px",
                  top: "100px",
                  width: "4px",
                  height: "36px",
                  background: "#222",
                  borderRadius: "4px 0 0 4px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "-12px",
                  top: "150px",
                  width: "4px",
                  height: "60px",
                  background: "#222",
                  borderRadius: "4px 0 0 4px",
                }}
              />
            </motion.div>

            {/* Dot indicators */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                marginTop: "20px",
              }}
            >
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background:
                      i === current ? "var(--v2-blue)" : "rgba(2, 8, 51, 0.2)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandStoryV2;
