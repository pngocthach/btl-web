import style from "./login.module.css";

import * as React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";

function Login() {
  let body = {
    username: "admin",
    password: "admin",
  };

  function loginCLick() {
    fetch("http://localhost:5000/account/login", {
      method: "POST",
      headers: {
        accept: "application.json",
        "Content-Type": "application/json",
      },
      body: {
        "userName": "admin",
        "password": "admin",
      },
      cache: "default",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <div className={style.login}>
      <div className={style.container}>
        <form>
          <img className={style.image}></img>

          <Stack spacing={2}>
            <TextField
              id="filled-basic"
              label="Tên người dùng"
              variant="filled"
            />
            <TextField
              id="filled-password-input"
              label="Mật khẩu"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <Button variant="contained" onClick={loginCLick}>
              Đăng Nhập
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default Login;
