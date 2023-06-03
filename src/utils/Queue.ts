export namespace Queue {
  export class ArrayQueue<T> {
    elements: T[] = [];
    first: number = 0;
    last: number = 0;

    public length(): number {
      return this.last - this.first;
    }

    public isEmpty(): boolean {
      return this.length() === 0;
    }

    public enqueue(item: T) {
      this.elements[this.last] = item;
      this.last++;
    }

    public dequeue() {
      const item = this.elements[this.first];
      delete this.elements[this.first];

      this.first++;
      return item;
    }

    public peak() {
      return this.elements[this.first];
    }
  }
}
