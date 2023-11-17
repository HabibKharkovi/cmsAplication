import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ParameterValueCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="age" source="age" />
        <TextInput label="age_group" source="ageGroup" />
        <TextInput label="gender" source="gender" />
        <TextInput label="normal_range" source="normalRange" />
        <TextInput label="other" source="other" />
        <TextInput label="unit" source="unit" />
      </SimpleForm>
    </Create>
  );
};
