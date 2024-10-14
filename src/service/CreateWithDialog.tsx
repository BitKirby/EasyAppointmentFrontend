import React, { useState } from "react";
import {
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
  useDataProvider,
} from "react-admin";
import { Dialog, DialogContent, DialogTitle, Button } from "@mui/material";

interface CreateWithDialogProps {
  resource: string;
}

export const CreateWithDialog: React.FC<CreateWithDialogProps> = ({
  resource,
}) => {
  const [open, setOpen] = useState(false);
  const notify = useNotify();
  const redirect = useRedirect();
  const dataProvider = useDataProvider(); // 用于提交数据

  // 打开和关闭弹窗
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 表单提交处理函数
  const handleSubmit = (data: any) => {
    dataProvider
      .create(resource, { data }) // 通过 dataProvider 发起 POST 请求
      .then(() => {
        notify("Record created successfully", { type: "success" });
        redirect("/", resource);
        setOpen(false); // 提交成功后关闭弹窗
      })
      .catch((error) => {
        notify(`Error: ${error.message}`, { type: "warning" });
      });
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Create a new item</DialogTitle>
        <DialogContent>
          {/* SimpleForm 内部已经自动提供 control */}
          <SimpleForm onSubmit={handleSubmit}>
            <TextInput source="name" label="Name" />
            <TextInput source="description" label="Description" />
          </SimpleForm>
        </DialogContent>
      </Dialog>
    </>
  );
};
