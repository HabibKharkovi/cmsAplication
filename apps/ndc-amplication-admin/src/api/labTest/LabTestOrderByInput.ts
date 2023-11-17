import { SortOrder } from "../../util/SortOrder";

export type LabTestOrderByInput = {
  code?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  reportingTime?: SortOrder;
  updatedAt?: SortOrder;
};
