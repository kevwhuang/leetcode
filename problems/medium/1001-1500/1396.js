// 1396 - Design Underground System

class UndergroundSystem {
    constructor() {
        this.transit = new Map();
        this.records = new Map();
    }
    checkIn(id, stationName, t) {
        this.transit.set(id, [stationName, t]);
    }
    checkOut(id, stationName, t) {
        const origin = this.transit.get(id);
        this.transit.delete(id);
        if (!this.records.get(origin[0])) this.records.set(origin[0], new Map());
        const dest = this.records.get(origin[0]);
        dest.set(stationName, [
            (dest.get(stationName)?.[0] || 0) + 1,
            (dest.get(stationName)?.[1] || 0) + t - origin[1],
        ]);
    }
    getAverageTime(startStation, endStation) {
        const cur = this.records.get(startStation).get(endStation);
        return cur[1] / cur[0];
    }
}
