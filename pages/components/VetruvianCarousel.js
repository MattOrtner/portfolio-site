import ImageHoverTrigger from "./ImageHoverTrigger";

ImageHoverTrigger;
const VetruvianCarousel = ({ frontHandler, backHandler, sideHandler }) => {
  return (
    <div
      className="inline-grid grid-rows-9 w-[65%] h-full left-0 top-0 
          absolute place-items-stretch"
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
    </div>
  );
};
export default VetruvianCarousel;
