import { Draggable } from 'react-beautiful-dnd';

import { Container } from './styles';
 
export function Task({ task, index }) {
  return (
    <Draggable draggable={task.id} draggableId={task.id} index={index}>
      {(provided, snapshot)=> (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
        { task.content }</Container>
      )}
      
    </Draggable>
  );
}