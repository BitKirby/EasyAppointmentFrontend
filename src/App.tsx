import { dataProvider } from "./dataProvider";
import { Admin, Resource } from "react-admin";
import { CampusList, CampusEdit } from "./component/campus";
import {
  DepartmentsList,
  DepartmentsEdit,
  DepartmentsCreate,
} from "./component/departments";
import { Dashboard } from "./Dashboard";

export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="campuses"
      list={CampusList}
      edit={CampusEdit}
      // create={CampusCreate}
      // icon={PostIcon}
    />
    <Resource
      name="departments"
      list={DepartmentsList}
      edit={DepartmentsEdit}
      create={DepartmentsCreate}
      // icon={PostIcon}
    />
  </Admin>
);
