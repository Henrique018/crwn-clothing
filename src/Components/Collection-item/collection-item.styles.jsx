import styled from "styled-components";
import CustomButton from "../custom-button/Custom-Buttom.component";

const getImage = props => {
  return props.imageUrl;
};

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    button {
      display: flex;
      opacity: 0.85;
    }
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 95%;
  background-image: url(${getImage});
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

export const CustomButtonContainer = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  &:hover {
    display: flex;
    opacity: 0.85;
  }
`;

export const CollectionFooterContainer = styled.footer`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
export const Price = styled.span`
  width: 10%;
`;
