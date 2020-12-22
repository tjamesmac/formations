import { useState } from "react";
import styles from "./index.module.css";

interface BoxProps {
  x: number;
  y: number;
}

export default function Box({ x, y }: BoxProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [isDrag, setIsDrag] = useState(false);
  const [position, setPosition] = useState({ x, y });

  function handleMouseMove(e): void {
    if (isDrag && !isEdit) setPosition({ x: e.clientX, y: e.clientY });
  }

  function handleContextMenu(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
  }

  return (
    <>
      {isEdit && (
        <button
          style={{ top: position.y - 100, left: position.x }}
          className={styles.button}
        >
          rotate
        </button>
      )}
      <div
        style={{ top: position.y - 10, left: position.x - 32 }}
        className={isEdit ? styles.editBox : styles.box}
        onMouseDown={() => setIsDrag(true)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={() => setIsDrag(false)}
        onContextMenu={(e) => handleContextMenu(e)}
        onBlur={() => setIsEdit(false)}
      >
        I am a box
      </div>
    </>
  );
}
