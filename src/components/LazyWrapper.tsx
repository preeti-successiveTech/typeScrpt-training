"use client";

import dynamic, { Loader } from "next/dynamic";
import React from "react";

export default function LazyWrapper<T extends React.ComponentType<any>>(
  dynamicImportFn: Loader<T>
) {
  return dynamic(dynamicImportFn, {
    loading: () => <p>Loading...</p>,
    ssr: false,
  });
}
