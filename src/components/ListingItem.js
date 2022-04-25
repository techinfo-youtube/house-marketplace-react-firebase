import React from "react";
import { Link } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import "../styles/listingitem.css";
const ListingItem = ({ listing, id, onDelete, onEdit }) => {
  return (
    <>
      <div className="card-item-parent d-flex align-items-center justify-content-center">
        <div className="item-card category-link mb-2 w-75  ">
          <Link to={`/category/${listing.type}/${id}`}>
            <div className="row  p-2">
              <div className="col-md-5 item-card-continer1">
                <img src={listing.imgUrls[0]} alt={listing.name} />
              </div>
              <div className="col-md-5 item-card-continer2">
                <h2>{listing.name}</h2>
                <p>{listing.location}</p>
                <p>
                  <GiTakeMyMoney /> RS :{" "}
                  {listing.offer
                    ? listing.discountedPrice
                    : listing.regularPrice}{" "}
                  {listing.type === "rent" && " / Month"}
                </p>
                <p>
                  <FaBed /> &nbsp;
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} Bedrooms`
                    : "1 Bedreoom"}
                </p>
                <p>
                  <FaBath /> &nbsp;
                  {listing.bathrooms > 1
                    ? `${listing.bathrooms} Bathrooms`
                    : "1 Bathroom"}
                </p>
              </div>
            </div>
          </Link>
          <div className="m-2 p-3">
            {onDelete && (
              <button
                className="btn btn-danger"
                onClick={() => onDelete(listing.id)}
              >
                Delete Listing
              </button>
            )}
            {onEdit && (
              <button
                className="btn btn-info ms-3"
                onClick={() => onEdit(listing.id)}
              >
                Edit Listing
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingItem;
