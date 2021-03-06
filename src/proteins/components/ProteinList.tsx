import * as React from 'react'

import { ListActions } from '../../components/ListActions'
import { PocketRadius } from '../../pocketradius'
import { IProtein } from '../types'
import { ProteinListItem } from './ProteinListItem'

export interface IOwnProps {
  proteins: IProtein[]
  pocketRadius: number
}

export interface IDispatchProps {
  onPocketRadiusChange(radius: number): void
  onProteinVisibilityClick(proteinId: string): void
  onHeteroVisibilityClick(proteinId: string): void
  onPocketVisibilityClick(proteinId: string): void
  onWholeProteinVisibilityClick(proteinId: string): void
  onShowAllClick(): void
  onHideAllClick(): void
}

export type IProps = IOwnProps & IDispatchProps

export const ProteinList = (props: IProps) => {
  let listactions: JSX.Element = <div />
  if (props.proteins.length > 1) {
    listactions = (
      <ListActions
        hideAll={props.onHideAllClick}
        showAll={props.onShowAllClick}
      />
    )
  }
  const proteins = props.proteins.map(protein => (
    <ProteinListItem
      key={protein.id}
      {...protein}
      onProteinVisibilityClick={props.onProteinVisibilityClick}
      onPocketVisibilityClick={props.onPocketVisibilityClick}
      onHeteroVisibilityClick={props.onHeteroVisibilityClick}
      onWholeProteinVisibilityClick={props.onWholeProteinVisibilityClick}
    />
  ))

  return (
    <div style={{ overflowY: 'auto' }}>
      <h5>Proteins</h5>
      <PocketRadius
        value={props.pocketRadius}
        onChange={props.onPocketRadiusChange}
      />
      {listactions}
      <table className="table table-condensed">
        <tbody>{proteins}</tbody>
      </table>
    </div>
  )
}
