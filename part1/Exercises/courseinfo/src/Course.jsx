import React from "react";

const Course = ({ course }) => {
    
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <h1>{course.name}</h1>
      <p>
        {course.parts.map((part) => (
          <div key={part.id}>
            <h2>
              {part.name} {part.exercises}
            </h2>
          </div>
        ))}
        The total of exercises is  {total}
      </p>
    </div>
  );
};
export default Course;
