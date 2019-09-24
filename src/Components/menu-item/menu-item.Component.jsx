import React from "react";

import {
  MenuItemContainer,
  ContentContainer,
  BackgroundImgContainer,
  TitleContainer,
  SubtitleContainer
} from "./menu-item.styles";

import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.path}${linkUrl}`)}
    >
      <BackgroundImgContainer imageUrl={imageUrl} />

      <ContentContainer>

        <TitleContainer>{title}</TitleContainer>
        <SubtitleContainer>SHOW NOW!</SubtitleContainer>
        
      </ContentContainer>

    </MenuItemContainer>
  );
};
export default withRouter(MenuItem);
