import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ParameterValueWhereInput = {
  age?: StringNullableFilter;
  ageGroup?: StringNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  normalRange?: StringNullableFilter;
  other?: StringNullableFilter;
  unit?: StringNullableFilter;
};
