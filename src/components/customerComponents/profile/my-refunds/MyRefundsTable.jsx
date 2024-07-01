import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const columns = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "refundReason", label: "Refund Reason", minWidth: 250 },
  { id: "status", label: "Status", minWidth: 200 },
  { id: "trackingNumber", label: "Tracking Number", minWidth: 200 },
  { id: "amount", label: "Amount", minWidth: 200, align: "right" },
  { id: "date", label: "Date", minWidth: 200 },
  { id: "details", label: "Details", minWidth: 100 },
];

const rows = [
  {
    id: 1,
    refundReason: "Item not as described",
    status: "Processed",
    trackingNumber: "123456789",
    amount: 29.99,
    date: "2023-06-01",
    details: "View",
  },
  {
    id: 2,
    refundReason: "Defective item",
    status: "Pending",
    trackingNumber: "234567891",
    amount: 45.5,
    date: "2023-06-02",
    details: "View",
  },
  {
    id: 3,
    refundReason: "Incorrect item",
    status: "Shipped",
    trackingNumber: "345678912",
    amount: 13.2,
    date: "2023-06-03",
    details: "View",
  },
  {
    id: 4,
    refundReason: "Late delivery",
    status: "Processed",
    trackingNumber: "456789123",
    amount: 99.99,
    date: "2023-06-04",
    details: "View",
  },
  {
    id: 5,
    refundReason: "Item not received",
    status: "Pending",
    trackingNumber: "567891234",
    amount: 25.0,
    date: "2023-06-05",
    details: "View",
  },
  {
    id: 6,
    refundReason: "Changed mind",
    status: "Shipped",
    trackingNumber: "678912345",
    amount: 75.75,
    date: "2023-06-06",
    details: "View",
  },
  {
    id: 7,
    refundReason: "Item damaged",
    status: "Processed",
    trackingNumber: "789123456",
    amount: 50.5,
    date: "2023-06-07",
    details: "View",
  },
  {
    id: 8,
    refundReason: "Incorrect size",
    status: "Pending",
    trackingNumber: "891234567",
    amount: 33.33,
    date: "2023-06-08",
    details: "View",
  },
  {
    id: 9,
    refundReason: "Better price elsewhere",
    status: "Shipped",
    trackingNumber: "912345678",
    amount: 20.0,
    date: "2023-06-09",
    details: "View",
  },
  {
    id: 10,
    refundReason: "Poor quality",
    status: "Processed",
    trackingNumber: "123456780",
    amount: 60.0,
    date: "2023-06-10",
    details: "View",
  },
];

const MyRefundsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead style={{ backgroundColor: "#f3f4f6" }}>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{
                  minWidth: column.minWidth,
                  color: "#1f2937",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                No data found
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === "number"
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyRefundsTable;
