import React from 'react'
import Nav from '../../src/components/Nav'
import renderer from 'react-test-renderer'

describe('Nav', () => {
    test('matches the Nav snapshot', () => {
        const tree = renderer.create(<Nav />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})