
import './Tools.css'
import PropTypes from 'prop-types';
export default function Tooltip({text,children}){

    return (
        <div className="tooltip">
        {children}
        <span className="tooltip-text">{text}</span>
      </div>
    )}
    Tooltip.propTypes = {
        text: PropTypes.string.isRequired, 
        children: PropTypes.string.isRequired 
}
