import * as React from 'react';

import { ListActions } from './ListActions';
import { IProtein } from './protein';
import { ProteinListItem } from './proteinlistitem';

interface IProteinListProps {
    proteins: IProtein[];
    onProteinVisibilityClick(proteinId: string): void;
    onHeteroVisibilityClick(proteinId: string): void;
    onShowAllClick(): void;
    onHideAllClick(): void;
}

function onClick(func: (id: string) => void, id: string) {
    return () => func(id);
}

export const ProteinList = (props: IProteinListProps) => {
    let listactions: JSX.Element = <div/>;
    if (props.proteins.length > 1) {
        listactions = <ListActions hideAll={props.onHideAllClick} showAll={props.onShowAllClick}/>;
    }
    const proteins = props.proteins.map((protein) => (
        <ProteinListItem
            key={protein.id}
            {...protein}
            onProteinVisibilityClick={onClick(props.onProteinVisibilityClick,protein.id)}
            onHeteroVisibilityClick={onClick(props.onHeteroVisibilityClick, protein.id)}
        />
    ));
    return <div style={{ overflowY: 'auto'}}>
        <h5>Proteins</h5>
        {listactions}
        <table className="table table-condensed"><tbody>
            {proteins}
        </tbody></table>
    </div>;
};
