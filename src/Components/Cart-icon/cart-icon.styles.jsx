import styled from "styled-components";

import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";

export const CartIconContainer = styled.div`
  width: 47px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  width: 30px;
  height: 26px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 11px;
  font-weight: bold;
  bottom: 12px;
`;
