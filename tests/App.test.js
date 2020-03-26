import React from 'react';
import App from '../../src/components/App';
import { shallow } from 'enzyme';

global.fetch = require('jest-fetch-mock');

describe('Fetch KPIs', () => {
    test('retrieves all KPIs from the server', () => {

        // const wrapper = shallow(<App/>);

        // // Use wrapper.instance() to access the rendered instance of <App />
        // const instance = wrapper.instance();
        // return instance.fetchKpiData()
        // // ...which returns a Promise of our results
        // .then(() => {
        //     // Now, we get the current state of our <App />...
        //     const kpiState = wrapper.state('kpis');

        //     // ...and verify that it's what we expected
        //     expect(kpiState.length).toBeGreaterThan(0);
        //     expect(kpiState[0]).toMatchObject({
        //         id: 1,
        //         title:'Concurrent visitors', 
        //         data: 456
        //       }chrom)
        // });
        
        // expect(result).toBe(expected);
    });
  });