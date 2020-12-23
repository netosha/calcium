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
          placeholder="Стелишь триплетам?"
          style={{ marginBottom: 20 }}
        />
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: 40 }}>
            <a>big one</a>
            <Checkbox
              style={{ width: 40, height: 40 }}
              onClick={(e) => setChecked(!checked)}
              checked
              ref={ref}
            />
          </div>
          <div>
            <a>normal size</a>
            <Checkbox onClick={(e) => setChecked(!checked)} checked ref={ref} />
          </div>
        </div>
      </main>
    </div>
  );
}
