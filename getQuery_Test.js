var getQuery = require('getQuery.js');
var assert = require('assert');

it('None result', ()=>
	assert.equal(getQuery.Get('table1', 'firs').get('count'), 0));
	
it('5/5', ()=>
	assert.equal(getQuery.Get('table2', 'a').get('count'), 5));

it('20/25', ()=>
	assert.equal(getQuery.Get('table3', 'a').get('count'), 20)); 