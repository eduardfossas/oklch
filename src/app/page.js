"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";

export default function Home() {
  const arr = new Array();
  const raf = useRef();
  arr.length = 1000;

  useEffect(() => {
    let c = 0.1;
    let h = 0;

    const animate = (t) => {
      document.body.style.setProperty("--c", c);
      document.body.style.setProperty("--h", h);
      h += 0.25;

      if (h >= 360) {
        c += 0.01;
        h = 0;
      }
      raf.current = window.requestAnimationFrame(animate);
    };
    raf.current = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <main className={styles.grid}>
      {[...arr].map((el, i) => (
        <div
          key={el}
          className={styles.item}
          style={{ "--var": `${i / 10}%` }}
        ></div>
      ))}
    </main>
  );
}
