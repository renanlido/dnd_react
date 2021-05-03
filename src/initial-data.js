export const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Pegue e arraste'},
    'task-2': {id: 'task-2', content: 'Jogue onde quiser'},
    'task-3': {id: 'task-3', content: 'Arraste onde quiser'},
    'task-4': {id: 'task-4', content: 'Mude a ordem de tudo'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'A fazer 🤞',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Em progresso ✌️',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Terminadas 👌',
      taskIds: [],
    }
    
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1','column-2','column-3'],
}