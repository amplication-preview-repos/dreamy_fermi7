import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MembershipTitle } from "../membership/MembershipTitle";

export const ClubEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <TextInput label="Club Code" source="ccode" />
        <ReferenceArrayInput source="memberships" reference="Membership">
          <SelectArrayInput
            optionText={MembershipTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Club Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
