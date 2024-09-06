// 2076 - Process Restricted Friend Requests

function friendRequests(n, restrictions, requests) {
    function find(v) {
        while (v !== uf[v]) {
            uf[v] = uf[uf[v]];
            v = uf[v];
        }
        return v;
    }
    const uf = Array.from({ length: n }, (_, i) => i);
    for (let i = 0; i < requests.length; i++) {
        const p1 = find(requests[i][0]);
        const p2 = find(requests[i][1]);
        for (let j = 0; j < restrictions.length; j++) {
            const q1 = find(restrictions[j][0]);
            const q2 = find(restrictions[j][1]);
            if ((p1 === q1 && p2 === q2) || (p1 === q2 && p2 === q1)) {
                requests[i] = false;
                break;
            }
        }
        if (requests[i] === false) continue;
        requests[i] = true;
        uf[p1] = p2;
    }
    return requests;
}
