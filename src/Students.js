import React from "react";
import { Link } from "react-router-dom";

export default function Students({ students }) {
  console.log(students);
  return (
    <div>
      <h1>All the Students: </h1>
      {students?.map((student) => {
        return (
          <p>
            <Link to={`${student.login.uuid}`}>
              {student.name.title} {student.name.first} {student.name.last}
            </Link>
          </p>
        );
      })}
    </div>
  );
}
