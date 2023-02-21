import React from "react";
import TeamMembers from "./TeamMembers";
import "./style.css";
import Teams from "./Teams";

const Employees = () => {
  return (
    <div className="content">
      <div className="row">
        <div className="col-6">
          <Teams />
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
