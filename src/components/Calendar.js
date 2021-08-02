import React, { useEffect, useState } from "react";
import { fetchContributions } from "fetch-contribution-calendar";
import "styles/Calendar.scss";

const Block = (props) => {
  const { date, count, relativeLevel } = props.props;
  const colors = [
    "rgba(110, 240, 179, 0.1)",
    "rgba(110, 240, 179, 0.2)",
    "rgba(110, 240, 179, 0.5)",
    "rgba(110, 240, 179, 0.7)",
    "rgba(110, 240, 179, 0.9)",
  ];
  return (
    <div className="block" style={{ backgroundColor: colors[relativeLevel] }}>
      <div className="overlay">
        <p>{count}</p>
        <p>{date.slice(5)}</p>
      </div>
    </div>
  );
};

const Calendar = ({ n }) => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    fetchContributions("SVRourke").then((r) => setContributions(r));
  }, []);

  const offset = -1 * (n + 4);
  const contribs = Object.entries(contributions).slice(offset, -4).reverse();
  const contribCards = contribs.map((c) => <Block props={c[1]} />);

  return <div className="calendar">{contribCards}</div>;
};

export default Calendar;
