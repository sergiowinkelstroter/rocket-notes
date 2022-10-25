import * as C from "./styles";

import React from "react";

export const Tag = ({ title, ...rest }) => {
  return <C.Container {...rest}>{title}</C.Container>;
};
