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
