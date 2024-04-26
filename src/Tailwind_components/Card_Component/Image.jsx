
import PropTypes from 'prop-types'
const ImageCard = ({ imageUrl, altText }) => {
  return (
    <div className="w-1/3 p-4">
      <div className="bg-gray-200 rounded-lg overflow-hidden">
        <img src={imageUrl} alt={altText} className="w-full h-auto" />
      </div>
    </div>
  );
};

const ImageCardContainer = ({ imageCards }) => {
  return (
    <div className="flex justify-between">
      {imageCards.map((card, index) => (
        <ImageCard key={index} imageUrl={card.imageUrl} altText={card.altText} />
      ))}
    </div>
  );
};

const Slide = () => {
  const imageCards = [
    { imageUrl: 'https://source.unsplash.com/collection/190727/200x300', altText: 'Image 1' },
    { imageUrl: 'https://source.unsplash.com/collection/190727/200x300', altText: 'Image 2' },
    { imageUrl: 'https://source.unsplash.com/collection/190727/200x300', altText: 'Image 3' },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Dynamic Image Cards</h1>
      <ImageCardContainer imageCards={imageCards} />
    </div>
  );
};

export default Slide;

ImageCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageCards: PropTypes.object.isRequired,
    altText:PropTypes.string.isRequired
  };
ImageCardContainer.propTypes = {
    
    imageCards: PropTypes.object.isRequired
    
  };

