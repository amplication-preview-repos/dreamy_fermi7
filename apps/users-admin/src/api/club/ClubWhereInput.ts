import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MembershipListRelationFilter } from "../membership/MembershipListRelationFilter";

export type ClubWhereInput = {
  category?: StringNullableFilter;
  ccode?: StringFilter;
  id?: StringFilter;
  memberships?: MembershipListRelationFilter;
  name?: StringFilter;
};
