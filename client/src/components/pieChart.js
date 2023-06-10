import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useState } from "react";
import { registrationCenterData } from "../sampleData/sampleData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function PieChart() {
  const [centerData, setCenterData] = useState({
    labels: registrationCenterData.map((data) => data.name),
    datasets: [
      {
        label: "Số lượng khách hàng",
        data: registrationCenterData.map((data) => data.customer),
        backgroundColor: ["#12CBC4", "#1289A7", "#0652DD", "#1B1464"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  function createData(carPlate, ownerId, registrationDate, expirationDate) {
    return { carPlate, ownerId, registrationDate, expirationDate };
  }

  const rows = [
    createData("51A-1234", "3312344567", "2023-01-23", "2025-01-23"),
    createData("80G-9733", "7723477811", "2023-01-18", "2025-01-18"),
    createData("51B-01234", "1312284567", "2023-01-05", "2025-01-05"),
    createData("TP-12345", "6812344602", "2023-01-05", "2025-01-05"),
    createData("68A80", "2956744563", "2023-01-29", "2025-01-29"),
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ width: 500 }}>
      <Pie data={centerData} id="pieChart" onDoubleClick={handleOpen}></Pie>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>Bảng dự đoán xe đăng kiểm trong tháng</b>
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Biển số xe</b>
                  </TableCell>
                  <TableCell>
                    <b>CMND/CCCD chủ xe</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Ngày đăng kiểm</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Ngày hết hạn</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.carPlate}
                    </TableCell>
                    <TableCell>{row.ownerId}</TableCell>
                    <TableCell align="right">{row.registrationDate}</TableCell>
                    <TableCell align="right">{row.expirationDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
}

export default PieChart;
