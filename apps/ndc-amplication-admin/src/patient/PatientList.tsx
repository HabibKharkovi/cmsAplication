import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PatientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"patients"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="age" source="age" />
        <TextField label="balance" source="balance" />
        <TextField label="cnic_no" source="cnicNo" />
        <TextField label="contact_no" source="contactNo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="data" source="data" />
        <TextField label="discount_percentage" source="discountPercentage" />
        <TextField label="discount_rupees" source="discountRupees" />
        <TextField label="email" source="email" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="mr_no" source="mrNo" />
        <TextField label="name" source="name" />
        <TextField label="paid" source="paid" />
        <TextField label="password" source="password" />
        <TextField label="pin_no" source="pinNo" />
        <TextField label="refer_by" source="referBy" />
        <TextField label="time" source="time" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
      </Datagrid>
    </List>
  );
};
