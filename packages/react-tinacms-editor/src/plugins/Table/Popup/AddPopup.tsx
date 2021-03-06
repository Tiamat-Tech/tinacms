/**

Copyright 2021 Forestry.io Holdings, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import React from 'react'

import { useEditorStateContext } from '../../../context/editorState'
import AddColumn from './AddColumn'
import AddRow from './AddRow'

export default () => {
  const { editorView } = useEditorStateContext()
  if (!editorView) return null
  const markerDivTable = document.getElementsByClassName(
    'tina_table_header_ext_top_left'
  )
  if (!markerDivTable.length) return null
  const tableElm = markerDivTable[0].closest('table')
  if (!tableElm) return null
  const { height, width } = tableElm.getBoundingClientRect()
  const markerDivCol = document.getElementsByClassName(
    'tina_table_header_ext_top'
  )
  const markerCols = [markerDivTable[0]]
  for (let i = 0; i < markerDivCol.length; i++) {
    markerCols.push(markerDivCol[i])
  }
  const markerDivRow = document.getElementsByClassName(
    'tina_table_header_ext_left'
  )
  const markerRows = [markerDivTable[0]]
  for (let i = 0; i < markerDivRow.length; i++) {
    markerRows.push(markerDivRow[i])
  }
  const { view } = editorView
  return (
    <>
      {markerCols.map((marker, index) => (
        <AddColumn
          key={`add-column-menu-${index}`}
          index={index}
          marker={marker as HTMLElement}
          tableHeight={height}
          view={view}
        />
      ))}
      {markerRows.map((marker, index) => (
        <AddRow
          key={`add-row-menu-${index}`}
          index={index}
          marker={marker as HTMLElement}
          tableWidth={width}
          view={view}
        />
      ))}
    </>
  )
}
