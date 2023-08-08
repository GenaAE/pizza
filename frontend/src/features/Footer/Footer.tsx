import React from 'react';
import YandexMap from '../Yandex/YandexMap';
import styles from './Footer.module.scss';
function Footer(): JSX.Element {
  return (
    <>
      <YandexMap />
      <div className={styles.footer}>Footer</div>
    </>
  );
}

export default Footer;
