import React from "react";

interface Props {
  title: string;
  padding: string;
}

const PurpleButton = ({ title, padding }: Props) => {
  return (
    <button
      className="purple-button bg-purple  py-2 font-weight-600"
      style={{ paddingRight: padding, paddingLeft: padding }}
    >
      {title}
    </button>
  );
};

export default PurpleButton;
