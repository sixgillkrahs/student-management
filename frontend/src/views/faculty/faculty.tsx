import { Button, Input, Popconfirm, Table, Tooltip, message } from "antd";
import Column from "antd/es/table/Column";
import { useEffect, useState } from "react";
import { deleteApi, getAll } from "../../common/api/faculty.api";
import FacultyModal from "./modal";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

const FacultyView = () => {
  const [faculty, setFaculty] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedFaculty, setSelectFaculty] = useState({});
  const key = "updatable";
  const [messageApi, contextHolder] = message.useMessage();
  const getFacultys = () => {
    getAll().then((res) => {
      setFaculty(res.rows);
    });
  };

  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Loaded!",
        duration: 2,
      });
      setVisible(false);
      getFacultys();
    }, 1000);
  };

  const onDelete = (_id: string) => {
    deleteApi(_id).then((res) => {
      console.log(res);
      openMessage();
    });
  };

  const handleAdd = () => {
    setSelectFaculty({});
    setVisible(true);
  };

  const handleEdit = (record: any) => {
    console.log(record);
    setSelectFaculty(record);
    setVisible(true);
  };

  useEffect(() => {
    getFacultys();
  }, []);

  return (
    <div className="container ">
      {contextHolder}
      <div className="mb-6 flex justify-between p-2 ">
        <Input className="w-40" />
        <Button type="primary" onClick={() => handleAdd()}>
          New Faculty
        </Button>
      </div>
      <Table dataSource={faculty}>
        <Column
          title="#"
          dataIndex="index"
          render={(_, record, index) => <>{index + 1}</>}
          key="index"
        />
        <Column
          className="text-base"
          title="Code"
          dataIndex="code"
          key="code"
          // width={150}
        />
        <Column
          className="text-base"
          title="Name"
          dataIndex="name"
          key="name"
          // width={500}
        />
        <Column
          title="Action"
          key="action"
          render={(record) => {
            return (
              <>
                <Tooltip title="Edit">
                  <Button
                    type="primary"
                    icon={<EditFilled />}
                    onClick={() => handleEdit(record)}
                  />
                </Tooltip>
                <Tooltip title="Delete">
                  <Popconfirm
                    title="Delete the faculty"
                    description="Are you sure to delete this faculty?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => onDelete(record._id)}
                  >
                    <Button
                      className="m-1"
                      type="primary"
                      icon={<DeleteFilled />}
                    />
                  </Popconfirm>
                </Tooltip>
              </>
            );
          }}
        />
      </Table>
      {visible ? (
        <FacultyModal
          visible={visible}
          onCancel={() => setVisible(!visible)}
          openMessage={() => openMessage()}
          selectedFaculty={selectedFaculty}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default FacultyView;
