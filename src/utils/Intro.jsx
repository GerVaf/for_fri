/* eslint-disable react/prop-types */
import { useState } from "react";
import cat from "../../public/cat.jpg";

const Intro = ({ onAccept }) => {
  const [hasMoved, setHasMoved] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const messages = [
    "No",
    "Are you sure?",
    "Really?",
    "Think Again",
    "Last Chance",
    "Please?",
    "Pretty Please?",
    "You Don't Mean That",
    "Try Yes Instead",
  ];

  const [position, setPosition] = useState({
    top: "70%",
    left: "65%",
  });

  const moveButton = () => {
    const top = Math.random() * 60 + 20;
    const left = Math.random() * 70 + 10;

    setPosition({
      top: `${top}%`,
      left: `${left}%`,
    });

    setHasMoved(true);
    setAttempts((prev) => prev + 1);
  };

  const noText = messages[Math.min(attempts, messages.length - 1)];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #ffe4ec 0%, #ffd6e8 50%, #fff0f6 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "24px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Background Hearts */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          opacity: 0.15,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            fontSize: "40px",
          }}
        >
          ❤️
        </div>

        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "15%",
            fontSize: "60px",
          }}
        >
          ❤️
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "20%",
            fontSize: "50px",
          }}
        >
          ❤️
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            fontSize: "45px",
          }}
        >
          ❤️
        </div>
      </div>

      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "550px",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          borderRadius: "32px",
          padding: "48px 32px",
          textAlign: "center",
          boxShadow: "0 25px 60px rgba(0,0,0,0.08)",
          zIndex: 10,
        }}
      >
        <p
          style={{
            marginTop: "20px",
            color: "#555",
            lineHeight: 1.8,
            fontSize: "16px",
          }}
          className="flex items-center flex-col"
        >
          I know I made mistakes.
          <br />
          <div className="h-[200px] overflow-hidden rounded-lg">
            <img
              className="h-full w-full self-center flex-1"
              src={cat}
              alt=""
            />
          </div>
          <br />
          Can you give me another chance?
        </p>

        {/* Initial Buttons */}
        {!hasMoved && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginTop: "36px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={onAccept}
              style={{
                border: "none",
                background: "#e11d48",
                color: "#fff",
                padding: "14px 34px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 12px 30px rgba(225,29,72,0.25)",
              }}
            >
              Yes, I Forgive You
            </button>

            <button
              onMouseEnter={moveButton}
              onTouchStart={moveButton}
              style={{
                border: "none",
                background: "#fff",
                color: "#333",
                padding: "14px 34px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
              }}
            >
              No
            </button>
          </div>
        )}

        {hasMoved && (
          <div
            style={{
              marginTop: "36px",
            }}
          >
            <button
              onClick={onAccept}
              style={{
                border: "none",
                background: "#e11d48",
                color: "#fff",
                padding: "14px 40px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 12px 30px rgba(225,29,72,0.25)",
              }}
            >
              Yes, I Forgive You
            </button>
          </div>
        )}
      </div>

      {/* Escaping No Button */}
      {hasMoved && (
        <button
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
          onClick={moveButton}
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "#fff",
            color: "#333",
            padding: "14px 28px",
            borderRadius: "999px",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
            transition: "all 0.2s ease",
            zIndex: 999,
            whiteSpace: "nowrap",
          }}
        >
          {noText}
        </button>
      )}
    </div>
  );
};

export default Intro;
