import LoginScreen from "@/components/LoginScreen";
import styles from "./page.module.css";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  if (isLoggedIn) {
    redirect("/dashboard/admin");
  }

  return (
    !isLoggedIn && (
      <main className={styles.main}>
        <LoginScreen />
      </main>
    )
  );
};

export default Dashboard;
