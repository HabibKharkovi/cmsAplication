import { LabTest as TLabTest } from "../api/labTest/LabTest";

export const LABTEST_TITLE_FIELD = "name";

export const LabTestTitle = (record: TLabTest): string => {
  return record.name?.toString() || String(record.id);
};
