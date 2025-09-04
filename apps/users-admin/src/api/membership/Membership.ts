import { Club } from "../club/Club";
import { Decimal } from "decimal.js";
import { Document } from "../document/Document";
import { User } from "../user/User";

export type Membership = {
  club?: Club;
  createdAt: Date;
  durationYears: string;
  endDate: Date;
  id: string;
  paidAmount: Decimal;
  paymentProofUrl?: Array<Document>;
  sourceType?: "NEW" | "EXISTING_OFFSYSTEM" | null;
  startDate: Date;
  status: string;
  updatedAt: Date;
  user?: User;
};
