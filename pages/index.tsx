import React from 'react';
import styles from '../styles/Home.module.css';
import { Button, Input } from '../components';

export default function Home() {
  const ref = React.useRef(null);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Button>test</Button>
        <Input style={{marginTop: 12}} placeholder="lox" />
      </main>
    </div>
  );
}
