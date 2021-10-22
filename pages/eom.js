import Toolbar from "../components/Toolbar";
import styles from "../styles/eom.module.css";

export const EOM = ({ employee }) => {
  return (
    <div className={styles.mainEOM}>
      <Toolbar />
      <div className={styles.divInfo}>
        <h1>Employee of the Month</h1>
        <div className="text-center">
          <h3>{employee.Name}</h3>
          <h6 className="mt-1">{employee.Position}</h6>
          <img src={employee.Image} />
          <p>{employee.Description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/hunzalaqamar/News-App-NextJS/employeeOfTheMonth"
  );

  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;
