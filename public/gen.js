import { existsSync } from 'fs';

const res = await fetch('https://alfa-leetcode-api.onrender.com/problems?limit=100&skip=3837');
(await res.json()).problemsetQuestionList?.forEach(async e => {
    const difficulty = e.difficulty.toLowerCase();
    const id = Number(e.questionFrontendId);
    const type = e.topicTags[0]?.name === 'Database';
    const ext = type ? (e.isPaidOnly ? 'p.sql' : 'sql') : (e.isPaidOnly ? 'mjs' : 'js');
    const path = `problems/${difficulty}/3501-4000/${id}.${ext}`;
    if (existsSync(path)) return;
    await Bun.write(path, `${type ? '--' : '//'} ${id} - ${e.title}\n\n\n`);
    console.log(e.title); // eslint-disable-line
});
