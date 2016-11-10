import * as React from 'react';
import { connect } from 'react-redux';

import * as ligands from '../ligands';
import * as proteins from '../proteins';

import { MolCanvas } from '../components/MolCanvas';
import { NavBar } from '../components/NavBar';
import { LigandList } from '../ligands/components/LigandList';
import { ProteinList } from '../proteins/components/ProteinList';
import { DisconnectedModal } from '../sse/components/DisconnectedModal';

interface IStateProps {
    ligands: ligands.ILigand[];
    proteins: proteins.IProtein[];
    connected: boolean;
}

interface IDispatchProps {
    fetchLigands(): void;
    fetchProteins(): void;
    onHeteroVisibilityClick(id: string): void;
    onLigandVisibilityClick(id: string): void;
    onProteinVisibilityClick(id: string): void;
    onHideLigands(): void;
    onHideProteins(): void;
    onHiLiteShown(ids: string[]): void;
    onShowLigands(): void;
    onShowProteins(): void;
}

type IComponentProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IStateProps) => state;
const mapDispatchToProps = (dispatch: any): IDispatchProps => {
    return {
        fetchLigands: () => dispatch(ligands.actions.fetchRequested()),
        fetchProteins: () => dispatch(proteins.actions.fetchRequested()),
        onHeteroVisibilityClick: (id: string) => dispatch(proteins.actions.toggleHetVisibility(id)),
        onHideLigands: () => dispatch(ligands.actions.hideAll()),
        onHideProteins: () => dispatch(proteins.actions.hideAll()),
        onHiLiteShown: (ids: string[]) => dispatch(ligands.actions.hiLiteShown(ids)),
        onLigandVisibilityClick: (id: string) => dispatch(ligands.actions.toggleVisibility(id)),
        onProteinVisibilityClick: (id: string) => dispatch(proteins.actions.toggleVisibility(id)),
        onShowLigands: () => dispatch(ligands.actions.showAll()),
        onShowProteins: () => dispatch(proteins.actions.showAll())
    };
};

// @connect<IStateProps, IDispatchProps, {}>(mapStateToProps, mapDispatchToProps)
export class SdfPdbViewer extends React.Component<IComponentProps, {}> {
    public componentDidMount() {
        this.props.fetchLigands();
        this.props.fetchProteins();
    }

    public render() {
        return <div>
            <NavBar title="Ligands and proteins viewer"/>
            <DisconnectedModal connected={this.props.connected} />
            <div style={{ display: 'flex', height: '900px' }}>
                <div style={{ marginLeft: '10px', width: '300px' }}>
                    <LigandList
                        ligands={this.props.ligands}
                        onLigandVisibilityClick={this.props.onLigandVisibilityClick}
                        onHideAllClick={this.props.onHideLigands}
                        onHiLiteShownClick={this.props.onHiLiteShown}
                        onShowAllClick={this.props.onShowLigands}
                    />
                    <ProteinList
                        proteins={this.props.proteins}
                        onProteinVisibilityClick={this.props.onProteinVisibilityClick}
                        onHeteroVisibilityClick={this.props.onHeteroVisibilityClick}
                        onHideAllClick={this.props.onHideProteins}
                        onShowAllClick={this.props.onShowProteins}
                    />
                </div>
                <div style={{ flexGrow: 1, position: 'relative' }}>
                    <MolCanvas
                        ligands={this.props.ligands}
                        proteins={this.props.proteins}
                    />
                </div>
            </div>
        </div>;
    }
}

// TODO replace with decorator, now gives typescript error
export const ConnectedSdfPdbViewer = connect(mapStateToProps, mapDispatchToProps)(SdfPdbViewer);
