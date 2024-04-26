import PropTypes from 'prop-types';
import './Alert.css'
// import React from 'react';
export default function AlertMessage({type,message}){
    const alertClasses=`alert ${type}`

    return(
        <div className={alertClasses}>
        {message}
        </div>
    )
}

AlertMessage.propTypes = {
    type: PropTypes.oneOf(['success', 'error', 'warning']).isRequired, // Validate type prop
    message: PropTypes.string.isRequired // Validate message prop
  };