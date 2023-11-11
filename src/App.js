import "./App.css";
import logo from "./fatih.png";
import time from "./time.svg";
import warning from "./warning.svg";
import web from "./web.svg";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="card-wrapper">
        <div className="info-card div1">
          <div className="card-text">
            Wir sind umgezogen. Besuchen Sie uns gerne in den Schmiedeäckern 19,
            70599, Ulm.
            <img alt="warning-icon" src={warning} className="warning-icon" />
          </div>
        </div>
        <div className="info-card div2">
          <div className="card-text">
            Öffnungszeiten:
            <div className="oz-wrapper">
              {[
                { day: "Mo", time: "8:00-8:30" },
                { day: "Di", time: "8:00-8:30" },
                { day: "Mi", time: "8:00-8:30" },
                { day: "Do", time: "8:00-8:30" },
                { day: "Fr", time: "8:00-8:30" },
                { day: "Sa", time: "8:00-8:30" },
                { day: "So", time: "8:00-8:30" },
              ].map((item, index) => (
                <div className="öffnungszeiten">
                  <div className="day">{item.day}</div>
                  <div className="time">{item.time}</div>
                </div>
              ))}
            </div>
            <img alt="warning-icon" src={time} className="warning-icon" />
          </div>
        </div>
        <div className="info-card div3">
          <div>Oder besuchen Sie uns online:</div>
          <a
            style={{ "text-transform": "none" }}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            www.nargilando.de
          </a>
          <img alt="warning-icon" src={web} className="warning-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
