import styled from 'styled-components';

export const CustomScrollBar = styled.div`
  &::-webkit-scrollbar {
    width: 5px;
    display: none;
  }

  &:hover::-webkit-scrollbar {
    display: block;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(109, 109, 109, 0.576);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #acacac06;
  }
`;
