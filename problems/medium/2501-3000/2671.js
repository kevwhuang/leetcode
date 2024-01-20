// 2671 - Frequency Tracker

class FrequencyTracker {
    constructor() {
        this.nums = new Map();
        this.freqs = new Map();
    }
    add(number) {
        let freq = this.nums.get(number) + 1 || 1;
        this.nums.set(number, freq);
        this.freqs.set(freq, this.freqs.get(freq) + 1 || 1);
        if (freq <= 1) return;
        const freqOfFreq = this.freqs.get(--freq) - 1;
        if (freqOfFreq === 0) this.freqs.delete(freq);
        else this.freqs.set(freq, freqOfFreq);
    }
    deleteOne(number) {
        let freq = this.nums.get(number);
        if (freq === undefined) return;
        if (--freq === 0) this.nums.delete(number);
        else this.nums.set(number, freq);
        if (freq > 0) this.freqs.set(freq, this.freqs.get(freq) + 1 || 1);
        const freqOfFreq = this.freqs.get(++freq) - 1;
        if (freqOfFreq === 0) this.freqs.delete(freq);
        else this.freqs.set(freq, freqOfFreq);
    }
    hasFrequency(frequency) {
        return this.freqs.has(frequency);
    }
}
