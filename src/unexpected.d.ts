declare module "unexpected" {

    type TruthyExpectation = 'to be truthy' | 'to be ok' | 'not to be truthy' | 'not to be ok';

    /** Asserts that the value is [not] truthy */
    function expect(actual: boolean, expectation: TruthyExpectation);
    /** Asserts that the value is [not] truthy */
    function expect(actual: string, expectation: TruthyExpectation);
    /** Asserts that the value is [not] truthy */
    function expect(actual: number, expectation: TruthyExpectation);
    /** Asserts that the value is [not] truthy */
    function expect(actual: {}, expectation: TruthyExpectation);



    type DefinedExpectation = 'to be defined';
  
    /** Asserts that the value is defined */
    function expect(actual: any, expectation: DefinedExpectation);
    /** Asserts that the value is undefined | null */
    function expect(actual: any, expectation: 'to be undefined' | 'to be null');


    /** Asserts the strings === equality */
    function expect(actual: string, expectation: 'to be' | 'not to be', expected: string);
    /** Asserts that the string is [not] greater than another string using the > operator */
    function expect(actual: string, expectation: 'to be greater than' | 'not to be greater than', expected: string);
    /** Asserts that the string is [not] greater than or equal to another string using the >= operator */
    function expect(actual: string, expectation: 'to be greater than or equal to' | 'not to be greater than or equal to', expected: string);
    /** Asserts that the string is [not] empty */
    function expect(actual: string, expectation: 'to be empty' | 'to be non-empty');
    /** Asserts that the string is [not] within a range of strings */
    function expect(actual: string, expectation: 'to be within' | 'not to be within', start: string, end: string);
    /** Asserts that the string [not] has the specified length */
    function expect(actual: string, expectation: 'to have length' | 'not to have length', length: number);
    /** Asserts string to [not] match against regex */
    function expect(actual: string, expectation: 'to match' | 'not to match', regex: RegExp);

    /** Asserts the strings === equality */
    function expect(actual: string, expectation: 'to be' | 'not to be', expected: string);

    export = expect;
}