import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        image: "",
        name: "Leanne Graham",
        skill: "Java Dev",
        gender: "Male",
        teamName: "TeamA",
      },

      {
        id: 2,
        name: "Ervin Howell",
        skill: "Python Dev",
        gender: "Male",
        teamName: "TeamA",
      },

      {
        id: 3,
        name: "Clementine",
        skill: "Node JS",
        gender: "Female",
        teamName: "TeamB",
      },

      {
        id: 4,
        name: "Patricia",
        skill: "Vue Dev",
        gender: "Female",
        teamName: "TeamA",
      },

      {
        id: 5,
        name: "Dietrich",
        skill: "Angular Dev",
        gender: "Male",
        teamName: "TeamC",
      },

      {
        id: 6,
        name: "Mrs. Dennis",
        skill: "React Dev",
        gender: "Female",
        teamName: "TeamC",
      },

      {
        id: 7,
        name: "Kurtis",
        skill: "Django",
        gender: "Male",
        teamName: "TeamA",
      },

      {
        id: 8,
        name: "Nicholas",
        skill: "SQL",
        gender: "Male",
        teamName: "TeamB",
      },

      {
        id: 9,
        name: "Glenna",
        skill: "React Dev",
        gender: "Female",
        teamName: "TeamC",
      },

      {
        id: 10,
        name: "Clementina DuBuque",
        skill: "Python",
        gender: "Male",
        teamName: "TeamD",
      },

      {
        id: 11,
        name: "Kevin",
        skill: "Java Dev",
        gender: "Male",
        teamName: "TeamC",
      },

      {
        id: 12,
        name: "Elena",
        skill: "Json",
        gender: "Female",
        teamName: "TeamD",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);


  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }


  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
    ? employee.teamName === selectedTeam ? {...employee, teamName: ''}
    : {...employee, teamName: selectedTeam } : employee);

    setEmployees(transformedEmployees);
  }

  return <DataContext.Provider value={{
    employees, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick, setTeam
  }}>
    {children}
  </DataContext.Provider>

  
};

export default DataContext;
