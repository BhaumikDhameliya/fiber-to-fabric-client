import { ArrowLeftOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Col, Flex, Form, Input, Row, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import {
  getCompanyRequest,
  updateCompanyRequest,
} from "../../api/requests/company";
import PhoneInput from "react-phone-number-input";
import { DevTool } from "@hookform/devtools";
import ForwardRefInput from "../../components/common/ForwardRefInput";
import { useEffect } from "react";

const updateCompanySchemaResolver = yupResolver(
  yup.object().shape({
    owner_mobile: yup
      .string()
      .test("Mobile Validation", "Please enter valid Contact Number", (value) =>
        value ? isValidPhoneNumber(value) : false
      ),
    gst_no: yup.string(),
  })
);

function UpdateCompany() {
  const navigate = useNavigate();
  const params = useParams();
  const { companyId } = params;

  function goBack() {
    navigate(-1);
  }

  const { mutateAsync: updateCompanyDetails } = useMutation({
    mutationFn: async (data) => {
      const res = await updateCompanyRequest({ companyId, data });
      return res.data;
    },
    mutationKey: ["update", "company", companyId],
    onSuccess: (res) => {
      const successMessage = res?.message;
      if (successMessage) {
        message.success(successMessage);
      }
      navigate(-1);
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.message;
      if (errorMessage && typeof errorMessage === "string") {
        message.error(errorMessage);
      }
    },
  });

  const { data: companyDetails } = useQuery({
    queryKey: ["company", companyId],
    queryFn: async () => {
      const res = await getCompanyRequest({ companyId });
      return res.data?.data;
    },
  });

  async function onSubmit(data) {
    console.log(data); // Handle form submission
    const res = await updateCompanyDetails(data);
    console.log("res----->", res);
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: updateCompanySchemaResolver,
  });

  useEffect(() => {
    if (companyDetails) {
      reset({
        ...companyDetails,
        // remove unnecessary fields
        id: undefined,
        user_id: undefined,
        deletedAt: undefined,
        createdAt: undefined,
        updatedAt: undefined,
      });
    }
  }, [companyDetails, reset]);

  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center gap-5">
        <Button onClick={goBack}>
          <ArrowLeftOutlined />
        </Button>
        <h2 className="m-0">Update Company</h2>
      </div>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Row
          gutter={18}
          style={{
            padding: "12px",
          }}
        >
          <Col span={12}>
            <Form.Item
              label="GST No"
              name="gst_no"
              validateStatus={errors.gst_no ? "error" : ""}
              help={errors.gst_no && errors.gst_no.message}
            >
              <Controller
                control={control}
                name="gst_no"
                render={({ field }) => (
                  <Input {...field} placeholder="GST No" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Owner Name"
              name="owner_name"
              validateStatus={errors.owner_name ? "error" : ""}
              help={errors.owner_name && errors.owner_name.message}
            >
              <Controller
                control={control}
                name="owner_name"
                render={({ field }) => (
                  <Input {...field} placeholder="owner name" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Company Name"
              name="company_name"
              validateStatus={errors.company_name ? "error" : ""}
              help={errors.company_name && errors.company_name.message}
            >
              <Controller
                control={control}
                name="company_name"
                render={({ field }) => (
                  <Input {...field} placeholder="company name" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Owner Mobile"
              name="owner_mobile"
              validateStatus={errors.owner_mobile ? "error" : ""}
              help={errors.owner_mobile && errors.owner_mobile.message}
            >
              <Controller
                control={control}
                name="owner_mobile"
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    placeholder="Enter phone number"
                    defaultCountry="IN"
                    international
                    inputComponent={ForwardRefInput}
                  />
                )}
              />
            </Form.Item>

            <Form.Item
              label="PAN No"
              name="pancard_no"
              validateStatus={errors.pancard_no ? "error" : ""}
              help={errors.pancard_no && errors.pancard_no.message}
            >
              <Controller
                control={control}
                name="pancard_no"
                render={({ field }) => (
                  <Input {...field} placeholder="PAN No" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Aadhar No"
              name="adhar_no"
              validateStatus={errors.adhar_no ? "error" : ""}
              help={errors.adhar_no && errors.adhar_no.message}
            >
              <Controller
                control={control}
                name="adhar_no"
                render={({ field }) => (
                  <Input {...field} placeholder="Aadhar No" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Company Unit"
              name="company_unit"
              validateStatus={errors.company_unit ? "error" : ""}
              help={errors.company_unit && errors.company_unit.message}
            >
              <Controller
                control={control}
                name="company_unit"
                render={({ field }) => (
                  <Input {...field} placeholder="Unit A" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Bill Number Format"
              name="bill_number_format"
              validateStatus={errors.bill_number_format ? "error" : ""}
              help={
                errors.bill_number_format && errors.bill_number_format.message
              }
            >
              <Controller
                control={control}
                name="bill_number_format"
                render={({ field }) => (
                  <Input {...field} placeholder="BNF-0001" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Company Email"
              name="company_email"
              validateStatus={errors.company_email ? "error" : ""}
              help={errors.company_email && errors.company_email.message}
            >
              <Controller
                control={control}
                name="company_email"
                render={({ field }) => (
                  <Input {...field} placeholder="Email" type="email" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Company Contact"
              name="company_contact"
              validateStatus={errors.company_contact ? "error" : ""}
              help={errors.company_contact && errors.company_contact.message}
            >
              <Controller
                control={control}
                name="company_contact"
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    placeholder="9876543210"
                    defaultCountry="IN"
                    international
                    inputComponent={ForwardRefInput}
                  />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Addres Line 1"
              name="address_line_1"
              validateStatus={errors.address_line_1 ? "error" : ""}
              help={errors.address_line_1 && errors.address_line_1.message}
            >
              <Controller
                control={control}
                name="address_line_1"
                render={({ field }) => (
                  <Input {...field} placeholder="Addres Line 1" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Addres Line 2"
              name="address_line_2"
              validateStatus={errors.address_line_2 ? "error" : ""}
              help={errors.address_line_2 && errors.address_line_2.message}
            >
              <Controller
                control={control}
                name="address_line_2"
                render={({ field }) => (
                  <Input {...field} placeholder="Addres Line 2" />
                )}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Country"
              name="country"
              validateStatus={errors.country ? "error" : ""}
              help={errors.country && errors.country.message}
            >
              <Controller
                control={control}
                name="country"
                render={({ field }) => (
                  <Input {...field} placeholder="country" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="State"
              name="state"
              validateStatus={errors.state ? "error" : ""}
              help={errors.state && errors.state.message}
            >
              <Controller
                control={control}
                name="state"
                render={({ field }) => <Input {...field} placeholder="state" />}
              />
            </Form.Item>

            <Form.Item
              label="City"
              name="city"
              validateStatus={errors.city ? "error" : ""}
              help={errors.city && errors.city.message}
            >
              <Controller
                control={control}
                name="city"
                render={({ field }) => <Input {...field} placeholder="city" />}
              />
            </Form.Item>

            <Form.Item
              label="Pincode"
              name="pincode"
              validateStatus={errors.pincode ? "error" : ""}
              help={errors.pincode && errors.pincode.message}
            >
              <Controller
                control={control}
                name="pincode"
                render={({ field }) => (
                  <Input {...field} placeholder="pincode" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Bill Title"
              name="bill_title"
              validateStatus={errors.bill_title ? "error" : ""}
              help={errors.bill_title && errors.bill_title.message}
            >
              <Controller
                control={control}
                name="bill_title"
                render={({ field }) => (
                  <Input {...field} placeholder="bill_title" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Bank Name"
              name="bank_name"
              validateStatus={errors.bank_name ? "error" : ""}
              help={errors.bank_name && errors.bank_name.message}
            >
              <Controller
                control={control}
                name="bank_name"
                render={({ field }) => (
                  <Input {...field} placeholder="bank_name" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Account Number"
              name="account_number"
              validateStatus={errors.account_number ? "error" : ""}
              help={errors.account_number && errors.account_number.message}
            >
              <Controller
                control={control}
                name="account_number"
                render={({ field }) => (
                  <Input {...field} placeholder="account_number" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="IFSC Code"
              name="ifsc_code"
              validateStatus={errors.ifsc_code ? "error" : ""}
              help={errors.ifsc_code && errors.ifsc_code.message}
            >
              <Controller
                control={control}
                name="ifsc_code"
                render={({ field }) => (
                  <Input {...field} placeholder="ifsc_code" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Company Type"
              name="company_type"
              validateStatus={errors.company_type ? "error" : ""}
              help={errors.company_type && errors.company_type.message}
            >
              <Controller
                control={control}
                name="company_type"
                render={({ field }) => (
                  <Input {...field} placeholder="company_type" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Signature Url"
              name="signature_url"
              validateStatus={errors.signature_url ? "error" : ""}
              help={errors.signature_url && errors.signature_url.message}
            >
              <Controller
                control={control}
                name="signature_url"
                render={({ field }) => (
                  <Input {...field} placeholder="signature_url" />
                )}
              />
            </Form.Item>

            <Form.Item
              label="Company Logo Url"
              name="company_logo_url"
              validateStatus={errors.company_logo_url ? "error" : ""}
              help={errors.company_logo_url && errors.company_logo_url.message}
            >
              <Controller
                control={control}
                name="company_logo_url"
                render={({ field }) => (
                  <Input {...field} placeholder="company_logo_url" />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

        <Flex gap={10} justify="flex-end">
          {/* <Button htmlType="button" onClick={reset}>
            Reset
          </Button> */}
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Flex>
      </Form>

      <DevTool control={control} />
    </div>
  );
}

export default UpdateCompany;
