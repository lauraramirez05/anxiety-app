import React from 'react';

function Entry(props) {
  return (
    <ul>
      <li>Anxiety Level: {props.anxietyLevel}</li>
      <li>Trigger: {props.trigger}</li>
      <li>Log: {props.log}</li>
    </ul>
  );
}

export default Entry;
