import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { MEMBERSHIP_TITLE_FIELD } from "../membership/MembershipTitle";

export const DocumentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Documents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Application" source="application" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="createdBy" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="fileName" source="fileName" />
        <TextField label="fileURL" source="fileUrl" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Memberships"
          source="membership.id"
          reference="Membership"
        >
          <TextField source={MEMBERSHIP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="objectID" source="objectId" />
        <TextField label="requestID" source="requestId" />
        <TextField label="RequestType" source="requestType" />
        <TextField label="Requestubype" source="requestubype" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
