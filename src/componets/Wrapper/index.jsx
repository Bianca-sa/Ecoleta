import './wrapper.scss';

const Wrapper = ({ children }) => {
  return (
    <div className='wrapper'>
      <div className='content'>{children}</div>
    </div>
  );
};

export default Wrapper;
