import expect = require('unexpected');

import { Calculator } from './index';


describe('test unexpected expectations:', () => {
    
    it('<thruthy> of all', () => {

        expect(true, 'to be ok');
        expect(1, 'to be ok');
        expect("1", 'to be ok');
        expect({}, 'to be ok');
    });

    it('<strings>', () => {

        expect('mikkel d3mm.', 'to match', /d+.?/gi);
        expect('mikke', 'to have length', 5);
    });
});