import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
