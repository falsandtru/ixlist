import { List, MultiMap } from '../../index';

describe('Interface: Package', function () {
  describe('global', function () {
    it('global', function () {
      assert(global['List'] !== List);
      assert(global['MultiMap'] !== MultiMap);
    });
  });

  describe('List', function () {
    it('List', function () {
      assert(typeof List === 'function');
    });
  });

  describe('MultiMap', function () {
    it('MultiMap', function () {
      assert(typeof MultiMap === 'function');
    });
  });

});
