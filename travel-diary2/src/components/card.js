import React from "react";

const Card = (listing) => {
  return (
    <div className="card-cont">
      <div className="card-img-cont">
        <img src={listing.imageUrl} alt="Location" />
      </div>
      <div className="card-info-cont">
        <div className="lct-url-cont">
          <span>{listing.location}</span>
          <span>
            <a target="blank" id="url-tag" href={listing.googleMapsURL}>
              View on Google Maps
            </a>
          </span>
        </div>

        <div className="lct-name-cont">
          <h1>{listing.title}</h1>
        </div>

        <div className="lct-date-cont">
          <h5>
            {listing.startDate} - {listing.endDate}
          </h5>
        </div>

        <div className="lct-desc-cont">
          <p>{listing.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
