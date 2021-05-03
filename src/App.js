import { Dnd } from "./components/Dnd";

import { DndProvider } from './hooks/useDnd';

import { GlobalStyle } from "./styles/global";
import '@atlaskit/css-reset';

export default function App() {

  return (
    <DndProvider>
      <GlobalStyle />
      <Dnd/>
    </DndProvider>
  );
}

