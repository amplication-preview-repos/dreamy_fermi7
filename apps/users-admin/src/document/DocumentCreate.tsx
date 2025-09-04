import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { MembershipTitle } from "../membership/MembershipTitle";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Application" source="application" />
        <ReferenceInput
          source="createdBy.id"
          reference="User"
          label="createdBy"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="fileName" source="fileName" />
        <TextInput label="fileURL" source="fileUrl" />
        <ReferenceInput
          source="memberships.id"
          reference="Membership"
          label="Memberships"
        >
          <SelectInput optionText={MembershipTitle} />
        </ReferenceInput>
        <TextInput label="objectID" source="objectId" />
        <TextInput label="requestID" source="requestId" />
        <TextInput label="RequestType" source="requestType" />
        <TextInput label="Requestubype" source="requestubype" />
      </SimpleForm>
    </Create>
  );
};
