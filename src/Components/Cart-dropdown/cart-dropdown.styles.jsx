import styled from "styled-components";
import CustomButton from "../custom-button/Custom-Buttom.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 5px;
  z-index: 5;

`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;

  //custom scroll
  overflow-y: scroll;

  /* width */
  &::-webkit-scrollbar {
    width: 8px;
    color: black;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 12px;
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: grey;
   
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: gray;
  margin: 50px auto;
`;

export const CustomButtonContainer = styled(CustomButton)`
  margin-top: 15px;
  position: static;
`;
