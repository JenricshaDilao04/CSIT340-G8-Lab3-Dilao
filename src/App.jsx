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

      <Part name={props.part1.name} units={props.part1.units} />
      <Part name={props.part2.name} units={props.part2.units} />
      <Part name={props.part3.name} units={props.part3.units} />

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

  const part1 = {
    name: 'Industry Electives',
    units: 3
  }

    const part2 = {
    name: 'Data Analytics',
    units: 3
  }

  const part3 = {
    name: 'Project Management',
    units: 3
  }

  const name = "Jenricsha L. Dilao";
  const courseCode = "CSIT340";
  const section = "G8";

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total total={part1.units + part2.units + part3.units} />

      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  );
  }


export default App;
