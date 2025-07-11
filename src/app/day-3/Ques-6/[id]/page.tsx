"use client";

import { useParams } from "next/navigation";
import products from "../../myproducts";

type Params = {
  id: string;
};

export default function ProductDetails() {
  const params = useParams() as Params;
  const id = parseInt(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <table style={{ borderCollapse: "collapse", width: "80%", textAlign: "left" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Stock</th>
            <th style={thStyle}>Brand</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>{product.name}</td>
            <td style={tdStyle}>{product.category}</td>
            <td style={tdStyle}>{product.description}</td>
            <td style={tdStyle}>${product.price}</td>
            <td style={tdStyle}>{product.stock}</td>
            <td style={tdStyle}>{product.brand}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  padding: "12px",
  border: "1px solid #ddd",
  fontWeight: "bold",
};

const tdStyle: React.CSSProperties = {
  padding: "12px",
  border: "1px solid #ddd",
};
