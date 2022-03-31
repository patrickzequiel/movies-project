import './style.scss';

const Backdrop = (props) => {
  return (
    <>
      <div className="backdrop">
        <img className="backdrop__img" src={`https://image.tmdb.org/t/p/w500/${props.props}`} />
      </div>
    </>
  );
};

export default Backdrop;
