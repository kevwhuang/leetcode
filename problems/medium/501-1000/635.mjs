// 635 - Design Log Storage System

class LogSystem {
    constructor() {
        this.logs = new Map();
        this.keys = {
            'Year': 4, 'Month': 7, 'Day': 10,
            'Hour': 13, 'Minute': 16, 'Second': 19,
        };
    }
    put(id, timestamp) {
        this.logs.set(id, timestamp);
    }
    retrieve(start, end, granularity) {
        granularity = this.keys[granularity];
        start = start.slice(0, granularity);
        end = end.slice(0, granularity);
        const res = [];
        for (const id of this.logs.keys()) {
            const log = this.logs.get(id).slice(0, granularity);
            if (start <= log && log <= end) res.push(id);
        }
        return res;
    }
}
