import React from 'react'
import EmployeeListItem from './EmployeeListItem'

const employees = [
  { name: "James King", position: "President and CEO" },
  { name: "Julie Taylor", position: "VP of Marketing" },
  { name: "Eugene Lee", position: "CFO" },
  { name: "John Williams", position: "VP of Engineering" },
  { name: "Ray Moore", position: "VP of Sales" },
  { name: "Paul Jones", position: "QA Manager" }
];
function EmployeeList() {
  return (
    <div>
      {employees.map((employee) => (
        <EmployeeListItem key={employee.name} name={employee.name} position={employee.position} />
      ))}
    </div>
  )
}

export default EmployeeList