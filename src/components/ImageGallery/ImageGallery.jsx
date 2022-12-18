import { ImageGalleryItem } from './ImageGalleryItem';

export function ImageGallery({ data }) {
  return (
    <ul className="gallery">
      {data.map(element => (
        <ImageGalleryItem key={element.id} imageInfo={element} />
      ))}
    </ul>
  );
}
