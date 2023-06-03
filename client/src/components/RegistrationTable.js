import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";

function createData(
  registrationDate,
  centerCode,
  centerName,
  carPlate,
  ownerId
) {
  return {
    registrationDate,
    centerCode,
    centerName,
    carPlate,
    ownerId,
    carDetails: [
      {
        carCompany: "Honda",
        carName: "HR-V 1.5 RS Đen",
        pickUpDate: "2023-04-16",
        carVIN: "19UUA65604L000000",
        carEN: "L15A1234567",
        purpose: "Xe tư nhân",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.registrationDate}
        </TableCell>
        <TableCell align="right">{row.centerCode}</TableCell>
        <TableCell align="right">{row.centerName}</TableCell>
        <TableCell align="right">{row.carPlate}</TableCell>
        <TableCell align="right">{row.ownerId}</TableCell>
        <TableCell align="right">
          <IconButton aria-label="edit" size="medium">
            <EditIcon fontSize="inherit" />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                <b>Thông tin chi tiết về xe</b>
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Hãng xe</b>
                    </TableCell>
                    <TableCell>
                      <b>Tên xe</b>
                    </TableCell>
                    <TableCell>
                      <b>Ngày cấp xe</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Số khung</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Số máy</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Mục đích sử dụng</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.carDetails.map((carDetailsRow) => (
                    <TableRow key={carDetailsRow.carVIN}>
                      <TableCell component="th" scope="row">
                        {carDetailsRow.carCompany}
                      </TableCell>
                      <TableCell>{carDetailsRow.carName}</TableCell>
                      <TableCell>{carDetailsRow.pickUpDate}</TableCell>
                      <TableCell align="right">
                        {carDetailsRow.carVIN}
                      </TableCell>
                      <TableCell align="right">{carDetailsRow.carEN}</TableCell>
                      <TableCell align="right">
                        {carDetailsRow.purpose}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    registrationDate: PropTypes.string.isRequired,
    centerCode: PropTypes.string.isRequired,
    centerName: PropTypes.string.isRequired,
    carPlate: PropTypes.string.isRequired,
    ownerId: PropTypes.string.isRequired,
    carDetails: PropTypes.arrayOf(
      PropTypes.shape({
        carName: PropTypes.string.isRequired,
        carCompany: PropTypes.string.isRequired,
        pickUpDate: PropTypes.string.isRequired,
        carVIN: PropTypes.string.isRequired,
        carEN: PropTypes.string.isRequired,
        purpose: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData("2023-01-23", "ct01", "TTĐK Hà Nội", "51A-1234", "3312344567"),
  createData("2023-01-16", "ct02", "TTĐK Thanh Hóa", "80G-9733", "7723477811"),
  createData("2023-01-30", "ct03", "TTĐK Bắc Ninh", "51B-01234", "1312284567"),
  createData("2023-01-09", "ct04", "TTĐK Nghệ An", "TP-12345", "6812344602"),
  createData("2023-01-03", "ct05", "TTĐK Hà Tĩnh", "68A80", "2956744563"),
];

export default function RegistrationTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <b>Ngày đăng kiểm</b>
            </TableCell>
            <TableCell align="right">
              <b>Mã trung tâm</b>
            </TableCell>
            <TableCell align="right">
              <b>Tên trung tâm</b>
            </TableCell>
            <TableCell align="right">
              <b>Biển số xe</b>
            </TableCell>
            <TableCell align="right">
              <b>CMND/CCCD chủ xe</b>
            </TableCell>
            <TableCell align="right">
              <b>Chỉnh sửa</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
