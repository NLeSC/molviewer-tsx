import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { actions as pactions } from '../../pocketradius'
import * as actions from '../actions'
import {
  IDispatchProps,
  IOwnProps,
  PharmacophoreList as PharmacophoreListComponent
} from '../components/PharmacophoreList'

const mapStateToProps = (_state: {}, ownProps: IOwnProps) => ownProps

type TDispatch = pactions.PocketAction | actions.PharmacophoreAction

export type IDispatch = Dispatch<TDispatch>

export const mapDispatchToProps = (
  dispatch: IDispatch,
  ownProps: IOwnProps
): IDispatchProps => {
  return {
    onHiLiteShownClick: () => {
      const ids = ownProps.pharmacophores.filter(d => d.visible).map(d => d.id)
      dispatch(actions.hiLiteShown(ids))
    },
    onHideAllClick: () => dispatch(actions.hideAll()),
    onLigandVisibilityClick: (id: string) =>
      dispatch(actions.toggleLigandVisibility(id)),
    onPharmacophoreContainerVisibilityClick: (id: string) =>
      dispatch(actions.toggleContainerVisibility(id)),
    onPharmacophoreSolidClick: (id: string) =>
      dispatch(actions.togglePharmacophoreOpacity(id)),
    onPharmacophoreVisibilityClick: (id: string) =>
      dispatch(actions.togglePharmacophoreVisibility(id)),
    onPocketRadiusChange: (radius: number) =>
      dispatch(pactions.adjustPocketRadius(radius)),
    onPocketVisibilityClick: (id: string) =>
      dispatch(actions.togglePocketVisibility(id)),
    onProteinVisibilityClick: (id: string) =>
      dispatch(actions.toggleProteinVisibility(id)),
    onShowAllClick: () => dispatch(actions.showAll())
  }
}

const connector = connect<{}, IDispatchProps, IOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)
export const PharmacophoreList = connector(PharmacophoreListComponent)
