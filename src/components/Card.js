import React from "react";

export default function Card({
  name,
  price,
  description,
  nftImg,
  cardColor,
  textColor,
  owner,
  daysLeft,
  profileImg,
}) {
  console.log(name);
  return (
    <div className="Card" style={{ backgroundColor: cardColor }}>
      <div className="NFT_container">
        <img id="NFT" src={nftImg} alt="NFT"></img>
      </div>

      <div className="content">
        <h3 id="title">{name}</h3>

        <p style={{ color: textColor }}>{description}</p>

        <div className="info">
          <div className="stat">
            <img src="../assets/icon-ethereum.svg" alt=""></img>
            <p style={{ color: textColor }}>{price}</p>
          </div>

          <div className="stat">
            <img src="../assets/icon-clock.svg" alt=""></img>
            <p style={{ color: textColor }}>{daysLeft}</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <img id="profile" src={profileImg} alt=""></img>
        <p>
          Creation of <span>{owner}</span>
        </p>
      </div>
    </div>
  );
}
