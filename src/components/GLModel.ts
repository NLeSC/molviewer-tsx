import * as React from 'react';

import * as NGL from 'ngl';

export interface IGLModelProps {
    visible: boolean;
    data: string;
    format: string;
}

export interface IContext {
    stage: NGL.Stage;
}

export class GLModel<P extends IGLModelProps, S> extends React.Component<P, S> {
    static contextTypes = {
        stage: React.PropTypes.object
    };

    public context: IContext;
    protected model: NGL.StructureComponent;

    public render() {
        return null;
    }

    public componentWillUnmount() {
        this.context.stage.remove(this.model);
    }

    public shouldComponentUpdate(nextProps: IGLModelProps) {
        return this.props.visible !== nextProps.visible;
    }

    public componentDidUpdate() {
        this.model.setVisibility(this.props.visible);
    }

    public modelLoaded(comp: NGL.StructureComponent) {
        this.model = comp;
        this.model.setVisibility(this.props.visible);
        if (this.props.visible) {
            this.model.centerView();
        }
    }

    public componentDidMount() {
        const blob = new Blob([this.props.data], { type: 'text/plain'});
        this.context.stage.loadFile(blob, { ext: this.props.format})
            .then(this.modelLoaded.bind(this));
    }
}
