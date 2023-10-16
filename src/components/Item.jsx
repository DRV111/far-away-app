import PropTypes from 'prop-types';
function Item(props) {
  const { item } = props;
  return (
    <li>
      <span>
        {item.quantity} - {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  initialItems: PropTypes.array.isRequired,
};

export default Item;
