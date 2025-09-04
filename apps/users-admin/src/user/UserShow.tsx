import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CLUB_TITLE_FIELD } from "../club/ClubTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Document Number" source="documentNumber" />
        <TextField label="Document Type" source="documentType" />
        <ReferenceField
          label="Documents"
          source="document.id"
          reference="Document"
        >
          <TextField source={DOCUMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Email" source="email" />
        <TextField label="Family NameAr" source="familyNameAr" />
        <TextField label="Family Name En" source="familyNameEn" />
        <TextField label="First Name Ar" source="firstNameAr" />
        <TextField label="First Name En" source="firstNameEn" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <BooleanField
          label="is Company Representative"
          source="isCompanyRepresentative"
        />
        <BooleanField label="is Special Needs" source="isSpecialNeeds" />
        <TextField label="Mobile" source="mobile" />
        <TextField label="password" source="password" />
        <TextField label="Phone Country Code" source="phoneCountrycode" />
        <BooleanField label="profilePhotoPublic" source="profilePhotoPublic" />
        <TextField label="profilePhotoUrl" source="profilePhotoUrl" />
        <TextField label="roles" source="roles" />
        <TextField label="Second NameAr" source="secondNameAr" />
        <TextField label="SecondName En" source="secondNameEn" />
        <TextField label="sessionId" source="sessionId" />
        <TextField label="Third Name Ar" source="thirdNameAr" />
        <TextField label="Third Name En" source="thirdNameEn" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
        <ReferenceManyField
          reference="Membership"
          target="userId"
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
