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

//TO-DO
// const campusFilters = [
//   <TextInput source="name" label="Search" alwaysOn />,
//   //   <ReferenceInput source="id" label="name" reference="name" key="id" />,
// ];

export const DepartmentsList = () => (
  // <List filters={campusFilters}>
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="code" />
      <TextField source="name" />
      <TextField source="description" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const DepartmentsEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      <TextInput source="code" />
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export const DepartmentsCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="code" />
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
