import React from "react";

type FetchDataFn<T> = () => Promise<T>;

export default function withDataFetching<P, T>(
  WrappedComponent: React.ComponentType<P & { data: T }>,
  fetchData: FetchDataFn<T>
) {
  return async function WrappedWithFetchedData(props: P) {
    const data = await fetchData();

    return <WrappedComponent {...props} data={data} />;
  };
}
