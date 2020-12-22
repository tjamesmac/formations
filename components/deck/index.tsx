import styles from "./index.module.css";
interface DeckProps {
  cards: JSX.Element[];
}
export default function Deck({ cards }: DeckProps) {
  return (
    cards.length > 0 && (
      <nav className={styles.container}>
        Cards displayed here like in total war
      </nav>
    )
  );
}
