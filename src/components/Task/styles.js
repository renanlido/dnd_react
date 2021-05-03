import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: ${ props => (props.isDragging ? 'lightgreen' : 'white' ) };


`;