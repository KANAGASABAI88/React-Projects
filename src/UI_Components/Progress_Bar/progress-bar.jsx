import './progress_bar.css'
import PropTypes from 'prop-types'; 
export default function ProgressBar({progress}){


    return (
        <div className="progress-bar-container">
        <div className="progress-bar" style={{width:`${progress}%`}}></div>
        </div>
    )
}
ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired
  };