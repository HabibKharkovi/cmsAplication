import { ParameterValueWhereInput } from "./ParameterValueWhereInput";
import { ParameterValueOrderByInput } from "./ParameterValueOrderByInput";

export type ParameterValueFindManyArgs = {
  where?: ParameterValueWhereInput;
  orderBy?: Array<ParameterValueOrderByInput>;
  skip?: number;
  take?: number;
};
