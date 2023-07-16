import ImageHoverTrigger from "./ImageHoverTrigger";

ImageHoverTrigger;
const VitruvianCarousel = ({ frontHandler, backHandler, sideHandler }) => {
  return (
    <div
      className="inline-grid grid-rows-6 w-full h-[85%] absolute 
                place-items-stretch z-40 max-[400px]:hidden"
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
