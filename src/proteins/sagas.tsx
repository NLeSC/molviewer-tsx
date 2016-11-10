import { call, put } from 'redux-saga/effects';

import { fetchFailed, fetchSucceeded } from './actions';
import { fetchProteins } from './services';

export function* fetchProteinsWorker() {
    try {
        const proteins = yield call(fetchProteins);
        yield put(fetchSucceeded(proteins));
    } catch (e) {
        yield put(fetchFailed(e.message));
    }
}
