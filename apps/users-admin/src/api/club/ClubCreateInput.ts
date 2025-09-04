import { MembershipCreateNestedManyWithoutClubsInput } from "./MembershipCreateNestedManyWithoutClubsInput";

export type ClubCreateInput = {
  category?: string | null;
  ccode: string;
  memberships?: MembershipCreateNestedManyWithoutClubsInput;
  name: string;
};
