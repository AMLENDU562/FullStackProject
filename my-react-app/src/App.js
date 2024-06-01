import React, { useState } from "react";
import "./styles/App.css";

const App = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionData = [
    {
      title: "Semester-1 Section-A",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-1 Section-B",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-2 Section-A",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-2 Section-B",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-3 Section-A",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-3 Section-B",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-4 Section-A",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-4 Section-B",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-5 Section-A",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-5 Section-B",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },

    {
      title: "Semester-6 Section-A",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-6 Section-B",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-7 Section-A",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-7 Section-B",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-8 Section-A",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "Semester-8 Section-B",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    
   
  ];

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <div id="faqs">
      <h1>Welcome To Time Table Viewer</h1>
      <h1>Type Your Sem and Sec To View Your Class TimeTable</h1>
      {accordionData.map((item, index) => (
        <div key={index} className={`accordion-item ${activeAccordion === index ? "open" : ""}`}>
          <button onClick={() => toggleAccordion(index)}>
            <div className="flex items-center">
              <div className="tittle">{item.title}</div>
              <div className="ml-auto">
                <svg
                  className={activeAccordion === index ? "rotate-180" : ""}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </button>
          <div className={`accordion-content ${activeAccordion === index ? "open" : ""}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
