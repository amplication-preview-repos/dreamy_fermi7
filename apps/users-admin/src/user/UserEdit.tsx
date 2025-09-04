import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";
import { MembershipTitle } from "../membership/MembershipTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Document Number" source="documentNumber" />
        <SelectInput
          source="documentType"
          label="Document Type"
          choices={[
            { label: "National ID", value: "ID" },
            { label: "Residence Permit", value: "RP" },
            { label: "Passport", value: "PASSPORT" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="documents.id"
          reference="Document"
          label="Documents"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Family NameAr" source="familyNameAr" />
        <TextInput label="Family Name En" source="familyNameEn" />
        <TextInput label="First Name Ar" source="firstNameAr" />
        <TextInput label="First Name En" source="firstNameEn" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "Male", value: "M" },
            { label: "Female", value: "F" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput
          label="is Company Representative"
          source="isCompanyRepresentative"
        />
        <BooleanInput label="is Special Needs" source="isSpecialNeeds" />
        <ReferenceArrayInput source="memberships" reference="Membership">
          <SelectArrayInput
            optionText={MembershipTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Mobile" source="mobile" />
        <TextInput label="password" source="password" />
        <TextInput label="Phone Country Code" source="phoneCountrycode" />
        <BooleanInput label="profilePhotoPublic" source="profilePhotoPublic" />
        <div />
        <TextInput label="roles" source="roles" />
        <TextInput label="Second NameAr" source="secondNameAr" />
        <TextInput label="SecondName En" source="secondNameEn" />
        <TextInput label="sessionId" source="sessionId" />
        <TextInput label="Third Name Ar" source="thirdNameAr" />
        <TextInput label="Third Name En" source="thirdNameEn" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
