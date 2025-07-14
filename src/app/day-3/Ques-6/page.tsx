import Link from "next/link";
import products from "../myproducts";

export default function PageProduct(): React.ReactNode {
  return (
    <div style={{ textAlign: "center", paddingTop: "30px", fontSize: "30px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {products.map((item, index) => (
          <div key={item.id}>
            <Link href={`Ques-6/${item.id}`}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
