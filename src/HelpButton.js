import React from "react";
import styled from "styled-components";
import Tooltip from "@reach/tooltip";

function HelpButton() {
  return (
    <Tooltip label="Contact support" aria-label="Contact support">
      <Wrapper>?</Wrapper>
    </Tooltip>
  );
}

const Wrapper = styled.button`
  position: fixed;
  right: 16px;
  bottom: 16px;
  color: white;
  background: hsl(0deg, 0%, 20%);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  /* put it on same level as wrapper, and wrapper has it's own stacking context isolation: isolate */
  /* z-index: 2; */
`;

export default HelpButton;
