import styled from 'styled-components';

export const Container = styled.div`
  margin: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  padding: 0.5rem;
`;

export const TaskList = styled.div`
  padding: 8px;
  transition: background 0.2s ease;
  background: ${props => props.isDraggingOver ? 'skyblue' : 'white'};
  flex-grow: 1;
  min-height: 100px;
`