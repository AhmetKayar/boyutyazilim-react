import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boyut Yazılım | Danışmanlık Hizmetleri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Boyut Yazılım</h1>

        <p className={styles.description}>Size nasıl yardımcı olabiliriz?</p>

        <div className={styles.grid}>
          <a href="https://boyutyazilim.net" className={styles.card}>
            <h3>Documentation</h3>
            <p>Nextjs Örnek Uygulamasdır</p>
          </a>
        </div>
      </main>
    </div>
  );
}
