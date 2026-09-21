const Header = (props) => {
  return <h1>{props.course}</h1>;
};

/**const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
} */

const Part = (props) => {
  return (
    <p>
      {props.name}
      <br />
      Units: {props.units}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <hr />

      <Part name={props.subject1} units={props.units1} />
      <Part name={props.subject2} units={props.units2} />
      <Part name={props.subject3} units={props.units3} />

      <hr />
    </div>
  );
};

const Total = (props) => {
  return <p>Total Number of Units: {props.total}</p>;
};

const Footer = (props) => {
  return (
    <footer>
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  );
};

const App = () => {
  const course = "Bachelor of Science in Information Technology";

  const subject1 = "Industry Electives";
  const units1 = 3;

  const subject2 = "Data Analytics";
  const units2 = 3;

  const subject3 = "Project Management";
  const units3 = 3;

  const name = "Jenricsha L. Dilao";
  const courseCode = "CSIT340";
  const section = "G8";

  return (
    <div>
      <Header course={course} />

      <Content
        subject1={subject1}
        units1={units1}
        subject2={subject2}
        units2={units2}
        subject3={subject3}
        units3={units3}
      />

      <Total total={units1 + units2 + units3} />

      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  );
};

export default App;
