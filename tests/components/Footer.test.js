import React from 'react'
import Footer from '../../src/components/Footer'
import renderer from 'react-test-renderer'

describe('Footer', () => {
    test('matches the footer snapshot', () => {
        const tree = renderer.create(<Footer />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})