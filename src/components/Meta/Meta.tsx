import React from "react";
import { Helmet } from "react-helmet";

type MetaProps = {
  title: string;
};

const Meta: React.FunctionComponent<MetaProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Meta;
