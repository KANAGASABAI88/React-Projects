import  { useState } from 'react';
import PropTypes from 'prop-types';
import './Accordian.css';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-title">{title}</div>
        <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>&#x25BE;</div>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {isOpen && <div className="accordion-body">{children}</div>}
      </div>
    </div>
  );
};

export default Accordion;

Accordion.propTypes= {
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
   
    
  };
