import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import NewHootForm from "../../components/NewHootForm/NewHootForm";
import HootList from "../../components/HootList/HootList";
import { getAll } from "../../utilities/hoots-api";
import styles from './FeedPage.module.scss';

export default function HootFeedPage({ user, setUser }) {
  const [hoots, setHoots] = useState([]);

  useEffect(() => {
    async function fetchHoots() {
      try {
        const data = await getAll();
        setHoots(data);
      } catch (err) {
        console.error("Failed to fetch hoots:", err);
      }
    }
    fetchHoots();
  }, []);

  const addHoot = (hoot) => setHoots((prev) => [hoot, ...prev]);

  return (
    <main className={styles.HootFeedPage}>
      <aside>
        <NavBar user={user} setUser={setUser} />
      </aside>
      <section className={styles.feed}>
        <NewHootForm addHoot={addHoot} />
        <HootList hoots={hoots} />
      </section>
    </main>
  );
}