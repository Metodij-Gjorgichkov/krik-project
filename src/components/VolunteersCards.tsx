import { VolunteersType } from "@/types/types";
import Link from "next/link";
import React from "react";

const VolunteersCards = (props: VolunteersType) => {
  return (
    <div className="col-12 col-md-3 mb-4">
      <Link href={`volunteers/${props.id}`}>
        <img src={props.image} alt={props.name} className="border-radius" />
      </Link>
      <div className="content p-3 border-radius bg-white">
        <p>{props.name}</p>
        <span>{props.yearsAndCountry}</span>
      </div>
    </div>
  );
};

export default VolunteersCards;
