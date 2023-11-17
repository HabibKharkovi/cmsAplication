import { ParameterValue as TParameterValue } from "../api/parameterValue/ParameterValue";

export const PARAMETERVALUE_TITLE_FIELD = "age";

export const ParameterValueTitle = (record: TParameterValue): string => {
  return record.age?.toString() || String(record.id);
};
