import { ReactNode } from "react";

export interface IContainerProps {
  children: ReactNode;
}

export default function Container(props: IContainerProps) {
  return <div className="container">{props.children}</div>;
}
