import style from "./signup.module.css";
// import Button from "../../components/button";

import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";

function Signup() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [province, setProvince] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [ward, setWard] = React.useState("");
  const [specificAddress, setSpecificAddress] = React.useState("");

  function body() {
    return {
      userName: userName,
      password: password,
      center: {
        name: name,
      },
      address: {
        thanhPho: province,
        quan: district,
        phuong: ward,
        chiTiet: specificAddress,
      },
    };
  }

  function signupClick() {
    fetch("http://localhost:5000/account/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlck5hbWUiOiJhZG1pbiIsImlzQWRtaW4iOnRydWUsImNyZWF0ZWRBdCI6IjIwMjMtMDYtMDVUMDg6MzM6NDMuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMDVUMDg6MzM6NDMuMDAwWiIsIlJlZ0NlbnRlcklkIjpudWxsLCJpYXQiOjE2ODY0MjM4NTYsImV4cCI6MTY4OTAxNTg1Nn0.3bI75xRmquZHDtSWyGpkrihFlLyqhfigyosJY6D9ZeM",
      },
      body: JSON.stringify(body()),
      cache: "default",
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  }

  const [state, setState] = React.useState([]);

  const getData = () => {
    fetch("https://provinces.open-api.vn/api/p/")
      .then((response) => response.json())
      .then((data) => setState(data));
  };

  React.useEffect(() => getData(), []);

  const users = state.map((province, key) => {
    <MenuItem>{province.name}</MenuItem>;
  });

  return (
    <div className={style.signup}>
      <form className={style.form}>
        <img className={style.image}></img>
        <Stack direction={"row"} spacing={5} sx={{ m: 4 }}>
          <Stack spacing={3}>
            <TextField
              id="username-input"
              label="Tên người dùng"
              variant="filled"
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              id="password-input"
              label="Mật khẩu"
              type="password"
              autoComplete="current-password"
              variant="filled"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              id="confirm-password-input"
              label="Xác nhận mật khẩu"
              type="password"
              autoComplete="current-password"
              variant="filled"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <TextField
              id="name-input"
              label="Tên trung tâm"
              autoComplete="current-password"
              variant="filled"
              onChange={(e) => setName(e.target.value)}
            />
          </Stack>
          <Stack spacing={3}>
            <FormControl variant="filled">
              <InputLabel id="demo-simple-select-filled-label">Tỉnh</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={(e) => setProvince(e.target.value)}
              >
                {state.map(({ name }, index) => (
                  <MenuItem key={index} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="filled">
              <InputLabel id="demo-simple-select-filled-label">
                Quận/Huyện
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={(e) => setDistrict(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Hà Nội"}>Ten</MenuItem>
                <MenuItem value={"Hà Nội"}>Twenty</MenuItem>
                <MenuItem value={"Hà Nội"}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="filled">
              <InputLabel id="demo-simple-select-filled-label">
                Xã/Phường
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={(e) => setWard(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Hà Nội"}>Ten</MenuItem>
                <MenuItem value={"Hà Nội"}>Twenty</MenuItem>
                <MenuItem value={"Hà Nội"}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="specific-address-input"
              label="Số nhà/Đường"
              autoComplete="current-password"
              variant="filled"
              onChange={(e) => setSpecificAddress(e.target.value)}
            />
          </Stack>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 1,
            m: 1,
          }}
        >
          <Button variant="contained" onClick={signupClick}>
            Tạo tài khoản
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Signup;
