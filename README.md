# Circular indexed list

![CI](https://github.com/falsandtru/ixlist/workflows/CI/badge.svg)

A fast and efficient list data structure.

## Maintenance

This repository is maintained on the following source repository.

https://github.com/falsandtru/spica

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
    capacity?: number,
    // Unique keys: Map
    // Duplicate keys: MultiMap
    index?: Index<K, number>,
  );
  // O(1)
  readonly capacity: numer;
  readonly length: numer;
  readonly head: ReadonlyNode<K, V> | undefined;
  readonly tail: ReadonlyNode<K, V> | undefined;
  readonly last: ReadonlyNode<K, V> | undefined;
  node(index: number): ReadonlyNode<K, V> | undefined;
  rotateToNext(): number;
  rotateToPrev(): number;
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
  replace(this: IxList<K, undefined>, index: number, key: K, value?: V): ReadonlyNode<K, V> | undefined;
  replace(index: number, key: K, value: V): ReadonlyNode<K, V> | undefined;
  move(index: number, before: number): boolean;
  moveToHead(index: number): void;
  moveToLast(index: number): void;
  swap(index1: number, index2: number): boolean;
  // O(n)
  [Symbol.iterator](): Iterator<[K, V], undefined, undefined>;
}
```
