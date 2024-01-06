// 2756 - Query Batching

class QueryBatcher {
    constructor(queryMultiple, t) {
        this.queryMultiple = queryMultiple;
        this.t = t;
        this.argBuffer = [];
        this.queryBuffer = [];
        this.free = true;
    }
    async getValue(key) {
        if (this.free) {
            this.#block();
            return await this.queryMultiple([key]);
        }
        this.argBuffer.push(key);
        const res = new Promise(resolve => this.queryBuffer.push(resolve));
        return res;
    }
    #block() {
        this.free = false;
        setTimeout(() => {
            this.free = true;
            if (this.argBuffer.length) this.#resolveBuffer();
        }, this.t);
    }
    async #resolveBuffer() {
        if (!this.argBuffer.length) return;
        this.#block();
        const args = this.argBuffer;
        const queries = this.queryBuffer;
        this.argBuffer = [];
        this.queryBuffer = [];
        const res = await this.queryMultiple(args);
        for (let i = 0; i < res.length; i++) {
            queries[i](res[i]);
        }
    }
}
