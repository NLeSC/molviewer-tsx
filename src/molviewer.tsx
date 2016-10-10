// TODO replace with `import React from 'react'`, but tslint complains see https://github.com/palantir/tslint/issues/893
import * as React from 'react';
import ReactDOM from 'react-dom';

import {SdfPdbViewer} from './sdfpdbviewer';

import 'bootstrap/dist/css/bootstrap.css!';

let container = document.getElementById('container');
ReactDOM.render(<SdfPdbViewer />, container);