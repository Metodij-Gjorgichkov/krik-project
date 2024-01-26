import React, { useState } from "react";

interface Props {
  id: number;
  title: string;
  desc: string;
}

const Faq = (props: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <>
      <div
        className="col-12 forKrik-animation py-2 white-bg border-radius mb-3"
        key={props.id}
      >
        <div className="d-flex justify-content-between align-items-center">
          <p className="font-weight-800 mb-0">{props.title}</p>
          {isClicked ? (
            <img
              src="/icons/showLess.png"
              alt=""
              style={{ width: "30px", height: "30px" }}
              onClick={() => setIsClicked(false)}
              className="cursor-pointer"
            />
          ) : (
            <img
              src="/icons/showMore.png"
              alt=""
              style={{ width: "30px", height: "30px" }}
              onClick={() => setIsClicked(true)}
              className="cursor-pointer"
            />
          )}
        </div>

        {isClicked && <p className=" mt-3">{props.desc}</p>}
      </div>
    </>
  );
};

export default Faq;
