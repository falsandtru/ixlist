# Indexed circular linked list

![CI](https://github.com/falsandtru/ixlist/workflows/CI/badge.svg)

A fast and efficient list data structure.

## API

```ts
interface Collection<K, V> extends IterableCollection<K, V> {
  delete(key: K, value?: V): boolean;
  clear(): void;
}

export class IxList<K, V = undefined> {
  constructor(
    capacity: number,
    // Unique keys: Map
    // Duplicate keys: MultiMap
    index?: Collection<K, number>,
  );
  // O(1)
  readonly length: numer;
  // O(1)
  readonly head: { readonly index: number; readonly key: K; readonly value: V; } | undefined;
  // O(1)
  readonly last: { readonly index: number; readonly key: K; readonly value: V; } | undefined;
  // O(1)
  node(index: number): { readonly index: number; readonly key: K; readonly value: V; };
  // O(1)
  next(index: number): { readonly index: number; readonly key: K; readonly value: V; };
  // O(1)
  prev(index: number): { readonly index: number; readonly key: K; readonly value: V; };
  // O(1)
  clear(): void;
  // O(1)
  add(this: IxList<K, undefined>, key: K, value?: V): number;
  add(key: K, value: V): number;
  // O(log n) or O(1)
  put(this: IxList<K, undefined>, key: K, value?: V, index?: number): number;
  put(key: K, value: V, index?: number): number;
  // O(log n) or O(1)
  delete(key: K, index?: number): { readonly key: K; readonly value: V; } | undefined;
  // O(1)
  unshift(this: IxList<K, undefined>, key: K, value?: V): number;
  unshift(key: K, value: V): number;
  // O(1)
  shift(): { readonly key: K; readonly value: V; } | undefined;
  // O(1)
  push(this: IxList<K, undefined>, key: K, value?: V): number;
  push(key: K, value: V): number;
  // O(1)
  pop(): { readonly key: K; readonly value: V; } | undefined;
  // O(log n)
  find(key: K, index?: number): V | undefined;
  // O(log n)
  findIndex(key: K, index?: number): number | undefined;
  // O(log n)
  has(key: K, index?: number): boolean;
  // O(n)
  [Symbol.iterator](): Iterator<[K, V], undefined, undefined>;
  // O(1)
  insert(index: number, before: number): boolean;
  // O(1)
  moveToHead(index: number): boolean;
  // O(1)
  moveToPrev(index: number): boolean;
  // O(1)
  swap(index1: number, index2: number): boolean;
}
```
