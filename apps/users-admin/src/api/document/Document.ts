import { User } from "../user/User";
import { Membership } from "../membership/Membership";

export type Document = {
  application: string | null;
  createdAt: Date;
  createdBy?: User | null;
  fileName: string | null;
  fileUrl: string | null;
  id: string;
  memberships?: Membership | null;
  objectId: string | null;
  requestId: string | null;
  requestType: string | null;
  requestubype: string | null;
  updatedAt: Date;
};
