import {assert} from 'chai'
import {search} from '../lib/email-autocomplete'


describe('autocomplete', function() {
    it('suggest', function() {
        assert.deepEqual(search('gmail'), []);
        assert.deepEqual(search('@gmail'), []);
        assert.deepEqual(search('ahoj@'), []);
        assert.deepEqual(search('ahoj@gm'), ["ahoj@gmail.com"]);
        assert.deepEqual(search('cau@a'), ["cau@aol.com", "cau@atlas.sk", "cau@azet.sk"]);
    });
});