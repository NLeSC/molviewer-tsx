import * as React from 'react';

import { shallow } from 'enzyme';

import { LigandListItem } from './LigandListItem';

describe('<LigandListItem />', () => {
    describe('render', () => {
        it('should contain label', () => {
            const props = {
                id: 'id1',
                label: 'label1',
                visible: true,
                format: 'sdf',
                data: '...',
                onVisibilityClick: (id: string) => {
                    expect(id).toEqual('id1');
                }
            };

            const wrapper = shallow(<LigandListItem {...props} />);

            expect(wrapper.text().includes('label1')).toBeTruthy();
        });
    });
});