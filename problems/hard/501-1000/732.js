// 732 - My Calendar III

class MyCalendarThree {
    constructor() {
        this.times = [];
    }
    book(startTime, endTime) {
        this.#insert(startTime, 1);
        this.#insert(endTime, -1);
        let max = 1, acc = 0;
        this.times.forEach(e => max = Math.max(acc += e[1], max));
        return max;
    }
    #insert(time, val) {
        let l = 0, r = this.times.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (this.times[m][0] < time) l = m + 1;
            else if (this.times[m][0] > time) r = m - 1;
            else return this.times[m][1] += val;
        }
        this.times.splice(l, 0, [time, val]);
    }
}
