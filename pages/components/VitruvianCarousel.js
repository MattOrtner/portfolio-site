import ImageHoverTrigger from "./ImageHoverTrigger";

ImageHoverTrigger;
const VitruvianCarousel = ({ frontHandler, backHandler, sideHandler }) => {
  return (
    <div
      className="inline-grid grid-rows-6 w-[70%] h-full left-0 top-0 
          absolute place-items-stretch z-40"
    >
      <ImageHoverTrigger
        overHandler={sideHandler}
        leaveHandler={frontHandler}
      />
      <ImageHoverTrigger
        overHandler={backHandler}
        leaveHandler={frontHandler}
      />
      <ImageHoverTrigger
        overHandler={sideHandler}
        leaveHandler={frontHandler}
      />
      <ImageHoverTrigger
        overHandler={frontHandler}
        leaveHandler={frontHandler}
      />
      <ImageHoverTrigger
        overHandler={sideHandler}
        leaveHandler={frontHandler}
      />
      <ImageHoverTrigger
        overHandler={backHandler}
        leaveHandler={frontHandler}
      />
    </div>
  );
};
export default VitruvianCarousel;
