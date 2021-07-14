import React, { useState } from "react";
import "styles/components/ArrayAccordion.scss";

export default function ArrayAccordion({ data: { title, items } }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const goodItems = items.map((t) => <p class="accordion-item">{`"${t}",`}</p>);

  const builtTitle = (
    <div>
      <span class="builtTitle-const">const </span>
      <span class="builtTitle-title">{title} =</span>
      <span class="builtTitle-ending">{open ? " [" : " [...]"}</span>
    </div>
  );

  return (
    <div class="accordion" onClick={toggle}>
      <p class="accordion-title">{builtTitle}</p>
      {open ? goodItems : " "}
      <p class="accordion-title">{open ? "]" : ""}</p>
    </div>
  );
}
