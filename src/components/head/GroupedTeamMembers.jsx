import React, { useContext, useState } from "react";
import DataContext from "./DataContext";


const GroupedTeamMembers = () => {

  const { employees, selectedTeam, setTeam } = useContext(DataContext);
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];

    var teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    var teamA = {
      team: "teamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    var teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    var teamB = {
      team: "teamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    var teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    var teamC = {
      team: "teamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);

    var teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    var teamD = {
      team: "teamD",
      members: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {
    var newGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? {
            ...groupedData,
            collapsed: !groupedData.collapsed,
          }
        : groupedData
    );

    setGroupedData(newGroupData);
    setTeam(event.currentTarget.id);
  }

  return (
    <div>
      <div className="container">
        {groupedEmployees.map((item) => {
          return (
            <div
              key={item.team}
              className="card mt-2"
              style={{ cursor: "pointer" }}
            >
              <h4
                id={item.team}
                className="card-header text-secondary bg-white"
                onClick={handleTeamClick}
              >
                Team Name: {item.team}
              </h4>

              <div
                id={"collapse_" + item.team}
                className={item.collapsed === true ? "collapsed" : ""}
              >
                <hr />
                {item.members.map((member) => {
                  return (
                    <div key={member.id} className="mt-2">
                      <h5 className="card-title mt-2">
                        <span className="text-dark">
                          Full Name: {member.fullName}
                        </span>
                      </h5>

                      <p><b>Skills:</b> {member.skill}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupedTeamMembers;
