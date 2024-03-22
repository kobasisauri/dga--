import { Flex } from "antd";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <Flex className={styles.header}>
      <h1>MY.GOV.GE</h1>
      <Flex className={styles.items}>
        <Flex align="center" style={{ gap: "8px" }}>
          <p>ქართული</p>
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.11606 2.41361L3.70606 5.00361C4.09606 5.39361 4.72606 5.39361 5.11606 5.00361L7.70606 2.41361C8.33606 1.78361 7.88606 0.703613 6.99606 0.703613H1.81606C0.926057 0.703613 0.486057 1.78361 1.11606 2.41361Z"
              fill="#323232"
            />
          </svg>
        </Flex>

        <p>დახმარება</p>
      </Flex>
    </Flex>
  );
};

export default Header;
