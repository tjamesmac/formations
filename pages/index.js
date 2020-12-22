import { useState } from "react";
import Head from "next/head";
import Deck from "../components/deck/index.tsx";
import Box from "../components/box/index.tsx";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [cards, addBox] = useState([]);

  function clickHandler() {
    if (cards.length < 20) addBox(() => [...cards, <Box x={50} y={100} />]);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Formations</h1>
        <button onClick={clickHandler}>+</button>
        {cards.length > 0 && cards.map((box) => box)}
      </main>
      <Deck cards={cards} />
      <footer className={styles.footer}>Powered by Skaven - yes yes</footer>
    </div>
  );
}
