import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Abylay Kazikhanuly <br />
        Barluq qyqiqtar qorqalgan.
      </p>
    </section>
  );
}

export default Footer;
