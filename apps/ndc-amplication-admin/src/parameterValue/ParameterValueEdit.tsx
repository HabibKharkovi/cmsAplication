import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ParameterValueEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="age" source="age" />
        <TextInput label="age_group" source="ageGroup" />
        <TextInput label="gender" source="gender" />
        <TextInput label="normal_range" source="normalRange" />
        <TextInput label="other" source="other" />
        <TextInput label="unit" source="unit" />
      </SimpleForm>
    </Edit>
  );
};
