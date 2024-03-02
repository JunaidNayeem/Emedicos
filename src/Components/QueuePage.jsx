import React, { useState, useEffect } from "react";
import HeaderComponent from "./Header";
import { Modal, Form, Flex, Input, Button, Table, message } from "antd";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import "../assets/sass/queue.scss";

export default function QueuePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [skipPatients, setSkipPatients] = useState([]);
  const isCurrentQueue = (queuePos) =>
    queuePos == localStorage.getItem("Current");

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get(
        "https://emedicos.pythonanywhere.com/get-patient/"
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

  const handleSkipPatient = () => {
    const currentPatient = filteredPatients.find(
      (patient) =>
        patient.status === 0 && !skipPatients.includes(patient.queuePos)
    );

    if (currentPatient) {
      setSkipPatients([...skipPatients, currentPatient.queuePos]);
      localStorage.setItem("Current", currentPatient.queuePos + 1);
      dequeue(currentPatient.patient_id + 1);
    }
  };

  const handleNextPatient = () => {
    const currentPatient = filteredPatients.find(
      (patient) =>
        patient.status === 0 && !skipPatients.includes(patient.queuePos)
    );

    if (currentPatient) {
      localStorage.setItem("Current", currentPatient.queuePos);
      dequeue(currentPatient.patient_id);
    }
  };

  const dequeue = async (value) => {
    try {
      await axios.get(
        `https://emedicos.pythonanywhere.com/update-patient-status/${value}`
      );
      fetchPatients();
    } catch (error) {
      console.error("Failed to fetch patients:", error);
    }
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
        "https://emedicos.pythonanywhere.com/add-patient/",
        requestData
      );
      message.info("Pateint added successfully");
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
      render: (queuePos) => (
        <span className={isCurrentQueue(queuePos) ? "current-queue" : ""}>
          {queuePos}
        </span>
      ),
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
      render: (status) =>
        status === 0 ? (
          "Not Diagnosed"
        ) : (
          <span>
            <CheckOutlined /> Diagnosed
          </span>
        ),
    },
  ];

  const rowClassName = (record) => ({
    "current-row": isCurrentQueue(record.queuePos),
  });

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
            style={{ width: 300 }}
          />
          <Button onClick={handleNextPatient}>Next Pateint</Button>
          <Button onClick={handleSkipPatient}>Skip Pateint</Button>
        </Flex>
        <Table
          columns={columns}
          dataSource={filteredPatients}
          rowClassName={(record) => rowClassName(record)}
        />
      </div>
      <Modal
        title="Patient Details"
        open={isModalOpen}
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
