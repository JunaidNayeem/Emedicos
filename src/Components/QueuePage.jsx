import React, { useState, useEffect } from "react";
import HeaderComponent from "./Header";
import { Modal, Form, Flex, Input, Button, Space, Layout, Table } from "antd";
import { EditOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
const { Content } = Layout;

export default function QueuePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get(
        "http://20.197.40.159:8000/get-patient/"
      );
      setPatients(response.data);
      setFilteredPatients(response.data);
    } catch (error) {
      console.error("Failed to fetch patients:", error);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);
      const requestData = {
        patientName: values.name,
        patientAge: values.age,
        patientMobile: values.mobile,
      };

      const response = await axios.post(
        "http://20.197.40.159:8000/add-patient/",
        requestData
      );
      console.log("API Response:", response.data);

      form.resetFields();
      setIsModalOpen(false);
      await fetchPatients();
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value) => {
    const filtered = patients.filter((patient) =>
      patient.patient__patientName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPatients(filtered);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "patient__patientName",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "patient__patientAge",
      key: "age",
    },
    {
      title: "Mobile",
      dataIndex: "patient__patientMobile",
      key: "mobile",
    },
    {
      title: "Queue Position",
      dataIndex: "queuePos",
      key: "queuePos",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: (createdAt) => new Date(createdAt).toLocaleString(),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (status === 0 ? "Active" : "Inactive"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <span>
          <a>
            <EditOutlined />
          </a>
          <a>
            <DeleteOutlined />
          </a>
        </span>
      ),
    },
  ];

  return (
    <>
      <HeaderComponent />
      <div style={{ padding: "50px" }}>
        <Flex horizontal align="center" gap={20}>
          <h1>List of patients</h1>
          <Button onClick={showModal} style={{ color: "white" }}>
            <PlusOutlined />
            Add Patient
          </Button>
          <Input.Search
            placeholder="Search by patient name"
            onSearch={handleSearch}
            style={{ width: 200 }}
          />
        </Flex>
        <Table dataSource={filteredPatients} columns={columns} />
      </div>
      <Modal
        title="Patient Details"
        visible={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        confirmLoading={loading}
      >
        <Form form={form} layout="vertical" onFinish={handleOk}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please enter the patient name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[
              { required: true, message: "Please enter the patient age!" },
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Mobile No."
            name="mobile"
            rules={[
              {
                required: true,
                message: "Please enter the patient mobile number!",
              },
              {
                pattern: /^\d{10}$/,
                message: "Please enter a valid 10-digit mobile number!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
