import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { MEMBERSHIP_TITLE_FIELD } from "./MembershipTitle";
import { CLUB_TITLE_FIELD } from "../club/ClubTitle";

export const MembershipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Club" source="club.id" reference="Club">
          <TextField source={CLUB_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Duration Years" source="durationYears" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Paid Amount" source="paidAmount" />
        <TextField label="SourceType" source="sourceType" />
        <TextField label="StartDate" source="startDate" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Member" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Document"
          target="membershipsId"
          label="Documents"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
