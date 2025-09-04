import { ClubWhereUniqueInput } from "../club/ClubWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembershipWhereInput = {
  club?: ClubWhereUniqueInput;
  durationYears?: StringFilter;
  endDate?: DateTimeFilter;
  id?: StringFilter;
  paidAmount?: DecimalFilter;
  paymentProofUrl?: DocumentListRelationFilter;
  sourceType?: "NEW" | "EXISTING_OFFSYSTEM";
  startDate?: DateTimeFilter;
  status?: StringFilter;
  user?: UserWhereUniqueInput;
};
