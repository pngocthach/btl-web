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

import RegistrationTable from "../../components/RegistrationTable";
import { TableCell } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        sx={{ my: 5 }}
        onClick={handleOpen}
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
            <b>Thông Tin Đăng Kiểm</b>
          </Typography>
          <Stack direction="row" spacing={2}>
            <Stack spacing={2}>
              <TableCell>
                <b>Thông tin xe</b>
              </TableCell>
              <TextField
                id="filled-basic"
                label="Ngày đăng kiểm"
                variant="filled"
              />
              <TextField
                id="filled-basic"
                label="Biển số xe"
                variant="filled"
              />
              <TextField id="filled-basic" label="Hãng xe" variant="filled" />
              <TextField id="filled-basic" label="Tên xe" variant="filled" />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider>
              <TextField
                id="filled-basic"
                label="Biển số xe"
                variant="filled"
              />
            </Stack>
            <Stack spacing={2}>
              <TableCell>
                <b>Thông tin chủ</b>
              </TableCell>
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <TextField id="filled-basic" label="Filled" variant="filled" />
            </Stack>
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
        <BasicModal></BasicModal>
        <RegistrationTable></RegistrationTable>
      </Container>
    </>
  );
}

export default Registration;
