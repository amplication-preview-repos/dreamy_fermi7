import { Membership as TMembership } from "../api/membership/Membership";

export const MEMBERSHIP_TITLE_FIELD = "durationYears";

export const MembershipTitle = (record: TMembership): string => {
  return record.durationYears?.toString() || String(record.id);
};
