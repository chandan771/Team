import React, { useContext } from "react";
import "./style.css";
import DataContext from "./DataContext";

const Header = () => {
  const { employees, selectedTeam } = useContext(DataContext);
  const teamMemberCount = employees.filter(
    (employee) => employee.teamName === selectedTeam
  ).length;

  return (
    <div>
      {/* <div className="container">
        <div>Home</div>
        <div>Services</div>
        <div>Investors</div>
        <div>Career</div>
      </div> */}

      <header className="container">
        <div className="row justify-content-center mt-3 mb-4">
          <div className="col-8">
            <h1>Team Member Allocation</h1>
            <h3>
              {selectedTeam} has {teamMemberCount} {teamMemberCount} Members
            </h3>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
