import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TableCell } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import RegistrationTable from "../../components/RegistrationTable";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  ml: 28,
  mr: 28,
  mt: 2,
};

function ModalCreate() {
  var abc = true;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleProvinceChange = (event) => {
    if (event.target.value !== "") {
      // document.getElementById("demo-simple-select-filled").setAttribute(disabled=false);
    }
  };
  const handleDistrictChange = (event) => {};
  const handleWardChange = (event) => {};

  return (
    <div>
      <Button
        variant="contained"
        sx={{ my: 5 }}
        onClick={handleOpen}
        startIcon={<AddCircleIcon />}
      >
        Tạo đơn đăng kiểm
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>Đơn đăng kiểm</b>
          </Typography>
          <Stack direction="row" spacing={2}>
            <Stack spacing={2}>
              <TableCell>
                <b>Thông tin đăng kiểm</b>
              </TableCell>
              <TextField
                id="filled-basic"
                label="CMND/CCCD chủ xe"
                variant="filled"
              />
              <TextField
                id="filled-basic"
                label="Biển số xe đăng kiểm"
                variant="filled"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Ngày đăng kiểm" />
              </LocalizationProvider>
            </Stack>
            <Stack spacing={2}>
              <TableCell>
                <b>Thông tin xe</b>
              </TableCell>
              <TextField id="filled-basic" label="Hãng xe" variant="filled" />
              <TextField id="filled-basic" label="Tên xe" variant="filled" />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Ngày cấp xe" />
              </LocalizationProvider>
              <TextField id="filled-basic" label="Số khung" variant="filled" />
              <TextField id="filled-basic" label="Số máy" variant="filled" />
              <TextField
                id="filled-basic"
                label="Mục đích sử dụng"
                variant="filled"
              />
            </Stack>
            <Stack spacing={2}>
              <TableCell>
                <b>Thông tin chủ</b>
              </TableCell>
              <TextField id="filled-basic" label="Họ" variant="filled" />
              <TextField id="filled-basic" label="Tên" variant="filled" />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Ngày sinh" />
              </LocalizationProvider>
              <TextField id="filled-basic" label="SĐT" variant="filled" />
              <FormControl variant="filled">
                <InputLabel id="demo-simple-select-filled-label">
                  Tỉnh
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Hà Nội"}>Hà Nội</MenuItem>
                  <MenuItem value={"Thanh Hóa"}>Thanh Hóa</MenuItem>
                  <MenuItem value={"Bắc Ninh"}>Bắc Ninh</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="filled">
                <InputLabel id="demo-simple-select-filled-label">
                  Quận/Huyện
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  disabled
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Nam Từ Liêm"}>Nam Từ Liêm</MenuItem>
                  <MenuItem value={"Hoằng Hóa"}>Hoằng Hóa</MenuItem>
                  <MenuItem value={"Bắc Linh"}>Bắc Linh</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="filled">
                <InputLabel id="demo-simple-select-filled-label">
                  Xã/Phường
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  disabled
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Mỹ Đình 1"}>Mỹ Đình 1</MenuItem>
                  <MenuItem value={"Hoằng Hóa"}>Hoằng Hóa</MenuItem>
                  <MenuItem value={"Nắc Linh"}>Nắc Linh</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="filled-basic"
                label="Địa chỉ cụ thể"
                variant="filled"
              />
            </Stack>
          </Stack>
          <Stack>
            <Button
              variant="contained"
              sx={buttonStyle}
              startIcon={<AddCircleIcon />}
            >
              Tạo đơn đăng kiểm
            </Button>
          </Stack>
        </Container>
      </Modal>
    </div>
  );
}

function Registration() {
  return (
    <>
      <Container fixed>
        <ModalCreate></ModalCreate>
        <RegistrationTable></RegistrationTable>
      </Container>
    </>
  );
}

export default Registration;
