import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
import { BoxReveal } from "./magicui/box-reveal";

function ServicesHeader({ title, titleDescription, titleImage, header }) {
  return (
    <>
      <div className="w-full h-40 flex items-center justify-center bg-[#DEF5F2]">
        <SplitText
          text={header}
          className="text-black text-xl md:text-3xl uppercase tracking-widest font-light"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      <div className="bg-white grid md:grid-cols-6 items-center py-10 md:px-28 gap-12">
        <div className="col-span-1 md:col-span-4 space-y-4  p-6 md:p-8">
          <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wider mb-2">
              {title}
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#b7b5d8ff"} duration={0.8}>
            <p className="text-base md:text-lg font-light tracking-wide text-justify">
              {titleDescription}
            </p>
          </BoxReveal>
        </div>

        <figure className="col-span-1 md:col-span-2 w-full h-64 i md:h-full">
          <img
            src={titleImage}
            alt="advise giving image"
            className="h-full w-full object-cover rounded"
          />
        </figure>
      </div>
    </>
  );
}

export default ServicesHeader;
