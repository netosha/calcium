import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button, Checkbox, Input, Modal } from '../components';

export default function Home() {
  const ref = React.useRef<null | React.ElementRef<'div'>>(null);
  const [checked, setChecked] = React.useState<boolean>(true);
  const [isModalVisible, setModalVisible] = React.useState<boolean>(false);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div>
            <Button>Test</Button>
          </div>
          <Input placeholder="Стелишь триплетам?" />
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: 40 }}>
              <Checkbox
                style={{ width: 40, height: 40 }}
                onClick={(e) => setChecked(!checked)}
                checked
                ref={ref}
              />
            </div>
            <div>
              <Checkbox />
            </div>
          </div>
          <Button onClick={() => setModalVisible(true)}>toggle modal</Button>
          <Modal
            isOpen={isModalVisible}
            onClose={() => setModalVisible(false)}
            title="Test text"
            style={{ maxWidth: 600 }}
          >
            lox
          </Modal>
        </main>
      </div>
    </>
  );
}
