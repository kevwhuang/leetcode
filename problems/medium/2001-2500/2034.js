// 2034 - Stock Price Fluctuation

class StockPrice {
    constructor() {
        this.records = new Map();
        this.latest = [0, null];
        this.minHeap = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
        this.maxHeap = new PriorityQueue({ compare: (a, b) => b[1] - a[1] });
    }
    current() {
        return this.latest[1];
    }
    maximum() {
        return this.maxHeap.front()[1];
    }
    minimum() {
        return this.minHeap.front()[1];
    }
    update(timestamp, price) {
        this.records.set(timestamp, price);
        if (timestamp >= this.latest[0]) this.latest = [timestamp, price];
        this.minHeap.enqueue([timestamp, price]);
        this.maxHeap.enqueue([timestamp, price]);
        let front = this.minHeap.front();
        while (this.records.get(front[0]) !== front[1]) {
            this.minHeap.dequeue();
            front = this.minHeap.front();
        }
        front = this.maxHeap.front();
        while (this.records.get(front[0]) !== front[1]) {
            this.maxHeap.dequeue();
            front = this.maxHeap.front();
        }
    }
}
