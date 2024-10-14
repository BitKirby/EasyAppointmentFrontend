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
import { MyExportButton } from "../service/MyExportButton";
import { CreateWithDialog } from "../service/CreateWithDialog";

const campusFilters = [
  <TextInput source="name" label="Search" alwaysOn key="id" />,
  //   <ReferenceInput source="id" label="name" reference="name"/>,
];

const CampusListActions = () => (
  <TopToolbar>
    <CreateWithDialog resource="campuses" />
    <MyExportButton resource="campuses" />
  </TopToolbar>
);

export const CampusList = () => (
  <List filters={campusFilters} actions={<CampusListActions />}>
    {/* <List> */}
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CampusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);
