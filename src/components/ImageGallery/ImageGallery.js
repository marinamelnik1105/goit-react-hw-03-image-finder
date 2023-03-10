import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ hits }) => {
  return (
    <ImageGalleryList>
      {hits.map(({ webformatURL, tags, id, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </ImageGalleryList>
  );
};
ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
};
