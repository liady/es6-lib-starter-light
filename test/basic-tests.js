/* global test */
/* global suite */

import * as assert from 'assert';
import Library, { getLibrary } from '../src/library';

//-------------------------------------------------
suite('Library: class', () => {
    const inst = new Library();

    test('not initialized', () => {
        assert.ok(!inst.isInitialized);
    });

    test('initialized', () => {
        inst.init();
        assert.ok(inst.isInitialized);
    });
});

//-------------------------------------------------
suite('Library: function', () => {
    const inst = getLibrary();

    test('not initialized', () => {
        assert.ok(!inst.isInitialized);
    });

    test('initialized', () => {
        inst.init();
        assert.ok(inst.isInitialized);
    });
});