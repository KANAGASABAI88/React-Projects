// import React from 'react';
import Accordion from './Accordian';

const AccordianApp = () => {
  return (
    <div className="app">
      <h1>Accordion Example</h1>
      <Accordion title="Section 1">
        <p>Content for section 1 goes here...</p>
      </Accordion>
      <Accordion title="Section 2">
        <p>Content for section 2 goes here...</p>
      </Accordion>
      <Accordion title="Section 3">
        <p>Content for section 3 goes here...</p>
      </Accordion>
    </div>
  );
};

export default AccordianApp;
