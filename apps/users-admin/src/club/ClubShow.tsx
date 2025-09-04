import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLUB_TITLE_FIELD } from "./ClubTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ClubShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="category" source="category" />
        <TextField label="Club Code" source="ccode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Club Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Membership"
          target="clubId"
          label="Memberships"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
