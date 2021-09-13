import React, { useState } from "react";
import VenueList from "./VenueList";

function Venue() {
  const [venuelist, setVenuelist] = useState([
    {
      index: 0,
      day: "MONDAY",
      isActive: false,
    },
    {
      index: 1,
      day: "TUESDAY",
      isActive: false,
    },
    {
      index: 2,
      day: "WEDNESDAY",
      isActive: false,
    },
    {
      index: 3,
      day: "TUESDAY",
      isActive: false,
    },
    {
      index: 4,
      day: "FRIDAY",
      isActive: false,
    },
    {
      index: 5,
      day: "SATURDAY",
      isActive: false,
    },
    {
      index: 6,
      day: "SUNDAY",
      isActive: false,
    },
  ]);
  const [selected, setSelected] = useState([]);
  const VenueChanged = async seleterdIndex => {
    var checkIfexist = selected.some(item => item === seleterdIndex);
    if (checkIfexist) {
      let a = selected.filter(item => item === seleterdIndex);
      setSelected(selected => [...selected, a]);

      console.log(" selected ", selected);
      console.log(" venuelist ", venuelist);
    } else {
      setSelected(selected => [...selected, seleterdIndex]);
      //   let tempvenuelist = [...venuelist];
      //   let objtemp = { ...tempvenuelist[seleterdIndex] };
      //   objtemp.isActive(true);

      console.log(" selected ", selected);
      console.log(" venuelist ", venuelist);
    }
  };
  return (
    <div className="w-100 Venue_area mt-3">
      <VenueList venueList={venuelist} VenueChanged={VenueChanged} />
    </div>
  );
}

export default Venue;
