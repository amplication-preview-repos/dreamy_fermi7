import { ClubWhereUniqueInput } from "../club/ClubWhereUniqueInput";
import { Decimal } from "decimal.js";
import { DocumentCreateNestedManyWithoutMembershipsInput } from "./DocumentCreateNestedManyWithoutMembershipsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembershipCreateInput = {
  club: ClubWhereUniqueInput;
  durationYears: string;
  endDate: Date;
  paidAmount: Decimal;
  paymentProofUrl?: DocumentCreateNestedManyWithoutMembershipsInput;
  sourceType?: "NEW" | "EXISTING_OFFSYSTEM" | null;
  startDate: Date;
  status: string;
  user: UserWhereUniqueInput;
};
