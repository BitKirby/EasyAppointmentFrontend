import {
  List,
  Datagrid,
  TextField,
  Create,
  Edit,
  TextInput,
  SimpleForm,
  EditButton,
  DeleteButton,
  ReferenceInput,
} from "react-admin";

const campusFilters = [
  <TextInput source="name" label="Search" alwaysOn key="id" />,
  //   <ReferenceInput source="id" label="name" reference="name"/>,
];

export const CampusList = () => (
  <List filters={campusFilters}>
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

export const CampusCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
