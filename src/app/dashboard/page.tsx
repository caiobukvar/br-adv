import LoginScreen from "@/components/LoginScreen";
import styles from "./page.module.css";

const Dashboard = async () => {
  return (
    <main className={styles.main}>
      <LoginScreen />
    </main>
  );
};

export default Dashboard;
