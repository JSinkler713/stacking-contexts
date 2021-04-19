import React from "react";
import styled from "styled-components";

import LoadingSpinner from "./vendor/LoadingSpinner";
import Sidebar from "./Sidebar";

function PageContent() {
  return (
    <Row>
      
      <MainContent>
        {/* Normally, an app would load here. */}
        <LoadingSpinner />
        <BigZ>Hey I have z-index of 1000</BigZ>
      </MainContent>
      <Sidebar />
    </Row>
  );
}

const Row = styled.div`
  position: relative;
`;

const BigZ = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100px;
  height: 100px;
  margin: auto;
`

const MainContent = styled.main`
  padding: 64px;
  padding-right: 304px;
  display: flex;
  justify-content: center;
`;

export default PageContent;
