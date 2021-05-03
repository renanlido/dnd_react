import { useContext, createContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from "react";

import { initialData } from "../initial-data";


const DndContext = createContext();

export function DndProvider({ children }) {
  const [data, setData] = useState(initialData);

  function onDragStart() {
    document.body.style.color = '#8257e6';
  }

  function onDragUpdate({ destination }) {
    const opacity = destination ? destination.index / Object.keys(data.tasks).length : 0;

    document.body.style.background = `rgba(153,141,217,${opacity})`;
  }

  function onDragEnd(result) {
    document.body.style.color = 'inherit';
    document.body.style.background = 'inherit';

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.draggableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        }
      }

      setData(newState);
      return;
    }

    //Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      }
    }

    setData(newState);

  }

  return (
    <DndContext.Provider value={{ data }}>
      <DragDropContext
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
      >
        {children}
      </DragDropContext>
    </DndContext.Provider>
  )
}

export function useDnd() {
  const context = useContext(DndContext);

  return context;
}