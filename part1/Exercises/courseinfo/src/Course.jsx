import React from "react";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p><strong>Total of {total} exercises</strong></p>;
};

const CourseDetails = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Course = ({ course }) => {
  // If course is an array, map through each course
  if (Array.isArray(course)) {
    return (
      <div>
        {course.map(c => (
          <CourseDetails key={c.id} course={c} />
        ))}
      </div>
    );
  } 
  // If course is a single object, render just that course
  else {
    return <CourseDetails course={course} />;
  }
};

export default Course;