import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ClubTitle } from "../club/ClubTitle";
import { DocumentTitle } from "../document/DocumentTitle";
import { UserTitle } from "../user/UserTitle";

export const MembershipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="club.id" reference="Club" label="Club">
          <SelectInput optionText={ClubTitle} />
        </ReferenceInput>
        <TextInput label="Duration Years" source="durationYears" />
        <DateTimeInput label="End Date" source="endDate" />
        <NumberInput label="Paid Amount" source="paidAmount" />
        <ReferenceArrayInput source="paymentProofUrl" reference="Document">
          <SelectArrayInput
            optionText={DocumentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="sourceType"
          label="SourceType"
          choices={[
            { label: "New", value: "NEW" },
            { label: "EXISTING", value: "EXISTING_OFFSYSTEM" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="StartDate" source="startDate" />
        <TextInput label="Status" source="status" />
        <ReferenceInput source="user.id" reference="User" label="Member">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
