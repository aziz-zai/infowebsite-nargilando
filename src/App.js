import "./App.css";
import logo from "./nargilando_logo.png";
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
            Freunde, der Online-shop ist umgezogen. Im Laden sind wir aber wie
            gewohnt für euch da. <br /> Nargilando 0711, Königstraße 20, 70173
            Stuttgart.
            <img alt="warning-icon" src={warning} className="warning-icon" />
          </div>
        </div>
        <div className="info-card div2">
          <div className="card-text">
            Öffnungszeiten:
            <div className="oz-wrapper">
              {[
                { day: "Mo", time: "12:00-21:00" },
                { day: "Di", time: "12:00-21:00" },
                { day: "Mi", time: "12:00-21:00" },
                { day: "Do", time: "12:00-21:00" },
                { day: "Fr", time: "12:00-21:00" },
                { day: "Sa", time: "12:00-21:00" },
                { day: "So", time: "Geschlossen" },
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
          <div>Oder besucht unseren Partnershop:</div>
          <a style={{ "text-transform": "none" }} href="https://thesmokery.de">
            thesmokery.de
          </a>
          <img alt="warning-icon" src={web} className="warning-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
