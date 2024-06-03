import React, { useState } from "react";
import "./styles/App.css";
import Schedule from "./Schedule";
import ScheduleData from "./constants/schedule.json";
const App = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const semsester_keys = Object.keys(ScheduleData.schedules)

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <div id="faqs">
      <h1 className="heading">Schedule Viewer</h1>
      <h1>Get your Weekly Schedule for all semesters.</h1>
      {semsester_keys.map((item, index) => (
        <div key={index} className={`accordion-item ${activeAccordion === index ? "open" : ""}`}>
          <button onClick={() => toggleAccordion(index)}>
            <div className="flex items-center">
              <div className="tittle">{item.split('_')[0].toLocaleUpperCase()+" " + item.split('_')[1]}</div>
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
          <Schedule semester={index + 1} timetable={ScheduleData}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
