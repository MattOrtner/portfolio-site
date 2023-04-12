const ImageHoverTrigger = ({ overHandler, leaveHandler }) => {
  return <div onMouseOver={overHandler} onMouseLeave={leaveHandler}></div>;
};
export default ImageHoverTrigger;
