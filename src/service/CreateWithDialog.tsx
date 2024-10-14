import React, { useState } from "react";
import {
  useNotify,
  useRefresh,
  useDataProvider,
  SimpleForm,
} from "react-admin";
import { Dialog, DialogContent, DialogTitle, Button } from "@mui/material";

interface CreateWithDialogProps {
  resource: string;
  CreateComponent: React.ComponentType;
}

export const CreateWithDialog: React.FC<CreateWithDialogProps> = ({
  resource,
  CreateComponent,
}) => {
  const [open, setOpen] = useState(false);
  const notify = useNotify();
  const refresh = useRefresh();
  const dataProvider = useDataProvider(); // 用于提交数据

  // 打开和关闭弹窗
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 表单提交处理函数
  const handleSubmit = (data: any) => {
    dataProvider
      .create(resource, { data }) // 通过 dataProvider 发起 POST 请求
      .then(() => {
        notify("成功新增数据", { type: "success" });
        setOpen(false); // 提交成功后关闭弹窗
        refresh();
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
        <DialogTitle>新建项目</DialogTitle>
        <DialogContent>
          <SimpleForm onSubmit={handleSubmit}>
            <CreateComponent />
          </SimpleForm>
        </DialogContent>
      </Dialog>
    </>
  );
};
