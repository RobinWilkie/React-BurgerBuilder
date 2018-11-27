import React from "react";

const drawToggle = props => {
  return (
    <div>
      <ion-icon name="menu" size="large" onClick={props.clicked} />
    </div>
  );
};

export default drawToggle;
