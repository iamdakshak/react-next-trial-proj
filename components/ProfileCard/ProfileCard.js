import Image from "next/image";
// export const ProfileCard = ({ cardData }) => {
//   console.log("cardData : ", cardData);
//   return <div>{cardData?.name}</div>;
// };

// export default ProfileCard;

import React from "react";

const ProfileCard = ({ cardData }) => {
  const { name, email, id } = cardData;
  let randomNo = Math.floor(Math.random() * 11);
  // const {name, email, id} = props; /*This can also be used if we use 'props' in braces above instead of name,email,id*/
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      {/* <img src={`https://robohash.org/${id}`} alt="Robots" /> */}
      <Image
        src={`https://joeschmoe.io/api/v1/${name}`}
        // src={`https://robohash.org/${name}-${randomNo}`}
        height={200}
        width={200}
        alt={name}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
