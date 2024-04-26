import PropTypes from 'prop-types';
import './Buttons.css'
export default function Button({children,variant,size}){
    
        const buttonClasses=`button ${variant} ${size}`
    
    return(
        <>
        <button className={buttonClasses}>
            {children} 

        </button>
        
        </>
        
     
    )
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired, // Validate type prop
    variant: PropTypes.string.isRequired, // Validate message prop
    children:PropTypes.string.isRequired
  };