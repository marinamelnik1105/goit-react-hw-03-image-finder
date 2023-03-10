import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ onClick, isLoad }) => {
  return (
    <ButtonStyled onClick={onClick}>
      {isLoad ? 'Loading...' : 'Load more'}
    </ButtonStyled>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoad: PropTypes.bool.isRequired,
};
