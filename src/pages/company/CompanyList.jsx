import { Button, Space, Spin, Table } from "antd";
import {
  EditOutlined,
  PlusCircleOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getCompanyListRequest } from "../../api/requests/company";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "../../components/common/ErrorBoundary";
import ViewCompanyDetailModal from "../../components/company/ViewCompanyDetailModal";
import DeleteCompany from "../../components/company/DeleteCompany";

function CompanyList() {
  const navigate = useNavigate();

  const {
    data: companyListRes,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["company", "list"],
    queryFn: async () => {
      const res = await getCompanyListRequest({});
      return res.data?.data;
    },
  });

  function navigateToAddCompany() {
    navigate("/company/add");
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Company Name",
      dataIndex: "company_name",
      key: "company_name",
    },
    {
      title: "Address",
      dataIndex: "address_line_1",
      key: "address_line_1",
    },
    {
      title: "Owner Mobile",
      dataIndex: "owner_mobile",
      key: "owner_mobile",
    },
    {
      title: "GST No",
      dataIndex: "gst_no",
      key: "gst_no",
    },
    {
      title: "Company Type",
      dataIndex: "company_type",
      key: "company_type",
    },
    {
      title: "Action",
      render: (companyDetails) => {
        return (
          <Space>
            <ViewCompanyDetailModal companyDetails={companyDetails} />
            <Button>
              <EditOutlined />
            </Button>
            <DeleteCompany />
            <Button>
              <UsergroupAddOutlined />
            </Button>
          </Space>
        );
      },
      key: "action",
    },
  ];

  if (isLoading) {
    return (
      <Spin tip="Loading" size="large">
        <div className="p-14" />
      </Spin>
    );
  }

  if (isError) {
    console.error("----->", error);
    return <ErrorBoundary />;
  }

  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center gap-5">
        <h2 className="m-0">Company List</h2>
        <Button onClick={navigateToAddCompany}>
          <PlusCircleOutlined />
        </Button>
      </div>
      <Table
        dataSource={companyListRes?.rows || []}
        columns={columns}
        rowKey={"id"}
      />
    </div>
  );
}

export default CompanyList;