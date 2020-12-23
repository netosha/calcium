import React from 'react';
import styles from '../styles/Home.module.css';
import { Button, Checkbox, Input } from '../components';

export default function Home() {
  const ref = React.useRef<null | React.ElementRef<'input'>>(null);
  const [checked, setChecked] = React.useState<boolean>(true);
  React.useEffect(() => {
    console.log(ref.current?.checked);
  }, [ref.current]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Button
          onClick={(e) => {
            console.log(ref.current.checked);
          }}
          style={{ marginBottom: 20 }}
        >
          Test
        </Button>
        <Input
          placeholder="Стелишь триплетам? Легко (о)"
          style={{ marginBottom: 20, width: 400 }}
        />
        <Checkbox
          style={{width: 40, height: 40}}
          onClick={(e) => setChecked(!checked)}
          checked
          ref={ref}
        />
      </main>
    </div>
  );
}
