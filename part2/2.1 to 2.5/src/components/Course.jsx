const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <b>Total of {sum} exercises</b>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {/* <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} /> */}
    {parts.map((parts) => (
      <Part key={parts.id} part={parts} />
    ))}
  </>
);

const Course = ({ course }) => {
  const sum = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={sum} />
    </>
  );
};

export default Course;
