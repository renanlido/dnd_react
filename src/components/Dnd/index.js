import { Column } from "../Column";

import { useDnd } from '../../hooks/useDnd';

import { Container } from './styles';

export function Dnd(){
  const { data } = useDnd();

  return (
    <Container> 
    {
      data.columnOrder.map(columnId => {
      const column = data.columns[columnId];
      const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks}/>;
    })
    }
    </Container>
  );
}