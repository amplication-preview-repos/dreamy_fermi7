import { ClubWhereUniqueInput } from "../club/ClubWhereUniqueInput";
import { Decimal } from "decimal.js";
import { DocumentUpdateManyWithoutMembershipsInput } from "./DocumentUpdateManyWithoutMembershipsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembershipUpdateInput = {
  club?: ClubWhereUniqueInput;
  durationYears?: string;
  endDate?: Date;
  paidAmount?: Decimal;
  paymentProofUrl?: DocumentUpdateManyWithoutMembershipsInput;
  sourceType?: "NEW" | "EXISTING_OFFSYSTEM" | null;
  startDate?: Date;
  status?: string;
  user?: UserWhereUniqueInput;
};
