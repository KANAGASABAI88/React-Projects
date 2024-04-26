import './Document.css'
import PropTypes from 'prop-types';
const DocumentViewer = ({ src }) => {
  return (
    <div className="document-viewer">
      <iframe src={src} title="Document Viewer" className="w-full h-full"></iframe>
    </div>
  );
};

export default DocumentViewer;

DocumentViewer.propTypes= {
    src: PropTypes.string.isRequired,
   
  };