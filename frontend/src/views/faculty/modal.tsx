import { Card, Form, Input, message, Modal } from "antd";
import React from "react";
import { create, update } from "../../common/api/faculty.api";

const { Item } = Form;

const FacultyModal = (props: any) => {
  const [form] = Form.useForm();
  const handleOk = () => {
    if (props.selectedFaculty._id) {
      onUpdate();
    } else {
      onCreate();
    }
    form.submit();
    props.openMessage();
  };

  const onCreate = () => {
    create(form.getFieldsValue()).then((res) => {
      console.log(res);
    });
  };

  const onUpdate = () => {
    update(form.getFieldsValue(), props.selectedFaculty._id).then((res) => {
      console.log(res);
    });
  };

  return (
    <Modal
      open={props.visible}
      onCancel={props.onCancel}
      onOk={handleOk}
      title={props.selectedFaculty._id ? "Edit Faculty" : "Create New Faculty"}
    >
      <Card className="mt-3">
        <Form form={form} initialValues={props.selectedFaculty}>
          <Item name="name" label="Name" rules={[{ required: true, min: 5 }]}>
            <Input />
          </Item>
          <Item name="code" label="Code" rules={[{ required: true, min: 3 }]}>
            <Input />
          </Item>
        </Form>
      </Card>
    </Modal>
  );
};

export default FacultyModal;
