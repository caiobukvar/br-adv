import { Heading } from "@chakra-ui/react";
import styles from "./page.module.css";
import LoginScreen from "@/components/LoginScreen";

const Dashboard = async () => {
  return (
    <main className={styles.main}>
      <Heading>Dashboard</Heading>

      <LoginScreen />

      {/* se user autenticado, mostar componente de criação de posts */}
    </main>
  );
};

export default Dashboard;
