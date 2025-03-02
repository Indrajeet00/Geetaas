import React from "react";

export default function BookPage({ storyList }) {
  return (
    <>
      <div className="h-[104vh] w-[52vw] overflow-auto brows absolute lg:top-[93.5%] md:top-[108%] top-[114%]  left-[24%] p-5  my-scrollbar">
        {storyList.map((sty, i) => {
          return (
            <div  id="sec1" className="w-full p-10">
              <h4 className="text-xl text-center font-sans font-bold">
                {sty.VERSE}
              </h4>
              <p className="text-md text-center mt-2 font-sans">{sty.hindi}</p>
              <p className="text-md text-center mt-2 font-sans">{sty.english} </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
