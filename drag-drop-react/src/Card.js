
import React from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import DragDrop from './component/DragDrop'


export default function Card(){
  return(
    <DndProvider backend={HTML5Backend}>
      <div className='App'></div>
      <DragDrop />
    </DndProvider>

  )
}