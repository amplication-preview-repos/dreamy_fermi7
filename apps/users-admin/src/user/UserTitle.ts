import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "familyNameAr";

export const UserTitle = (record: TUser): string => {
  return record.familyNameAr?.toString() || String(record.id);
};
