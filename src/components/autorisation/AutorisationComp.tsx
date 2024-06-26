import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Input, Typography, Checkbox, Button } from "antd";
import { auth } from "../../services/auth";
import { loginType } from "../../types/user";

import styles from "./AuthorisationComp.module.scss";

const AutorisationComp = () => {
  const [values, setValues] = useState<loginType>({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const submit = () => {
    auth(values)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/home");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  <div style={{ display: "flex" }}></div>;
  return (
    <Flex className={styles.container} vertical align="center">
      <h2 className={styles.headline}>ავტორიზაცია</h2>

      <Flex vertical className={styles.wrapper} align="center">
        <svg
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" width="48" height="48" rx="10" fill="#F5F8FF" />
          <g clipPath="url(#clip0_2724_697)">
            <path
              d="M24.5 17.9C25.66 17.9 26.6 18.84 26.6 20C26.6 21.16 25.66 22.1 24.5 22.1C23.34 22.1 22.4 21.16 22.4 20C22.4 18.84 23.34 17.9 24.5 17.9ZM24.5 26.9C27.47 26.9 30.6 28.36 30.6 29V30.1H18.4V29C18.4 28.36 21.53 26.9 24.5 26.9ZM24.5 16C22.29 16 20.5 17.79 20.5 20C20.5 22.21 22.29 24 24.5 24C26.71 24 28.5 22.21 28.5 20C28.5 17.79 26.71 16 24.5 16ZM24.5 25C21.83 25 16.5 26.34 16.5 29V31C16.5 31.55 16.95 32 17.5 32H31.5C32.05 32 32.5 31.55 32.5 31V29C32.5 26.34 27.17 25 24.5 25Z"
              fill="#1F5EDD"
            />
          </g>
          <defs>
            <clipPath id="clip0_2724_697">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(12.5 12)"
              />
            </clipPath>
          </defs>
        </svg>
        <h6>სახელით და პაროლით</h6>
        <p>ავტორიზაციისთვის გთხოვთ გამოიყენოთ თქვენი MY.GOV.GE_ის ანგარიში</p>

        <Flex vertical style={{ textAlign: "start", width: "100%", gap: 24 }}>
          <div>
            <Typography.Title style={{ fontSize: "14px", fontWeight: 400 }}>
              მომხმარებელი
            </Typography.Title>
            <Input
              placeholder="ელ.ფოსტა ან მობილური"
              value={values.username}
              onChange={(e) =>
                setValues((state) => ({ ...state, username: e.target.value }))
              }
            />
          </div>

          <div>
            <Typography.Title style={{ fontSize: "14px", fontWeight: 400 }}>
              პაროლი
            </Typography.Title>
            <Input
              placeholder="პაროლი"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={(e) =>
                setValues((state) => ({ ...state, password: e.target.value }))
              }
            />
          </div>

          <Checkbox
            style={{ fontSize: "14px", color: "#474747" }}
            onChange={() => setShowPassword((state) => !state)}
          >
            მაჩვენე პაროლი
          </Checkbox>
        </Flex>
        <Button onClick={submit} className={styles.button} type="primary">
          შესვლა
        </Button>
      </Flex>
    </Flex>
  );
};

export default AutorisationComp;
