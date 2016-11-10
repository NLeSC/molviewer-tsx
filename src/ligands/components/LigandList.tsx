import * as React from 'react';

import { ListActions } from '../../components/ListActions';
import { ILigand } from '../types';
import { LigandListItem } from './LigandListItem';

interface ILigandListProps {
    ligands: ILigand[];
    onLigandVisibilityClick(ligandId: string): void;
    onShowAllClick(): void;
    onHideAllClick(): void;
    onHiLiteShownClick(ids: string[]): void;
}

function onClickShownLigands(func: (ids: string[]) => void, ligands: ILigand[]) {
    // ids of all shown ligands
    const ids = ligands.filter(l => l.visible).map(l => l.id);
    return () => func(ids);
}

export const LigandList = ({ligands, onLigandVisibilityClick, onShowAllClick, onHideAllClick, onHiLiteShownClick}: ILigandListProps) => {
    let listactions: JSX.Element = <div/>;
    if (ligands.length > 1) {
        listactions = <ListActions hideAll={onHideAllClick} showAll={onShowAllClick}>
            <div className="btn-group btn-group-xs" role="group">
                <button
                    type="button"
                    className="btn btn-default"
                    onClick={onClickShownLigands(onHiLiteShownClick, ligands)}
                    title="Make currently shown ligands the hilite selection in KNIME"
                >
                    HiLite shown
                </button>
            </div>
        </ListActions>;
    }
    const ligandItems = ligands.map((ligand) => (
        <LigandListItem
            key={ligand.id}
            {...ligand}
            onVisibilityClick={onLigandVisibilityClick}
        />
    ));
    return <div style={{ height: '85%', overflowY: 'auto'}}>
        <h5>Ligands</h5>
        {listactions}
        <table className="table table-condensed"><tbody>
            {ligandItems}
        </tbody></table>
    </div>;
};