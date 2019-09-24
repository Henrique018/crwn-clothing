import styled from "styled-components";

const getSize = props => (props.size ? `height:380px` : `height:240px`);

const getImage = props => props.imageUrl;

export const MenuItemContainer = styled.section`
  ${getSize}
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  text-transform: uppercase;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;
    div {
     opacity:0.95;
    }
  }
`;

export const BackgroundImgContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${getImage});
  background-position: center;
  background-size: cover;
  position: relative;

  &:hover {
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 4px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #fff;
  opacity: 0.7;
  position: absolute;
`;

export const TitleContainer = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubtitleContainer = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
