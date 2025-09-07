import React from "react";
import { FaClock, FaStar, FaAward } from "react-icons/fa";

const Speed = () => {
  const features = [
    {
      icon: FaClock,
      title: "Speed",
      description:
        "Same day, next day and 3 hours rush printing. Specialities in 3 days",
    },
    {
      icon: FaStar,
      title: "Luxury",
      description:
        "Mix and match gorgeous oil color or white ink painting with a variety of paper options.",
    },
    {
      icon: FaAward,
      title: "Guaranteed Satisfaction",
      description:
        "Print your heart out with confidence. We got you, pinky promise.",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <div className="features-container">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="feature-card">
              <div className="icon-circle">
                <Icon size={30} color="#fff" />
              </div>
              <div className="feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .features-container {
          display: flex;
          flex-direction: row; /* desktop horizontal */
          justify-content: space-between;
          align-items: stretch;
          gap: 20px;
          flex-wrap: wrap;
        }

        .feature-card {
          display: flex;
          flex-direction: row; /* icon left, text right */
          align-items: flex-start;
          padding: 15px;
          flex: 1;
          min-width: 250px;
          background: #f9f9f9;
          border-radius: 10px;
        }

        .icon-circle {
          background-color: #0077b6;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .feature-text h3 {
          margin: 0 0 5px;
          font-size: 18px;
          font-weight: 600;
        }

        .feature-text p {
          margin: 0;
          font-size: 14px;
          line-height: 1.4;
          color: #333;
        }

        @media (max-width: 768px) {
          .features-container {
            flex-direction: column; /* mobile column */
            gap: 10px;
          }
          .feature-card {
            flex-direction: row;
            width: 100%;
          }
          .icon-circle {
            margin-right: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Speed;