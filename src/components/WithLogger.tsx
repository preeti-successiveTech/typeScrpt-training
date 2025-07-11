

import React, { useEffect, useRef } from "react";

export default function withLogger<P extends React.JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>
) {
  const LoggerComponent: React.FC<P> = (props) => {
    const isMounted = useRef(false);

    useEffect(() => {
      console.log(
        `${WrappedComponent.displayName || WrappedComponent.name || "Component"} mounted`
      );
      isMounted.current = true;

      return () => {
        console.log(
          `${WrappedComponent.displayName || WrappedComponent.name || "Component"} unmounted`
        );
      };
    }, []);

    useEffect(() => {
      if (isMounted.current) {
        console.log(
          `${WrappedComponent.displayName || WrappedComponent.name || "Component"} updated`
        );
      }
    });

    return <WrappedComponent {...props} />;
  };

  LoggerComponent.displayName = `withLogger(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return LoggerComponent;
}
