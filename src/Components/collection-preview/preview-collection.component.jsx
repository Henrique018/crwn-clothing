import React from "react";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./collection-preview.styles";

import CollectionItem from ".././Collection-item/Collection-item.component";

const CollectionPreview = ({ title, items,history}) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={()=> history.push(`/${title}`)}>{title}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};
export default CollectionPreview;
