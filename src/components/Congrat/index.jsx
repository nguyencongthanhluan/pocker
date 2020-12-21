import React, { memo } from "react";

const Congrat = () => {
  return <div>Congratulation! You are the winner.</div>;
};

export default memo(Congrat); //memo tương tự pureComponent
