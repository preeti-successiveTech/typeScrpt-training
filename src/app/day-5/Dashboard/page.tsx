"use client";

import withAuth from "@/components/WithAuth";



function Dashboard() {
  return <h1>Welcome to the Dashboard (Protected)</h1>;
}

export default withAuth(Dashboard);
