import styled, { css } from 'styled-components'
import { fadeIn } from './../../styles/animation'
export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${props => props.fixed && css`
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
    ${fadeIn({ time: '0.5s' })};
  `}

`

export const Item = styled.li`
    padding: 0px 8px;
`
