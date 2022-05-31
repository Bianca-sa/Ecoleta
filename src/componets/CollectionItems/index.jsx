import styles from './styles.module.scss';

const CollectionItems = ({ label, img, onClick, selected }) => {
  const { items } = styles;
  console.log(selected);
  return (
    <button
      className={items}
      type='button'
      onClick={onClick}
      style={
        selected
          ? {
              background: 'linear-gradient( #ffffff, #E1FAEC)',
              border: '5px solid #34cb79',
            }
          : {}
      }
    >
      <img src={img} />
      <p>{label}</p>
    </button>
  );
};

export default CollectionItems;
