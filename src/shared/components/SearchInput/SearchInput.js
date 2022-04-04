import styles from "./SearchInput.module.css";

export const SearchInput = ({ value, onChange }) => {
  return (
    <input
      className={styles.searchInput}
      onChange={onChange}
      value={value}
    />
  );
};
