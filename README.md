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

interface Node<K, V> {
  readonly index: number;
  readonly key: K;
  value: V;
  readonly next: number;
  readonly prev: number;
}

export class List<K, V = undefined> {
  constructor(
    // Unique keys: Map
    // Duplicate keys: MultiMap
    index?: Index<K, number>,
    capacity?: number,
  );
  // O(1)
  readonly capacity: numer;
  readonly length: numer;
  readonly head: Node<K, V> | undefined;
  readonly tail: Node<K, V> | undefined;
  readonly last: Node<K, V> | undefined;
  node(index: number): Node<K, V> | undefined;
  rotateToNext(): number;
  rotateToPrev(): number;
  clear(): void;
  // O(1)
  add(key: K, value: V): number;
  add(this: List<K, undefined>, key: K, value?: V): number;
  // O(1) or O(log n)
  put(key: K, value: V, index?: number): number;
  put(this: List<K, undefined>, key: K, value?: V, index?: number): number;
  set(key: K, value: V, index?: number): this;
  set(this: List<K, undefined>, key: K, value?: V, index?: number): this;
  find(key: K, index?: number): Node<K, V> | undefined;
  get(key: K, index?: number): V | undefined;
  has(key: K, index?: number): boolean;
  del(key: K, index?: number): Node<K, V> | undefined;
  delete(key: K, index?: number): boolean;
  // O(1)
  insert(key: K, value: V, before: number): number;
  unshift(key: K, value: V): number;
  unshift(this: List<K, undefined>, key: K, value?: V): number;
  unshiftRotationally(key: K, value: V): number;
  unshiftRotationally(this: List<K, undefined>, key: K, value?: V): number;
  shift(): Node<K, V> | undefined;
  push(key: K, value: V): number;
  push(this: List<K, undefined>, key: K, value?: V): number;
  pushRotationally(key: K, value: V): number;
  pushRotationally(this: List<K, undefined>, key: K, value?: V): number;
  pop(): Node<K, V> | undefined;
  replace(index: number, key: K, value: V): Node<K, V> | undefined;
  replace(this: List<K, undefined>, index: number, key: K, value?: V): Node<K, V> | undefined;
  move(index: number, before: number): boolean;
  moveToHead(index: number): void;
  moveToLast(index: number): void;
  swap(index1: number, index2: number): boolean;
  // O(n)
  [Symbol.iterator](): Iterator<[K, V], undefined, undefined>;
}
```
