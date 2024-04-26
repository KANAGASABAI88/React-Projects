import './card.css'
import PropTypes from 'prop-types';
export default function Card({Imageurl,title,description,buttonText}){


    return (
        <div className="card">
            <img src={Imageurl} alt="image" className="card-image"/>
                <div className="card-content">
                    <h1 className="card-title"> 
                        {title}
                        <p className="card-description">
                            {description}
                            <button className="card-button">
                                {buttonText}

                            </button>

                        </p>

                    </h1>

                </div>

            

        </div>
    )


}
Card.propTypes= {
    Imageurl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    
  };


  {/* <Card Imageurl='https://source.unsplash.com/featured/?mountain' title="Mountain" description="tallest mountain" buttonText="Download"/> */}