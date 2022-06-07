import { ImageItem } from './ImageGalleryStyled';
import PropTypes from 'prop-types';
function ImageGalleryItem({ images, showModal }) {
  return (
    <ImageItem className="gallery-item">
      <img
        key={images.id}
        src={images.webformatURL}
        alt={images.tags}
        onClick={() => showModal(images.largeImageURL, images.tags)}
        width="100"
        height="100"
      />
    </ImageItem>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  showModal: PropTypes.func.isRequired,
};
