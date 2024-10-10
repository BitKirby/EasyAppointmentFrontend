import { dataProvider } from "./dataProvider";
import { Admin, Resource } from "react-admin";
import { CampusList, CampusEdit, CampusCreate } from "./component/campus.tsx";
import {
  DepartmentsList,
  DepartmentsEdit,
  DepartmentsCreate,
} from "./component/departments.tsx";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="campuses"
      list={CampusList}
      edit={CampusEdit}
      create={CampusCreate}
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
