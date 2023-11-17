import { ParameterResult as TParameterResult } from "../api/parameterResult/ParameterResult";

export const PARAMETERRESULT_TITLE_FIELD = "value";

export const ParameterResultTitle = (record: TParameterResult): string => {
  return record.value?.toString() || String(record.id);
};
