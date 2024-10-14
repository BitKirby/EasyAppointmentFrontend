import {
  List,
  Datagrid,
  TextField,
  Edit,
  TextInput,
  SimpleForm,
  EditButton,
  DeleteButton,
  TopToolbar,
} from "react-admin";
import { CreateWithDialog } from "../service/CreateWithDialog";

const campusFilters = [
  <TextInput source="name" label="Search" alwaysOn key="id" />,
  //   <ReferenceInput source="id" label="name" reference="name"/>,
];

const CampusListActions = () => (
  <TopToolbar>
    <CreateWithDialog resource="campuses" CreateComponent={CampusCreate} />
  </TopToolbar>
);

export const CampusList = () => (
  <List filters={campusFilters} actions={<CampusListActions />}>
    {/* <List> */}
    <Datagrid>
      <TextField source="id" label="序号" />
      <TextField source="name" label="校区名称" />
      <TextField source="description" label="描述" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CampusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} label="序号" />
      <TextInput source="name" label="校区名称" />
      <TextInput source="description" label="描述" />
    </SimpleForm>
  </Edit>
);

export const CampusCreate = () => (
  <>
    <TextInput source="name" label="校区名称" />
    <TextInput source="description" label="描述" />
  </>
);
