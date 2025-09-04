import { SortOrder } from "../../util/SortOrder";

export type MembershipOrderByInput = {
  clubId?: SortOrder;
  createdAt?: SortOrder;
  durationYears?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  paidAmount?: SortOrder;
  sourceType?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
