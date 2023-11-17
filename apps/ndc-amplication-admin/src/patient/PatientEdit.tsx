import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PatientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="age" source="age" />
        <TextInput label="balance" source="balance" />
        <TextInput label="cnic_no" source="cnicNo" />
        <TextInput label="contact_no" source="contactNo" />
        <TextInput label="data" source="data" />
        <TextInput label="discount_percentage" source="discountPercentage" />
        <TextInput label="discount_rupees" source="discountRupees" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="gender" source="gender" />
        <TextInput label="mr_no" source="mrNo" />
        <TextInput label="name" source="name" />
        <TextInput label="paid" source="paid" />
        <TextInput label="password" source="password" />
        <TextInput label="pin_no" source="pinNo" />
        <TextInput label="refer_by" source="referBy" />
        <TextInput label="time" source="time" />
        <TextInput label="total" source="total" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
