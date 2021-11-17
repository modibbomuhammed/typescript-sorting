import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) throw new Error("Index out of bounds");

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) return node;

      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error("List is Empty");
    const left = this.at(leftIndex).data;
    const right = this.at(rightIndex).data;
    return left > right;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) throw new Error("List is Empty");
    const left = this.at(leftIndex);
    const right = this.at(rightIndex);

    const temp = left.data;
    left.data = right.data;
    right.data = temp;
  }

  print(): void {
    if (!this.head) return;

    let node: Node | null = this.head;

    while (node) {
      console.log({ data: node.data });
      node = node.next;
    }
  }
}
