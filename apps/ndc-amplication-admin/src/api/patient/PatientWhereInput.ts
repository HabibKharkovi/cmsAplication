import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PatientWhereInput = {
  age?: StringNullableFilter;
  balance?: StringNullableFilter;
  cnicNo?: StringNullableFilter;
  contactNo?: StringNullableFilter;
  data?: StringNullableFilter;
  discountPercentage?: StringNullableFilter;
  discountRupees?: StringNullableFilter;
  email?: StringNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  mrNo?: StringNullableFilter;
  name?: StringNullableFilter;
  paid?: StringNullableFilter;
  password?: StringNullableFilter;
  pinNo?: StringNullableFilter;
  referBy?: StringNullableFilter;
  time?: StringNullableFilter;
  total?: StringNullableFilter;
  username?: StringNullableFilter;
};
