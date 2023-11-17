import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const LabTestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="comment" source="comment" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <TextInput label="reporting-time" source="reportingTime" />
      </SimpleForm>
    </Create>
  );
};
