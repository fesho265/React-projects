import { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import { getCabins } from "../services/apiCabins";

import CreateCabinForm from "../features/cabins/CreateCabinForm";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm((prev) => !prev)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
