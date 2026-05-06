import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Shop Basic",
    price: "$29",
    period: "per month",
    features: [
      "Core Booking System",
      "Basic Referral Tools",
      "5 Team Members",
      "Email Support",
    ],
    btnText: "Choose Basic",
    variant: "outline",
  },
  {
    name: "Shop Pro",
    price: "$79",
    period: "per month",
    features: [
      "Advanced Booking",
      "Priority Referrals",
      "Unlimited Team",
      "24/7 Support",
      "Analytics Dashboard",
    ],
    btnText: "Choose Pro",
    variant: "primary",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "Custom Integration",
      "Dedicated Manager",
      "API Access",
      "On-premise Options",
    ],
    btnText: "Contact Sales",
    variant: "outline",
  },
];

function PricingV2() {
  return (
    <section
      className="section v2-theme"
      id="pricing"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
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
            Membership Plans
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              color: "var(--v2-navy)",
              textTransform: "uppercase",
              fontWeight: "800",
            }}
          >
            Choose Your Level
          </h2>
        </motion.div>

        <style>{`
          @media (max-width: 968px) {
            .pricing-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
            .pricing-card-popular { transform: none !important; }
          }
        `}</style>
        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={plan.popular ? "pricing-card-popular" : ""}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: plan.popular ? "var(--v2-navy)" : "white",
                color: plan.popular ? "white" : "var(--v2-navy)",
                padding: "4rem 2.5rem",
                borderRadius: "32px",
                textAlign: "left",
                border: plan.popular
                  ? "2px solid var(--v2-blue)"
                  : "1px solid var(--border-light)",
                position: "relative",
                boxShadow: plan.popular
                  ? "0 30px 60px rgba(2, 8, 51, 0.2)"
                  : "0 10px 40px rgba(0,0,0,0.03)",
                transform: plan.popular ? "scale(1.05)" : "none",
                zIndex: plan.popular ? 2 : 1,
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  fontWeight: "800",
                }}
              >
                {plan.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    fontFamily: "'Lexend Giga', sans-serif",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontSize: "0.9rem",
                    opacity: 0.6,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {plan.period}
                </span>
              </div>

              <div style={{ marginBottom: "3rem" }}>
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: plan.popular
                          ? "var(--v2-red)"
                          : "var(--v2-blue)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                style={{
                  width: "100%",
                  padding: "16px",
                  textTransform: "uppercase",
                  background: plan.popular ? "var(--v2-red)" : "transparent",
                  borderColor: plan.popular
                    ? "var(--v2-red)"
                    : "var(--v2-blue)",
                  color: plan.popular ? "white" : "var(--v2-blue)",
                }}
              >
                {plan.btnText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingV2;
