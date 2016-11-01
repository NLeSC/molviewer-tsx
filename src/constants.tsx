// Server sent action types
export type SERVER_DISCONNECT = 'SERVER_DISCONNECT';
export const SERVER_DISCONNECT: SERVER_DISCONNECT = 'SERVER_DISCONNECT';

export type SERVER_MODEL_CHANGED = 'SERVER_MODEL_CHANGED';
export const SERVER_MODEL_CHANGED: SERVER_MODEL_CHANGED = 'SERVER_MODEL_CHANGED';

// ligand action types
export type LIGAND_TOGGLE_VISIBILITY = 'LIGAND_TOGGLE_VISIBILITY';
export const LIGAND_TOGGLE_VISIBILITY: LIGAND_TOGGLE_VISIBILITY = 'LIGAND_TOGGLE_VISIBILITY';

// ligands action types
export type LIGANDS_FETCH_REQUESTED = 'LIGANDS_FETCH_REQUESTED';
export const LIGANDS_FETCH_REQUESTED: LIGANDS_FETCH_REQUESTED = 'LIGANDS_FETCH_REQUESTED';

export type LIGANDS_FETCH_SUCCEEDED = 'LIGANDS_FETCH_SUCCEEDED';
export const LIGANDS_FETCH_SUCCEEDED: LIGANDS_FETCH_SUCCEEDED = 'LIGANDS_FETCH_SUCCEEDED';

export type LIGANDS_FETCH_FAILED = 'LIGANDS_FETCH_FAILED';
export const LIGANDS_FETCH_FAILED: LIGANDS_FETCH_FAILED = 'LIGANDS_FETCH_FAILED';

// protein action types
export type PROTEIN_TOGGLE_VISIBILITY = 'PROTEIN_TOGGLE_VISIBILITY';
export const PROTEIN_TOGGLE_VISIBILITY: PROTEIN_TOGGLE_VISIBILITY = 'PROTEIN_TOGGLE_VISIBILITY';

export type PROTEIN_TOGGLE_HETVISIBILITY = 'PROTEIN_TOGGLE_HETVISIBILITY';
export const PROTEIN_TOGGLE_HETVISIBILITY: PROTEIN_TOGGLE_HETVISIBILITY = 'PROTEIN_TOGGLE_HETVISIBILITY';

// proteins action types
export type PROTEINS_FETCH_REQUESTED = 'PROTEINS_FETCH_REQUESTED';
export const PROTEINS_FETCH_REQUESTED: PROTEINS_FETCH_REQUESTED = 'PROTEINS_FETCH_REQUESTED';

export type PROTEINS_FETCH_SUCCEEDED = 'PROTEINS_FETCH_SUCCEEDED';
export const PROTEINS_FETCH_SUCCEEDED: PROTEINS_FETCH_SUCCEEDED = 'PROTEINS_FETCH_SUCCEEDED';

export type PROTEINS_FETCH_FAILED = 'PROTEINS_FETCH_FAILED';
export const PROTEINS_FETCH_FAILED: PROTEINS_FETCH_FAILED = 'PROTEINS_FETCH_FAILED';