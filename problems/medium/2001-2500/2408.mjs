// 2408 - Design SQL

class SQL {
    constructor(names, columns) {
        this.lib = {};
        for (let i = 0; i < names.length; i++) {
            this.lib[names[i]] = { id: 0 };
        }
    }
    deleteRow(name, rowId) { }
    insertRow(name, row) {
        const table = this.lib[name];
        table[++table['id']] = row;
    }
    selectCell(name, rowId, columnId) {
        return this.lib[name][rowId][columnId - 1];
    }
}
