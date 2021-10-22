import Toolbar from "../components/Toolbar";
import styles from "../styles/eom.module.css";
import Head from "next/head";

export const EOM = ({ employee }) => {
  return (
    <>
      <Head>
        <title>Employee of the Month</title>
        <meta
          name="description"
          content={`This month's employee of the month is ${employee.Name}`}
        />
        <meta property="og:image" content={employee.Image} />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is ${employee.Name}`}
        />
        <meta property="facebook:image" content={employee.Image} />
        <meta property="facebook:title" content="Employee Of The Month" />
        <meta
          property="facebook:description"
          content={`This month's employee of the month is ${employee.Name}`}
        />
      </Head>
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
    </>
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
