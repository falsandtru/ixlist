import { IxList, MultiMap } from '../../index';

describe('Interface: Package', function () {
  describe('global', function () {
    it('global', function () {
      assert(global['IxList'] !== IxList);
      assert(global['MultiMap'] !== MultiMap);
    });
  });

  describe('IxList', function () {
    it('IxList', function () {
      assert(typeof IxList === 'function');
    });
  });

  describe('MultiMap', function () {
    it('MultiMap', function () {
      assert(typeof MultiMap === 'function');
    });
  });

});
