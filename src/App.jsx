const Header = (props) => (
   <h1>{props.course}</h1>
);


const Part = (props) => (
    <p>
      {props.name}
      <br />
      Units: {props.units}
    </p>
  );

const Content = (props) => (
    <div>
      <hr />
      <Part name={props.part[0].name} units={props.part[0].units} />
      <Part name={props.part[1].name} units={props.part[1].units} />
      <Part name={props.part[2].name} units={props.part[2].units} />
      <hr />
    </div>
  );


const Total = (props) => (
 <p>Total Number of Units:{" "}
  {props.parts[0].units + props.parts[1].units + props.parts[2].units}
  </p>
  );



const Footer = (props) => (
    <footer>
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  );


const App = () => {
  const course = "Bachelor of Science in Information Technology";

  const parts = [
    {
      name: 'Industry Electives',
      units: 3,
    },

    {
      name: 'Data Analytics',
      units: 3,
    },

    {
      name: 'Project Management',
      units: 3,
    },
  ];

  const name = "Jenricsha L. Dilao";
  const courseCode = "CSIT340";
  const section = "G8";

  return (
    <div>
      <Header course={course} />
      <Content part = {parts} />
      <Total parts= {parts} />
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  );
  };


export default App;
