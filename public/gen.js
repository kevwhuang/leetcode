import { existsSync } from 'fs';

const start = 3846;
const url = `https://alfa-leetcode-api.onrender.com/problems?limit=100&skip=${start - 1}`;
const res = await fetch(url);

(await res.json()).problemsetQuestionList?.forEach(async e => {
    const difficulty = e.difficulty.toLowerCase();
    const id = Number(e.questionFrontendId);
    const type = e.topicTags[0]?.name === 'Database';
    const ext = type ? (e.isPaidOnly ? 'p.sql' : 'sql') : (e.isPaidOnly ? 'mjs' : 'js');
    const path = `problems/${difficulty}/3501-4000/${id}.${ext}`;
    if (id < start || existsSync(path)) return;
    await Bun.write(path, `${type ? '--' : '//'} ${id} - ${e.title}\n\n\n`);
    console.log(e.title); // eslint-disable-line
});
