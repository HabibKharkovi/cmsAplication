import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const LabTestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="comment" source="comment" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <TextInput label="reporting-time" source="reportingTime" />
      </SimpleForm>
    </Edit>
  );
};
