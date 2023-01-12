import React from "react";
import Event1 from "../images/event14.jpg";
import Event2 from "../images/event2.jpg";
import Event3 from "../images/event3.jpg";
import Event5 from "../images/event5.jpg";
import Event6 from "../images/event6.jpg";
import Event8 from "../images/event8.jpg";
import Event9 from "../images/event9.jpg";
import Event10 from "../images/event10.jpg";
import Event12 from "../images/event12.jpg";

const Grid = () => {
  return (
    <section className="grid-cont">
      <div className="grid-cont-flex">
        <img className="event-pic" src={Event1} alt="Event1" />
      </div>
      <div className="grid-cont-flex">
        <img className="event-pic" src={Event2} alt="Event2" />
        <img className="event-pic" src={Event3} alt="Event3" />
      </div>
      <div id="grid1" className="grid-cont-flex">
        <img className="event-pic" src={Event5} alt="Event4" />
        <img className="event-pic" src={Event6} alt="Event5" />
      </div>
      <div id="grid2" className="grid-cont-flex">
        <img className="event-pic" src={Event12} alt="Event6" />
        <img className="event-pic" src={Event8} alt="Event7" />
      </div>
      <div className="grid-cont-flex">
        <img className="event-pic" src={Event9} alt="Event8" />
        <img className="event-pic" src={Event10} alt="Event9" />
      </div>
    </section>
  );
};

export default Grid;
