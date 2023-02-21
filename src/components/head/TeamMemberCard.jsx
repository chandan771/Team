import React from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";
import DataContext from './DataContext'
import { useContext } from "react";

const TeamMemberCard = ({
  employee,
}) => {

  const { handleEmployeeCardClick, selectedTeam } = useContext(DataContext);

  return (
    <>
      <div
        id={employee.id}
        onClick={handleEmployeeCardClick}
        style={{ cursor: "pointer" }}
        className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')}
      >
        {/* <img src={femaleProfile} alt="" className="card_img_top" /> */}

        {employee.gender === "Male" ? (
          <img src={maleProfile} alt="" className="card_img_top" />
        ) : (
          <img src={femaleProfile} alt="" className="card_img_top" />
        )}

        <div className="card_body">
          <h5 className="card_title">Full Name: {employee.name}</h5>
          <p className="card_text">
            <b>skill:</b> {employee.skill}
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMemberCard;
