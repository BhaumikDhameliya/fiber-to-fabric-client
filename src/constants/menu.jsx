import { Link } from "react-router-dom";

export const menubarOptionsList = [
  {
    path: "/dashboard",
    key: "Dashboard",
    label: <Link to="/dashboard">Dashboard</Link>,
  },
  {
    path: "/quality-master",
    key: "Quality Master",
    label: <Link to="/quality-master">Quality Master</Link>,
    children: [
      {
        path: "/quality-master/inhouse-quality",
        key: "Inhouse Quality",
        label: <Link to="quality-master/inhouse-quality">Inhouse Quality</Link>,
      },
      {
        path: "/quality-master/trading-quality",
        key: "Tranding Quality",
        label: (
          <Link to="quality-master/trading-quality">Tranding Quality</Link>
        ),
      },
    ],
  },
  {
    path: "/company",
    key: "Company",
    label: <Link to="/company">Company</Link>,
  },
  {
    path: "/user-master",
    key: "User Master",
    label: <Link to="/user-master">User Master</Link>,
    children: [
      {
        path: "my-supervisor",
        key: "My Supervisor",
        label: <Link to="user-master/my-supervisor">My Supervisor</Link>,
      },
      {
        path: "my-broker",
        key: "My Broker",
        label: <Link to="user-master/my-broker">My Broker</Link>,
      },
      {
        path: "my-parties",
        key: "My Parties",
        label: <Link to="user-master/my-parties">My Parties</Link>,
      },
      {
        path: "my-supplier",
        key: "My Supplier",
        label: <Link to="user-master/my-supplier">My Supplier</Link>,
      },
      {
        path: "my-employee",
        key: "My Employee",
        label: <Link to="user-master/my-employee">My Employee</Link>,
      },
      {
        path: "my-collection",
        key: "My Collection",
        label: <Link to="user-master/my-collection">My Collection</Link>,
      },
      {
        path: "my-accountant",
        key: "My Accountant",
        label: <Link to="user-master/my-accountant">My Accountant</Link>,
      },
      {
        path: "vehicle",
        key: "Vehicle",
        label: <Link to="user-master/vehicle">Vehicle</Link>,
      },
    ],
  },
  {
    path: "/tasks",
    key: "Tasks",
    label: <Link to="/tasks">Tasks</Link>,
    children: [
      {
        path: "daily-task",
        key: "Daily Task",
        label: <Link to="tasks/daily-task">Daily Task</Link>,
      },
      {
        path: "daily-task-report",
        key: "Daily Task Report",
        label: <Link to="tasks/daily-task-report">Daily Task Report</Link>,
      },
    ],
  },
  {
    path: "/production",
    key: "Production",
    label: <Link to="/production">Production</Link>,
    children: [
      {
        path: "add-new-production",
        key: "Add New Production",
        label: (
          <Link to="production/add-new-production">Add New Production</Link>
        ),
      },
      {
        path: "inhouse-production",
        key: "Inhouse Production",
        label: (
          <Link to="production/inhouse-production">Inhouse Production</Link>
        ),
      },
      {
        path: "opening-production",
        key: "Opening Production",
        label: (
          <Link to="production/opening-production">Opening Production</Link>
        ),
      },
      {
        path: "taka-tp-cutting",
        key: "Taka Tp/Cutting",
        label: <Link to="production/taka-tp-cutting">Taka Tp/Cutting</Link>,
      },
      {
        path: "monthly-production-report",
        key: "Monthly Production Report",
        label: (
          <Link to="production/monthly-production-report">
            Monthly Production Report
          </Link>
        ),
      },
      {
        path: "folding-production",
        key: "Folding Production Menu",
        label: (
          <Link to="production/folding-production">Folding Production</Link>
        ),
        children: [
          {
            path: "add-folding-production",
            key: "Add Folding Production",
            label: (
              <Link to="production/folding-production/add-folding-production">
                Add Folding Production
              </Link>
            ),
          },
          {
            path: "folding-production",
            key: "Folding Production",
            label: (
              <Link to="production/folding-production/folding-production">
                Folding Production
              </Link>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "sales",
    key: "Sales",
    label: <Link to="sales">Sales</Link>,
    children: [
      {
        path: "taka-return-request",
        key: "Taka Return Request",
        label: <Link to="sales/taka-return-request">Taka Return Request</Link>,
      },
      {
        path: "challan",
        key: "Challan Menu",
        label: <Link to="sales/challan">Challan</Link>,
        children: [
          {
            path: "grey-sale",
            key: "Grey Sale",
            label: <Link to="sales/challan/grey-sale">Grey Sale</Link>,
          },
          {
            path: "yarn-sale",
            key: "Yarn Sale",
            label: <Link to="sales/challan/yarn-sale">Yarn Sale</Link>,
          },
          {
            path: "beam-sale",
            key: "Beam Sale",
            label: <Link to="sales/challan/beam-sale">Beam Sale</Link>,
          },
          {
            path: "sale-challan",
            key: "Sale Challan",
            label: <Link to="sales/challan/sale-challan">Sale Challan</Link>,
          },
          {
            path: "sales-return",
            key: "Sales Return",
            label: <Link to="sales/challan/sales-return">Sales Return</Link>,
          },
        ],
      },
      {
        path: "bill",
        key: "Bill Menu",
        label: <Link to="sales/bill">Bill</Link>,
        children: [
          {
            path: "sales-bill-list",
            key: "Sales Bill List",
            label: <Link to="sales/bill/sales-bill-list">Sales Bill List</Link>,
          },
          {
            path: "yarn-sales-bill-list",
            key: "Yarn Sales Bill List",
            label: (
              <Link to="sales/bill/yarn-sales-bill-list">
                Yarn Sales Bill List
              </Link>
            ),
          },
          {
            path: "beam-sales-bill-list",
            key: "Beam Sales Bill List",
            label: (
              <Link to="sales/bill/beam-sales-bill-list">
                Beam Sales Bill List
              </Link>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/purchase",
    key: "Purchase",
    label: <Link to="/purchase">Purchase</Link>,
    children: [
      {
        path: "purchased-taka",
        key: "Purchased Taka",
        label: <Link to="purchase/purchased-taka">Purchased Taka</Link>,
      },
      {
        path: "general-purchase-entry",
        key: "General Purchase Entry",
        label: (
          <Link to="purchase/general-purchase-entry">
            General Purchase Entry
          </Link>
        ),
      },
      {
        path: "receive",
        key: "Receive Menu",
        label: <Link to="purchase/receive">Receive</Link>,
        children: [
          {
            path: "yarn-receive",
            key: "Yarn Receive",
            label: <Link to="purchase/receive/yarn-receive">Yarn Receive</Link>,
          },
        ],
      },
      {
        path: "/purchase-size-beam",
        key: "Purchase Size Beam",
        label: <Link to="purchase/purchase-size-beam">Purchase Size Beam</Link>,
        children: [
          {
            path: "send-beam-pipe",
            key: "Send Beam Pipe",
            label: (
              <Link to="purchase/purchase-size-beam/send-beam-pipe">
                Send Beam Pipe
              </Link>
            ),
          },
          {
            path: "bills-of-size-beam",
            key: "Bills Of Size Beam",
            label: (
              <Link to="purchase/purchase-size-beam/bills-of-size-beam">
                Bills Of Size Beam
              </Link>
            ),
          },
          {
            path: "receive-size-beam",
            key: "Receive Size Beam",
            label: (
              <Link to="purchase/purchase-size-beam/receive-size-beam">
                Receive Size Beam
              </Link>
            ),
          },
        ],
      },
      {
        path: "challan",
        key: "Purchase Challan Menu",
        label: <Link to="purchase/challan">Challan</Link>,
        children: [
          {
            path: "purchase-challan",
            key: "Purchase Challan",
            label: (
              <Link to="purchase/challan/purchase-challan">
                Purchase Challan
              </Link>
            ),
          },
          {
            path: "purchased-return",
            key: "Purchased Return",
            label: (
              <Link to="purchase/challan/purchased-return">
                Purchased Return
              </Link>
            ),
          },
          {
            path: "sale-purchased-taka",
            key: "Sale Purchased Taka",
            label: (
              <Link to="purchase/challan/sale-purchased-taka">
                Sale Purchased Taka
              </Link>
            ),
          },
        ],
      },
      {
        path: "bill",
        key: "Purchase Bill",
        label: <Link to="purchase/bill">Bill</Link>,
        children: [
          {
            path: "grey-purchased-bill",
            key: "Grey Purchased Bill",
            label: (
              <Link to="purchase/bill/grey-purchased-bill">
                Grey Purchased Bill
              </Link>
            ),
          },
          {
            path: "yarn-bills",
            key: "Yarn Bills",
            label: <Link to="purchase/bill/yarn-bills">Yarn Bills</Link>,
          },
        ],
      },
    ],
  },
  {
    path: "/job",
    key: "Job",
    label: <Link to="/job">Job</Link>,
    children: [
      {
        path: "job-taka",
        key: "Job Taka",
        label: <Link to="job/job-taka">Job Taka</Link>,
      },
      {
        path: "sent",
        key: "Sent",
        label: <Link to="job/sent">Sent</Link>,
        children: [
          {
            path: "beam-sent",
            key: "Beam Sent",
            label: <Link to="job/sent/beam-sent">Beam Sent</Link>,
          },
          {
            path: "yarn-sent",
            key: "Yarn Sent",
            label: <Link to="job/sent/yarn-sent">Yarn Sent</Link>,
          },
        ],
      },
      {
        path: "receive",
        key: "Receive",
        label: <Link to="job/receive">Receive</Link>,
        children: [
          {
            path: "beam-receive",
            key: "Beam Receive",
            label: <Link to="job/receive/beam-receive">Beam Receive</Link>,
          },
          {
            path: "taka-receive",
            key: "Taka Receive",
            label: <Link to="job/receive/taka-receive">Taka Receive</Link>,
          },
        ],
      },
      {
        path: "report",
        key: "Report",
        label: <Link to="job/report">Report</Link>,
        children: [
          {
            path: "beam-sent-report",
            key: "Beam Sent Report",
            label: (
              <Link to="job/report/beam-sent-report">Beam Sent Report</Link>
            ),
          },
          {
            path: "yarn-sent-report",
            key: "Yarn Sent Report",
            label: (
              <Link to="job/report/yarn-sent-report">Yarn Sent Report</Link>
            ),
          },
          {
            path: "job-cost-report",
            key: "Job Cost Report",
            label: <Link to="job/report/job-cost-report">Job Cost Report</Link>,
          },
          {
            path: "job-profit-report",
            key: "Job Profit Report",
            label: (
              <Link to="job/report/job-profit-report">Job Profit Report</Link>
            ),
          },
          {
            path: "job-yarn-stock-report",
            key: "Job Yarn Stock Report",
            label: (
              <Link to="job/report/job-yarn-stock-report">
                Job Yarn Stock Report
              </Link>
            ),
          },
          {
            path: "job-production",
            key: "Job Production",
            label: <Link to="job/report/job-production">Job Production</Link>,
          },
        ],
      },
      {
        path: "challan",
        key: "Challan",
        label: <Link to="job/challan">Challan</Link>,
        children: [
          {
            path: "job-challan",
            key: "Job Challan",
            label: <Link to="job/challan/job-challan">Job Challan</Link>,
          },
          {
            path: "sale-job-taka",
            key: "Sale Job Taka",
            label: <Link to="job/challan/sale-job-taka">Sale Job Taka</Link>,
          },
          {
            path: "rework-challan",
            key: "Rework Challan",
            label: <Link to="job/challan/rework-challan">Rework Challan</Link>,
          },
          {
            path: "receive-rework-taka",
            key: "Receive Rework Taka",
            label: (
              <Link to="job/challan/receive-rework-taka">
                Receive Rework Taka
              </Link>
            ),
          },
        ],
      },
      {
        path: "bill",
        key: "Bill",
        label: <Link to="job/bill">Bill</Link>,
        children: [
          {
            path: "job-bill",
            key: "Job Bill",
            label: <Link to="job/bill/job-bill">Job Bill</Link>,
          },
          {
            path: "rework-challan-bill",
            key: "Rework Challan Bill",
            label: (
              <Link to="job/bill/rework-challan-bill">Rework Challan Bill</Link>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/order-master",
    key: "Order Master",
    label: <Link to="/order-master">Order Master</Link>,
    children: [
      {
        path: "my-orders",
        key: "My Orders",
        label: <Link to="order-master/my-orders">My Orders</Link>,
      },
      {
        path: "my-yarn-orders",
        key: "My Yarn Orders",
        label: <Link to="order-master/my-yarn-orders">My Yarn Orders</Link>,
      },
      {
        path: "size-beam-order",
        key: "Size Beam Order",
        label: <Link to="order-master/size-beam-order">Size Beam Order</Link>,
      },
      {
        path: "schedule-delivery-list",
        key: "Schedule Delivery List",
        label: (
          <Link to="order-master/schedule-delivery-list">
            Schedule Delivery List
          </Link>
        ),
      },
    ],
  },
  {
    path: "/account",
    key: "Account",
    label: <Link to="/account">Account</Link>,
    children: [
      {
        path: "accounts-report",
        key: "Accounts Report",
        label: <Link to="account/accounts-report">Accounts Report</Link>,
      },
      {
        path: "payment",
        key: "Payment",
        label: <Link to="account/payment">Payment</Link>,
      },
      {
        path: "balance-sheet",
        key: "Balance Sheet",
        label: <Link to="account/balance-sheet">Balance Sheet</Link>,
      },
      {
        path: "profite-and-loss",
        key: "Profite & Loss",
        label: <Link to="account/profite-and-loss">Profite & Loss</Link>,
      },
      {
        path: "statement",
        key: "Statement",
        label: <Link to="account/statement">Statement</Link>,
        children: [
          {
            path: "passbook",
            key: "Passbook",
            label: <Link to="account/statement/passbook">Passbook</Link>,
          },
          {
            path: "cashbook",
            key: "Cashbook",
            label: <Link to="account/statement/cashbook">Cashbook</Link>,
          },
          {
            path: "emi-loan",
            key: "EMI Loan",
            label: <Link to="account/statement/emi-loan">EMI Loan</Link>,
          },
          {
            path: "bank-reconciliation",
            key: "Bank Reconciliation",
            label: (
              <Link to="account/statement/bank-reconciliation">
                Bank Reconciliation
              </Link>
            ),
          },
          {
            path: "cashbook-verify",
            key: "Cashbook Verify",
            label: (
              <Link to="account/statement/cashbook-verify">
                Cashbook Verify
              </Link>
            ),
          },
        ],
      },
      {
        path: "reports",
        key: "Reports",
        label: <Link to="account/reports">Reports</Link>,
        children: [
          {
            path: "sales-report",
            key: "Sales Report",
            label: <Link to="account/reports/sales-report">Sales Report</Link>,
          },
          {
            path: "cost-and-profit-report",
            key: "Cost And Profit Report",
            label: (
              <Link to="account/reports/cost-and-profit-report">
                Cost And Profit Report
              </Link>
            ),
          },
          {
            path: "purchase-report",
            key: "Purchase Report",
            label: (
              <Link to="account/reports/purchase-report">Purchase Report</Link>
            ),
          },
          {
            path: "ledger-report",
            key: "Ledger Report",
            label: (
              <Link to="account/reports/ledger-report">Ledger Report</Link>
            ),
          },
          {
            path: "particular-ledger-report",
            key: "Particular Ledger Report",
            label: (
              <Link to="account/reports/particular-ledger-report">
                Particular Ledger Report
              </Link>
            ),
          },
          {
            path: "gstr-1-report",
            key: "GSTR-1 Report",
            label: (
              <Link to="account/reports/gstr-1-report">GSTR-1 Report</Link>
            ),
          },
          {
            path: "gstr-2-report",
            key: "GSTR-2 Report",
            label: (
              <Link to="account/reports/gstr-2-report">GSTR-2 Report</Link>
            ),
          },
          {
            path: "gstr-3b-report",
            key: "GSTR-3B Report",
            label: (
              <Link to="account/reports/gstr-3b-report">GSTR-3B Report</Link>
            ),
          },
          {
            path: "passbook-cashbook-balance",
            key: "Passbook/Cashbook Balance",
            label: (
              <Link to="account/reports/passbook-cashbook-balance">
                Passbook/Cashbook Balance
              </Link>
            ),
          },
          {
            path: "turnover",
            key: "Turnover",
            label: <Link to="account/reports/turnover">Turnover</Link>,
          },
          {
            path: "live-stock-report",
            key: "Live Stock Report",
            label: (
              <Link to="account/reports/live-stock-report">
                Live Stock Report
              </Link>
            ),
          },
          {
            path: "monthly-transaction-report",
            key: "Monthly Transaction Report",
            label: (
              <Link to="account/reports/monthly-transaction-report">
                Monthly Transaction Report
              </Link>
            ),
          },
        ],
      },
      {
        path: "notes",
        key: "Notes",
        label: <Link to="account/notes">Notes</Link>,
        children: [
          {
            path: "credit-notes",
            key: "Credit Notes",
            label: <Link to="account/notes/credit-notes">Credit Notes</Link>,
          },
          {
            path: "debit-notes",
            key: "Debit Notes",
            label: <Link to="account/notes/debit-notes">Debit Notes</Link>,
          },
        ],
      },
      {
        path: "group-wise-outstanding",
        key: "Group Wise Outstanding",
        label: (
          <Link to="account/group-wise-outstanding">
            Group Wise Outstanding
          </Link>
        ),
        children: [
          {
            path: "sundry-debtors",
            key: "Sundry Debtors",
            label: (
              <Link to="account/group-wise-outstanding/sundry-debtors">
                Sundry Debtors
              </Link>
            ),
          },
          {
            path: "sundry-creditors",
            key: "Sundry Creditors",
            label: (
              <Link to="account/group-wise-outstanding/sundry-creditors">
                Sundry Creditors
              </Link>
            ),
          },
        ],
      },
      {
        path: "cost-per-meter",
        key: "Cost Per Meter",
        label: <Link to="account/cost-per-meter">Cost Per Meter</Link>,
      },
      {
        path: "salary-master",
        key: "Salary Master",
        label: <Link to="account/salary-master">Salary Master</Link>,
        children: [
          {
            path: "employee-salary-report",
            key: "Employee Salary Report",
            label: (
              <Link to="account/salary-master/employee-salary-report">
                Employee Salary Report
              </Link>
            ),
          },
          {
            path: "employee-advance-salary",
            key: "Eemployee Advance Salary",
            label: (
              <Link to="account/salary-master/employee-advance-salary">
                Eemployee Advance Salary
              </Link>
            ),
          },
          {
            path: "employee-average-report",
            key: "Employee Average Report",
            label: (
              <Link to="account/salary-master/employee-average-report">
                Employee Average Report
              </Link>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/more",
    key: "More",
    label: <Link to="/more">More</Link>,
    children: [
      {
        path: "machine",
        key: "Machine",
        label: <Link to="machine">Machine</Link>,
      },
      {
        path: "material",
        key: "Material",
        label: <Link to="material">Material</Link>,
      },
      {
        path: "yarn-stock-company",
        key: "Yarn Stock Company",
        label: <Link to="yarn-stock-company">Yarn Stock Company</Link>,
        children: [
          {
            path: "company-list",
            key: "Company List",
            label: (
              <Link to="yarn-stock-company/company-list">Company List</Link>
            ),
          },
          {
            path: "manage-yarn-stock",
            key: "Manage Yarn Stock",
            label: (
              <Link to="yarn-stock-company/manage-yarn-stock">
                Manage Yarn Stock
              </Link>
            ),
          },
        ],
      },
      {
        path: "beam-card",
        key: "Beam Card",
        label: <Link to="beam-card">Beam Card</Link>,
      },
      {
        path: "require-ready-beam",
        key: "Require Ready Beam",
        label: <Link to="require-ready-beam">Require Ready Beam</Link>,
      },
      {
        path: "seeking",
        key: "Seeking",
        label: <Link to="seeking">Seeking</Link>,
      },
      {
        path: "cost calculator",
        key: "Cost Calculator",
        label: <Link to="cost calculator">Cost Calculator</Link>,
      },
      {
        path: "today-report",
        key: "Today Report",
        label: <Link to="today-report">Today Report</Link>,
      },
      {
        path: "gate-pass",
        key: "Gate Pass",
        label: <Link to="gate-pass">Gate Pass</Link>,
      },
    ],
  },
];
