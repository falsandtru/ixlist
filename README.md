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
'Yalist new x 17,560,767 ops/sec ±1.78% (60 runs sampled)'

'IxList new x 26,478,100 ops/sec ±2.59% (57 runs sampled)'

'Yalist add 10 x 8,768,708 ops/sec ±23.02% (27 runs sampled)'

'IxList add 10 x 36,364,362 ops/sec ±2.61% (57 runs sampled)'

'Yalist add 100 x 18,334,633 ops/sec ±1.95% (60 runs sampled)'

'IxList add 100 x 37,736,294 ops/sec ±3.73% (56 runs sampled)'

'Yalist add 1,000 x 18,810,849 ops/sec ±1.57% (61 runs sampled)'

'IxList add 1,000 x 37,085,369 ops/sec ±2.82% (55 runs sampled)'

'Yalist add 10,000 x 18,089,157 ops/sec ±1.90% (60 runs sampled)'

'IxList add 10,000 x 35,846,312 ops/sec ±3.01% (57 runs sampled)'

'Yalist add 100,000 x 13,966,801 ops/sec ±1.46% (61 runs sampled)'

'IxList add 100,000 x 37,153,904 ops/sec ±3.34% (56 runs sampled)'

'IxList put 10 x 20,839,485 ops/sec ±2.50% (60 runs sampled)'

'IxList put 100 x 17,165,186 ops/sec ±1.89% (59 runs sampled)'

'IxList put 1,000 x 15,900,823 ops/sec ±1.53% (60 runs sampled)'

'IxList put 10,000 x 14,107,133 ops/sec ±1.49% (60 runs sampled)'

'IxList put 100,000 x 9,857,738 ops/sec ±1.21% (62 runs sampled)'
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
  moveToHead(index: number): void;
  moveToLast(index: number): void;
  swap(index1: number, index2: number): boolean;
  // O(n)
  [Symbol.iterator](): Iterator<[K, V], undefined, undefined>;
}
```
