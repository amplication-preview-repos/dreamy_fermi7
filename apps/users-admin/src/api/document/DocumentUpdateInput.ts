import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MembershipWhereUniqueInput } from "../membership/MembershipWhereUniqueInput";

export type DocumentUpdateInput = {
  application?: string | null;
  createdBy?: UserWhereUniqueInput | null;
  fileName?: string | null;
  fileUrl?: string | null;
  memberships?: MembershipWhereUniqueInput | null;
  objectId?: string | null;
  requestId?: string | null;
  requestType?: string | null;
  requestubype?: string | null;
};
