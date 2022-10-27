import styles from "./Header.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <h1>
        <span>Mate's amazing</span> Todo-list
      </h1>
    </header>
  );
};

export default Navbar;
