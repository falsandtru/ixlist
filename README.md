# Indexed circular linked list

![CI](https://github.com/falsandtru/ixlist/workflows/CI/badge.svg)

A fast and efficient list data structure.

## Maintenance

This repository is maintained on the following source repository.

https://github.com/falsandtru/spica

## Performance comparison

### Benchmark

Faster x2-5 of [yallist](https://www.npmjs.com/package/yallist).

```
'Yalist new x 16,541,264 ops/sec ±1.70% (54 runs sampled)'

'IxList new x 28,043,653 ops/sec ±1.53% (64 runs sampled)'

'Yalist add 10 x 6,501,687 ops/sec ±12.62% (24 runs sampled)'

'IxList add 10 x 31,447,047 ops/sec ±2.56% (45 runs sampled)'

'Yalist add 100 x 18,787,539 ops/sec ±1.25% (59 runs sampled)'

'IxList add 100 x 29,422,344 ops/sec ±1.55% (60 runs sampled)'

'Yalist add 1,000 x 19,172,967 ops/sec ±1.54% (60 runs sampled)'

'IxList add 1,000 x 29,979,083 ops/sec ±1.78% (57 runs sampled)'

'Yalist add 10,000 x 18,344,963 ops/sec ±0.94% (63 runs sampled)'

'IxList add 10,000 x 30,199,144 ops/sec ±1.63% (58 runs sampled)'

'Yalist add 100,000 x 13,941,270 ops/sec ±1.17% (64 runs sampled)'

'IxList add 100,000 x 30,330,602 ops/sec ±1.33% (64 runs sampled)'

'IxList put 10 x 20,324,622 ops/sec ±1.52% (58 runs sampled)'

'IxList put 100 x 19,432,778 ops/sec ±1.54% (61 runs sampled)'

'IxList put 1,000 x 16,277,501 ops/sec ±1.41% (58 runs sampled)'

'IxList put 10,000 x 16,437,027 ops/sec ±1.08% (62 runs sampled)'

'IxList put 100,000 x 12,575,464 ops/sec ±1.14% (63 runs sampled)'
```

https://github.com/falsandtru/spica/runs/2061836649

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
  // O(log n) or O(1)
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
  unshift(this: IxList<K, undefined>, key: K, value?: V): number;
  unshift(key: K, value: V): number;
  shift(): ReadonlyNode<K, V> | undefined;
  push(this: IxList<K, undefined>, key: K, value?: V): number;
  push(key: K, value: V): number;
  pop(): ReadonlyNode<K, V> | undefined;
  // O(n)
  [Symbol.iterator](): Iterator<[K, V], undefined, undefined>;
  // O(1)
  insert(index: number, before: number): boolean;
  moveToHead(index: number): boolean;
  moveToPrev(index: number): boolean;
  swap(index1: number, index2: number): boolean;
}
```
