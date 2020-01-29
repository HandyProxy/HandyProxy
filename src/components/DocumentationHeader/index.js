import React from 'react';
import styled from 'styled-components';

const Code = styled.code`
  background-color: #f1f1f1;
  font-size: 13px;
`;

const DocumentationWrapper = styled.div`
  text-align: center;
`;

export default () => (
  <DocumentationWrapper>
    <Code>GET https://handyproxy-proxies.s3.eu-central-1.amazonaws.com/proxies.json</Code>
  </DocumentationWrapper>
);
