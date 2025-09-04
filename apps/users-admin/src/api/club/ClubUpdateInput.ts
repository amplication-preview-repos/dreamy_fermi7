import { MembershipUpdateManyWithoutClubsInput } from "./MembershipUpdateManyWithoutClubsInput";

export type ClubUpdateInput = {
  category?: string | null;
  ccode?: string;
  memberships?: MembershipUpdateManyWithoutClubsInput;
  name?: string;
};
