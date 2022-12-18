export function ImageGalleryItem({ imageInfo }) {
  return (
    <li className="gallery-item">
      <img src={imageInfo.webformatURL} alt={imageInfo.tags} />
    </li>
  );
}
