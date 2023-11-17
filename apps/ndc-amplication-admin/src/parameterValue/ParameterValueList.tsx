import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ParameterValueList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"parameter-values"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="age" source="age" />
        <TextField label="age_group" source="ageGroup" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="normal_range" source="normalRange" />
        <TextField label="other" source="other" />
        <TextField label="unit" source="unit" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
