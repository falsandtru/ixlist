# Indexed circular linked list

![CI](https://github.com/falsandtru/ixlist/workflows/CI/badge.svg)

A fast and efficient list data structure.

## Maintenance

This repository is maintained on the following source repository.

https://github.com/falsandtru/spica

## Performance comparison

### Benchmark

Faster x2 of [yallist](https://www.npmjs.com/package/yallist).

```
'Yalist new x 22,298,894 ops/sec ±2.75% (62 runs sampled)'

'IxList new x 44,853,584 ops/sec ±2.37% (63 runs sampled)'

'Yalist add 10 x 27,473,811 ops/sec ±10.74% (58 runs sampled)'

'IxList add 10 x 47,765,168 ops/sec ±2.32% (62 runs sampled)'

'Yalist add 100 x 28,873,223 ops/sec ±4.44% (61 runs sampled)'

'IxList add 100 x 45,206,293 ops/sec ±5.30% (59 runs sampled)'

'Yalist add 1,000 x 28,487,117 ops/sec ±4.64% (61 runs sampled)'

'IxList add 1,000 x 46,283,535 ops/sec ±2.49% (61 runs sampled)'

'Yalist add 10,000 x 28,555,076 ops/sec ±3.83% (64 runs sampled)'

'IxList add 10,000 x 43,043,662 ops/sec ±5.48% (56 runs sampled)'

'Yalist add 100,000 x 20,781,065 ops/sec ±2.76% (61 runs sampled)'

'IxList add 100,000 x 46,246,507 ops/sec ±2.26% (62 runs sampled)'

'IxList put 10 x 28,829,220 ops/sec ±3.33% (63 runs sampled)'

'IxList put 100 x 26,026,698 ops/sec ±3.23% (62 runs sampled)'

'IxList put 1,000 x 23,621,272 ops/sec ±3.03% (63 runs sampled)'

'IxList put 10,000 x 23,652,364 ops/sec ±3.24% (63 runs sampled)'

'IxList put 100,000 x 17,712,322 ops/sec ±1.72% (66 runs sampled)'
```

https://github.com/falsandtru/spica/runs/2069026253

## API

```ts
interface Index<K, V> {
  has(key: K): boolean;
  get(key: K): V | undefined;
  set(key: K, value: V): this;
  delete(key: K, value?: V): boolean;
  clear(): void;
}

interface ReadonlyNode<K, V> {
  readonly index: number;
  readonly key: K;
  readonly value: V;
  readonly next: number;
  readonly prev: number;
}

export class IxList<K, V = undefined> {
  constructor(
    capacity: number,
    // Unique keys: Map
    // Duplicate keys: MultiMap
    index?: Index<K, number>,
  );
  // O(1)
  readonly length: numer;
  readonly head: ReadonlyNode<K, V> | undefined;
  readonly tail: ReadonlyNode<K, V> | undefined;
  readonly last: ReadonlyNode<K, V> | undefined;
  node(index: number): ReadonlyNode<K, V> | undefined;
  clear(): void;
  // O(1)
  add(this: IxList<K, undefined>, key: K, value?: V): number;
  add(key: K, value: V): number;
  // O(1) or O(log n)
  put(this: IxList<K, undefined>, key: K, value?: V, index?: number): number;
  put(key: K, value: V, index?: number): number;
  set(this: IxList<K, undefined>, key: K, value?: V, index?: number): this;
  set(key: K, value: V, index?: number): this;
  find(key: K, index?: number): ReadonlyNode<K, V> | undefined;
  get(key: K, index?: number): V | undefined;
  has(key: K, index?: number): boolean;
  del(key: K, index?: number): ReadonlyNode<K, V> | undefined;
  delete(key: K, index?: number): boolean;
  // O(1)
  insert(key: K, value: V, before: number): number;
  unshift(this: IxList<K, undefined>, key: K, value?: V): number;
  unshift(key: K, value: V): number;
  shift(): ReadonlyNode<K, V> | undefined;
  push(this: IxList<K, undefined>, key: K, value?: V): number;
  push(key: K, value: V): number;
  pop(): ReadonlyNode<K, V> | undefined;
  move(index: number, before: number): boolean;
  moveToHead(index: number): boolean;
  moveToPrev(index: number): boolean;
  swap(index1: number, index2: number): boolean;
  // O(n)
  [Symbol.iterator](): Iterator<[K, V], undefined, undefined>;
}
```
