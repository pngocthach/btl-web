import Container from "react-bootstrap/esm/Container";
import CustomersTable from "../../components/customersTable";
import AddCustomerModal from "../../components/AddCustomerModal";

import style from "./EditCustomers.module.css";
import { useState } from "react";

function EditCustomers() {
  const [isAddCustomerModalShown, setIsAddCustomerModalShown] = useState(false);

  const handleClose = () => {
    setIsAddCustomerModalShown(false);
  };

  const handleOpen = () => {
    setIsAddCustomerModalShown(true);
  };

  return (
    <>
      <Container>
        <div className={"my-3 " + style.header}>
          <span>Danh sách đăng kiểm</span>
          <button className="btn btn-success" onClick={handleOpen}>
            Tạo đăng kiểm
          </button>
        </div>
        <CustomersTable></CustomersTable>
      </Container>
      <AddCustomerModal
        show={isAddCustomerModalShown}
        handleClose={handleClose}
      ></AddCustomerModal>
    </>
  );
}

export default EditCustomers;
