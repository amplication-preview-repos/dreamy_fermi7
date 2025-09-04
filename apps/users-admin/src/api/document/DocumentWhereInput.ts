import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MembershipWhereUniqueInput } from "../membership/MembershipWhereUniqueInput";

export type DocumentWhereInput = {
  application?: StringNullableFilter;
  createdBy?: UserWhereUniqueInput;
  fileName?: StringNullableFilter;
  fileUrl?: StringNullableFilter;
  id?: StringFilter;
  memberships?: MembershipWhereUniqueInput;
  objectId?: StringNullableFilter;
  requestId?: StringNullableFilter;
  requestType?: StringNullableFilter;
  requestubype?: StringNullableFilter;
};
