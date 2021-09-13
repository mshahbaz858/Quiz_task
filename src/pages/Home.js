import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../components/Home/Home.css";
import BannerIMG from "../Assets/home_banner.jpg";
import Heading1 from "../reusableComponents/Headings/Heading1";
import Venue from "../components/Home/Sections/Venue/Venue";
function Home() {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="home_area w-100">
      <div className="home_outer_container text-white">
        <div className="home_inner_container w-100">
          <div
            className="d-flex justify-content-center align-content-center align-items-center  w-100 vh-100"
            style={{ position: "relative" }}
          >
            <div
              className="Home_outerContent w-100"
              style={{ position: "absolute", top: "30px" }}
            >
              <div className=" Home_inner_area ">
                <div className="d-flex flex-column bg-white text-dark p-5 w-100 Home_inner_content">
                  <div className="d-flex flex-column">
                    <Heading1
                      color="black"
                      size="23px"
                      weight="700"
                      marginBottom="13px"
                      SMsize="16px"
                      JFcontent="flex-start"
                    >
                      List Your Venue
                    </Heading1>
                    <Heading1
                      color="black"
                      size="18px"
                      weight="500"
                      SMsize="13px"
                      className="text-muted"
                      JFcontent="flex-start"
                    >
                      2 - Venue Opening Times
                    </Heading1>
                  </div>
                  <div className="d-flex justify-content-end w-100">
                    <div className="p-4 hint-area">
                      <Heading1
                        color="black"
                        size="15px"
                        weight="400"
                        marginBottom="0px"
                        SMsize="12px"
                        JFcontent="center"
                        className=""
                        width="auto"
                        style={{ display: "block" }}
                      >
                        <span className="" style={{ fontWeight: "900" }}>
                          Hint!
                        </span>{" "}
                        These are your Venue opening hours, you can set the
                        quentity and availibility of each workspace Type later
                        when create each Workspace.
                      </Heading1>
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="w-100">
                      <Heading1
                        color="black"
                        size="17px"
                        weight="700"
                        marginBottom="0px"
                        SMsize="12px"
                        JFcontent="flex-start"
                        className="text-muted"
                        width="auto"
                        style={{ display: "block" }}
                      >
                        Click on a day to toggle Open/closed.
                      </Heading1>
                    </div>
                  </div>
                  <Venue />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
