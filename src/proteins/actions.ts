import { IOtherAction, OtherAction } from '../actions'
import {
  PROTEIN_TOGGLE_HETVISIBILITY,
  PROTEIN_TOGGLE_POCKETVISIBILITY,
  PROTEIN_TOGGLE_PROTEINVISIBILITY,
  PROTEIN_TOGGLE_VISIBILITY,
  PROTEINS_FETCH_REQUESTED,
  PROTEINS_FETCH_SUCCEEDED,
  PROTEINS_HIDE,
  PROTEINS_SHOW
} from './constants'
import { IProtein } from './types'

export interface IToggleVisibility {
  type: PROTEIN_TOGGLE_VISIBILITY
  id: string
}

export const toggleVisibility = (id: string): IToggleVisibility => ({
  type: PROTEIN_TOGGLE_VISIBILITY,
  id
})

export interface IToggleHetVisibility {
  type: PROTEIN_TOGGLE_HETVISIBILITY
  id: string
}

export const toggleHetVisibility = (id: string): IToggleHetVisibility => ({
  type: PROTEIN_TOGGLE_HETVISIBILITY,
  id
})

export interface ITogglePocketVisibility {
  type: PROTEIN_TOGGLE_POCKETVISIBILITY
  id: string
}

export const togglePocketVisibility = (
  id: string
): ITogglePocketVisibility => ({
  type: PROTEIN_TOGGLE_POCKETVISIBILITY,
  id
})

export interface IToggleProteinVisibility {
  type: PROTEIN_TOGGLE_PROTEINVISIBILITY
  id: string
}

export const toggleProteinVisibility = (
  id: string
): IToggleProteinVisibility => ({
  type: PROTEIN_TOGGLE_PROTEINVISIBILITY,
  id
})

export interface IFetchRequested {
  type: PROTEINS_FETCH_REQUESTED
}

export const fetchRequested = (): IFetchRequested => ({
  type: PROTEINS_FETCH_REQUESTED
})

export interface IFetchSucceeded {
  type: PROTEINS_FETCH_SUCCEEDED
  proteins: IProtein[]
}

export const fetchSucceeded = (proteins: IProtein[]): IFetchSucceeded => ({
  type: PROTEINS_FETCH_SUCCEEDED,
  proteins
})

export interface IShowAll {
  type: PROTEINS_SHOW
}
export const showAll = (): IShowAll => ({
  type: PROTEINS_SHOW
})

export interface IHideAll {
  type: PROTEINS_HIDE
}
export const hideAll = (): IHideAll => ({
  type: PROTEINS_HIDE
})

type toggleAction =
  | IToggleHetVisibility
  | ITogglePocketVisibility
  | IToggleProteinVisibility
  | IToggleVisibility
  | IShowAll
  | IHideAll

export type ProteinAction =
  | toggleAction
  | IFetchRequested
  | IFetchSucceeded
  | IOtherAction
export { OtherAction }
