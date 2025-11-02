const { useState, useEffect } = React;

function InterestingHandshaking() {
  const [step, setStep] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
    setTimeout(() => setAnimated(false), 500);
  }, [step]);

  const steps = [
    {
      title: "Welcome to the Mystery Party",
      description: "20 friends came to a party. Everyone shook hands with at least 1 person.",
      details: "But here's the twist... when we count all the handshakes, we get 38!",
      colorStart: "#ec4899",
      colorEnd: "#f43f5e",
      number: "1",
      fun: "Can you figure out the mystery?"
    },
    {
      title: "The Big Question",
      description: "How many people shook hands with EXACTLY 2 friends?",
      details: "Let's think about this together...",
      colorStart: "#60a5fa",
      colorEnd: "#6366f1",
      number: "?",
      fun: "This is a real puzzle!"
    },
    {
      title: "The Secret Rule",
      description: "Here's something cool: When 2 people shake hands, both of them count it!",
      details: "Alice shakes Bob's hand → Alice counts +1, Bob counts +1 = counted TWICE!",
      colorStart: "#fbbf24",
      colorEnd: "#f97316",
      number: "2",
      fun: "This is the secret to solving the mystery!"
    },
    {
      title: "Let's Do The Math",
      description: "Some people shook 1 hand, some shook 2 hands.",
      details: "If we add everyone's count, we get 38 (because each handshake is counted twice)",
      colorStart: "#4ade80",
      colorEnd: "#10b981",
      number: "3",
      fun: "Ready to find who shook 2 hands?"
    },
    {
      title: "Setting Up The Puzzle",
      description: "Let's use letters to solve this:",
      details: "x = people who shook 1 hand\ny = people who shook 2 hands\n\nWe know:\n→ x + y = 20 (total people)\n→ 1×x + 2×y = 38 (total count)",
      colorStart: "#c084fc",
      colorEnd: "#ec4899",
      number: "4",
      fun: "Two clues, one answer!"
    },
    {
      title: "The Magic Moment",
      description: "Watch this magic trick:",
      details: "x + y = 20 ... (equation 1)\nx + 2y = 38 ... (equation 2)\n\nSubtract: (x + 2y) - (x + y) = 38 - 20\nResult: y = 18",
      colorStart: "#818cf8",
      colorEnd: "#a855f7",
      number: "5",
      fun: "See how the x disappears? Magic!"
    },
    {
      title: "THE ANSWER REVEALED",
      description: "18 people shook hands with exactly 2 friends!",
      details: "→ 2 people shook 1 hand (2 × 1 = 2)\n→ 18 people shook 2 hands (18 × 2 = 36)\n→ Total count: 2 + 36 = 38\n\nPERFECT! We solved the mystery!",
      colorStart: "#fde047",
      colorEnd: "#eab308",
      number: "6",
      fun: "You just used graph theory like a pro!"
    }
  ];

  const current = steps[step];

  const getColorClass = () => {
    const colors = [
      "from-pink-400 to-rose-500",
      "from-blue-400 to-indigo-500",
      "from-yellow-400 to-orange-500",
      "from-green-400 to-emerald-500",
      "from-purple-400 to-pink-500",
      "from-indigo-400 to-purple-500",
      "from-yellow-300 to-yellow-500"
    ];
    return colors[step];
  };

  const containerStyle = {
    "--color-start": current.colorStart,
    "--color-end": current.colorEnd
  };

  return React.createElement(
    "div",
    { className: `container bg-gradient-to-br ${getColorClass()}`, style: containerStyle },
    React.createElement(
      "div",
      { className: "w-full max-w-2xl" },
      React.createElement(
        "div",
        { className: `main-card ${animated ? "animated" : ""}` },
        // Header
        React.createElement(
          "div",
          { className: "header" },
          React.createElement("div", { className: "emoji-box" }, current.number),
          React.createElement("h1", null, current.title),
          React.createElement("p", null, current.fun)
        ),
        // Content
        React.createElement(
          "div",
          { className: "content" },
          React.createElement("h2", { className: "description" }, current.description),
          React.createElement(
            "div",
            { className: "details-box" },
            React.createElement("p", null, current.details)
          ),
          // Step 2: Special yellow box
          step === 2 &&
            React.createElement(
              "div",
              { className: "special-box yellow" },
              React.createElement("p", null, "Person A + Person B"),
              React.createElement("p", { style: { fontWeight: "bold", color: "#92400e" } }, "1 handshake = counted 2 times!")
            ),
          // Step 6: Special green box
          step === 6 &&
            React.createElement(
              "div",
              { className: "special-box green" },
              React.createElement(
                "div",
                { className: "grid" },
                React.createElement(
                  "div",
                  { className: "grid-item" },
                  React.createElement("p", { style: { fontWeight: "bold", color: "#166534" } }, "2 people"),
                  React.createElement("p", { style: { fontSize: "0.875rem", color: "#4d7c0f" } }, "shook 1"),
                  React.createElement("p", { style: { fontWeight: "bold", fontSize: "1.5rem", color: "#22c55e", marginTop: "0.5rem" } }, "= 2")
                ),
                React.createElement(
                  "div",
                  { style: { display: "flex", alignItems: "center", justifyContent: "center" } },
                  React.createElement("p", { style: { fontSize: "1.5rem", fontWeight: "bold" } }, "+")
                ),
                React.createElement(
                  "div",
                  { className: "grid-item" },
                  React.createElement("p", { style: { fontWeight: "bold", color: "#166534" } }, "18 people"),
                  React.createElement("p", { style: { fontSize: "0.875rem", color: "#4d7c0f" } }, "shook 2"),
                  React.createElement("p", { style: { fontWeight: "bold", fontSize: "1.5rem", color: "#22c55e", marginTop: "0.5rem" } }, "= 36")
                )
              ),
              React.createElement(
                "div",
                { className: "divider" },
                React.createElement("p", { className: "total" }, "2 + 36 = 38")
              )
            ),
          // Progress bar
          React.createElement(
            "div",
            { className: "progress-section" },
            React.createElement(
              "div",
              { className: "progress-label" },
              React.createElement("span", null, "Progress"),
              React.createElement("span", null, Math.round(((step + 1) / steps.length) * 100) + "%")
            ),
            React.createElement(
              "div",
              { className: "progress-bar" },
              React.createElement("div", {
                className: "progress-fill",
                style: { width: `${((step + 1) / steps.length) * 100}%` }
              })
            )
          ),
          // Buttons
          React.createElement(
            "div",
            { className: "button-group" },
            React.createElement(
              "button",
              {
                className: "btn-back",
                onClick: () => setStep(Math.max(0, step - 1)),
                disabled: step === 0
              },
              "← Back"
            ),
            step === steps.length - 1
              ? React.createElement(
                  "button",
                  { className: "btn-next", onClick: () => setStep(0) },
                  "Restart"
                )
              : React.createElement(
                  "button",
                  { className: "btn-next", onClick: () => setStep(step + 1) },
                  "Next →"
                )
          ),
          // Step indicators
          React.createElement(
            "div",
            { className: "step-indicators" },
            steps.map((_, i) =>
              React.createElement(
                "button",
                {
                  key: i,
                  className: `step-btn ${i === step ? "active" : i < step ? "completed" : "inactive"}`,
                  onClick: () => setStep(i)
                },
                i < step ? "✓" : i + 1
              )
            )
          ),
          // Fun fact
          React.createElement(
            "div",
            { className: "fun-fact" },
            React.createElement(
              "p",
              null,
              React.createElement("span", null, "Fun Fact: "),
              "This is called the \"Handshaking Lemma\" - a real concept in mathematics used to understand networks and connections!"
            )
          )
        )
      )
    )
  );
}

// Render the component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(InterestingHandshaking));