import React from 'react'
import styled from 'styled-components'

// 
const Container = styled.div`
    display: flex;
`;

// Left and right panes will take up an equal amount of space
const Pane = styled.div`
    flex: ${props => props.weight};
`;

export default function SplitScreen({
    children,
    leftWeight = 1,
    rightWeight = 1,
}) {
    const [left, right] = children;
  return (
    <Container>
        <Pane weight = {leftWeight}>
            {left}
        </Pane>
        <Pane weight = {rightWeight}>
            {right}
        </Pane>
    </Container>
  )
}
