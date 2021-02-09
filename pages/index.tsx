import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Input from '../components/Input';
import { Checkbox } from '../components';

const variants = {
  hovered: { scale: 1.07 },
};

const Card = ({ children, href, ...rest }) => {
  return (
    <motion.div layout className={styles.card} whileHover="hovered" {...rest}>
      <motion.div variants={variants}>
        <Link href={href}>{children}</Link>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_inner}>
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>{/*<img src="./logo.png" style={{ height: 36 }} />*/}</a>
          </Link>
        </div>
      </header>
      <main className={styles.hero}>
        <div className={styles.wrapper}>
          <Card href="/buttons">
            <Button>Buttons</Button>
          </Card>
          <Card href="/input">
            <Input placeholder="Inputs" />
          </Card>
          <Card href="/checkbox">
            <Checkbox checked />
          </Card>
          <Card href="/checkbox">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 150,
                height: 100,
                background: 'white',
                opacity: 0.5,
                borderRadius: 8,
              }}
            >
              Modal
            </div>
          </Card>
          <Card href="/notifications">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  color: 'white',
                  padding: '8px 16px',
                  background: '#0099ff',
                  borderRadius: 4,
                }}
              >
                Notifications
              </div>
              <div
                style={{
                  marginTop: 12,
                  color: 'white',
                  padding: '8px 16px',
                  background: '#FF3333',
                  borderRadius: 4,
                }}
              >
                Notifications
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
