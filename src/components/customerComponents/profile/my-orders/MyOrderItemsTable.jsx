import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const columns = [
  { id: "item", label: "Item", minWidth: 250 },
  { id: "quantity", label: "Quantity", minWidth: 100, align: "center" },
  { id: "price", label: "Price", minWidth: 100, align: "right" },
  { id: "price", label: "", minWidth: 140, align: "right" },
];

const rows = [
  {
    id: "2021-03-11T06:39:46.000000Z",
    item: {
      image:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/208/conversions/hersheys_kisses-thumbnail.jpg",
      name: "Hersheys Kisses",
      details: "0.2lb",
      price: "$3.50",
    },
    quantity: 1,
    price: "$3.50",
  },
  {
    id: "2021-03-11T06:42:18.000000Z",
    item: {
      image:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/209/conversions/m%26m_funsize-thumbnail.jpg",
      name: "M & M Funsize",
      details: "0.1lb",
      price: "$1.00",
    },
    quantity: 1,
    price: "$1.00",
  },
  {
    id: "2021-03-11T06:34:03.000000Z",
    item: {
      image:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/205/conversions/cadbury-dairy-milk-reclose-thumbnail.jpg",
      name: "Dairy Milk Reclose",
      details: "0.2lb",
      price: "$3.50",
    },
    quantity: 1,
    price: "$3.50",
  },
  {
    id: "2021-03-11T06:36:42.000000Z",
    item: {
      image:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/206/conversions/cloetta-thumbnail.jpg",
      name: "Cloetta Chocowoffle Crispy",
      details: "0.2lb",
      price: "$2.50",
    },
    quantity: 1,
    price: "$2.50",
  },
  {
    id: "2021-03-11T06:38:03.000000Z",
    item: {
      image:
        "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/207/conversions/cloetta_sprinkle-thumbnail.jpg",
      name: "Cloetta Sprinkle",
      details: "0.2lb",
      price: "$3.00",
    },
    quantity: 1,
    price: "$3.00",
  },
];

const MyOrderItemsTable = () => {
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <div className="flex items-center">
                  <div className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded">
                    <img
                      alt={row.item.name}
                      src={row.item.image}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col overflow-hidden ml-4">
                    <div className="flex space-x-1">
                      <a
                        href={`/products/${encodeURIComponent(
                          row.item.name.toLowerCase()
                        )}`}
                        className="truncate text-sm text-[#6b7280] hover:text-accent hover:underline"
                      >
                        {row.item.name}
                      </a>
                      <span className="inline-block overflow-hidden truncate text-sm text-[#6b7280]">
                        x
                      </span>
                      <span className="truncate text-sm font-semibold text-heading">
                        {row.item.details}
                      </span>
                    </div>
                    <span className="truncate text-sm font-semibold text-[#009f7f]">
                      {row.item.price}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell align="center">
                <p className="text-base">{row.quantity}</p>
              </TableCell>
              <TableCell align="right">
                <div>{row.price}</div>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyOrderItemsTable;
