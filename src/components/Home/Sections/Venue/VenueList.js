import React from "react";
import { Button } from "react-bootstrap";

function VenueList(props) {
  const { venueList, VenueChanged } = props;

  return (
    venueList &&
    venueList.map(venue => (
      <div className="d-flex justify-content-between mb-2">
        {
          <div className="bg-primary py-1 w-25 d-flex justify-content-center">
            <button
              className="py-2 border-0 bg-transparent d-flex justify-content-center"
              onClick={() => VenueChanged(venue.index)}
            >
              {venue.day}
            </button>
          </div>
        }
      </div>
    ))
  );
}

export default VenueList;
