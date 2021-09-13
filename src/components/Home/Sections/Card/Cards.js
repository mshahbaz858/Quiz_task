import React, { useState } from "react";
import "../Card/Card.css";
import Card from "./Card";
function Cards() {
  const [ImagesSmall, setImagesSmall] = useState([1, 2, 3, 4, 5, 6]);
  const renderItems = ImagesSmall.map(img => <Card />);
  return (
    <div className="w-100 px-4 card_main_container">
      <div className="row px-2">
        <div className="col-5 ps-0">
          <div className="py-1">
            <div className="Large_img ">
              <div className="h-100 d-flex justify-content-center align-items-center img_large">
                hahahdh
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="row gx-5 px-1 py-0 small_div small_img_cont">
            {renderItems}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
