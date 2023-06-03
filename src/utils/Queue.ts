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
  const top = 0;
  const parent = (i) => ((i + 1) >>> 1) - 1;
  const left = (i) => (i << 1) + 1;
  const right = (i) => (i + 1) << 1;
  export class PriorityQueue<T> {
    private _heap: T[] = [];
    private comparator: (first: T, second: T) => boolean;

    constructor(comparator?: (first: T, second: T) => boolean) {
      this.comparator = comparator
        ? comparator
        : (first, second) => {
            return first < second;
          };
    }

    size() {
      return this._heap.length;
    }
    isEmpty() {
      return this.size() == 0;
    }
    peek() {
      return this._heap[top];
    }
    enqueue(...values: T[]) {
      values.forEach((value) => {
        this._heap.push(value);
        this._siftUp();
      });
      return this.size();
    }
    dequeue(): T {
      const poppedValue = this.peek();
      const bottom = this.size() - 1;
      if (bottom > top) {
        this._swap(top, bottom);
      }
      this._heap.pop();
      this._siftDown();
      return poppedValue;
    }
    replace(value) {
      const replacedValue = this.peek();
      this._heap[top] = value;
      this._siftDown();
      return replacedValue;
    }
    _greater(i, j) {
      return this.comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
      [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
      let node = this.size() - 1;
      while (node > top && this._greater(node, parent(node))) {
        this._swap(node, parent(node));
        node = parent(node);
      }
    }
    _siftDown() {
      let node = top;
      while (
        (left(node) < this.size() && this._greater(left(node), node)) ||
        (right(node) < this.size() && this._greater(right(node), node))
      ) {
        let maxChild =
          right(node) < this.size() && this._greater(right(node), left(node))
            ? right(node)
            : left(node);
        this._swap(node, maxChild);
        node = maxChild;
      }
    }
  }
}
