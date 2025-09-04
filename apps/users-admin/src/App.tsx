import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { samlAuthProvider } from "./auth-provider/ra-auth-saml";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ClubList } from "./club/ClubList";
import { ClubCreate } from "./club/ClubCreate";
import { ClubEdit } from "./club/ClubEdit";
import { ClubShow } from "./club/ClubShow";
import { MembershipList } from "./membership/MembershipList";
import { MembershipCreate } from "./membership/MembershipCreate";
import { MembershipEdit } from "./membership/MembershipEdit";
import { MembershipShow } from "./membership/MembershipShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Users"}
        dataProvider={dataProvider}
        authProvider={samlAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Club"
          list={ClubList}
          edit={ClubEdit}
          create={ClubCreate}
          show={ClubShow}
        />
        <Resource
          name="Membership"
          list={MembershipList}
          edit={MembershipEdit}
          create={MembershipCreate}
          show={MembershipShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
