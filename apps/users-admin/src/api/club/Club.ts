import { Membership } from "../membership/Membership";

export type Club = {
  category: string | null;
  ccode: string;
  createdAt: Date;
  id: string;
  memberships?: Array<Membership>;
  name: string;
  updatedAt: Date;
};
