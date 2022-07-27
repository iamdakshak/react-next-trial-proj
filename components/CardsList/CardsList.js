import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
// import Cards from "./Cards";
import Link from "next/link";

const CardList = ({ cardData }) => {
  const { name, email, id } = cardData;

  return (
    <div>
      {cardData.map((user, i) => {
        return (
          // <Link key={i} href="/ViewProfile/:id">
          <Link key={i} href={`/ViewProfile/${user?.id}`}>
            <a>
              <ProfileCard cardData={user} />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;
