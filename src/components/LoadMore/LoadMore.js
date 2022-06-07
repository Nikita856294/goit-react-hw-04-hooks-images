import { LoadButton } from './LoadMoreStyled';
import PropTypes from 'prop-types';

function LoadMore({ onClick }) {
  return (
    <LoadButton type="button" name="load" onClick={onClick}>
      Load more
    </LoadButton>
  );
}

export default LoadMore;

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
