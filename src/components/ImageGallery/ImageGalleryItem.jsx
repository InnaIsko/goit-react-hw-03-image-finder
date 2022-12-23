import PropTypes from 'prop-types';

export function ImageGalleryItem({ imageInfo, handlerClickImg }) {
  return (
    <li
      className="gallery-item"
      onClick={() => handlerClickImg(imageInfo.largeImageURL, imageInfo.tags)}
    >
      <img src={imageInfo.webformatURL} alt={imageInfo.tags} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  imageInfo: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  handlerClickImg: PropTypes.func.isRequired,
};
