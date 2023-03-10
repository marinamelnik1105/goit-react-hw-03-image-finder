import PropTypes from 'prop-types';
import { ModalGallery, Overlay } from './Modal.styled';

export function Modal({ imgUrl, tags, onBackdropClick }) {
  return (
    <Overlay onClick={evt => onBackdropClick(evt)}>
      <ModalGallery>
        <img src={imgUrl} alt={tags} />
      </ModalGallery>
    </Overlay>
  );
}
Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onBackdropClick: PropTypes.func.isRequired,
};
