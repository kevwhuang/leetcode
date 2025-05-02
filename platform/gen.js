import { existsSync } from 'fs';
import manifest from './manifest.json';

for (const e of manifest.problemsetQuestionList.slice(3500)) {
    const id = Number(e.questionFrontendId);
    const type = e.topicTags[0]?.name === 'Database';
    const ext = type ? (e.isPaidOnly ? 'p.sql' : 'sql') : (e.isPaidOnly ? 'mjs' : 'js');
    const path = `./problems/${e.difficulty.toLowerCase()}/3501-4000/${id}.${ext}`;
    if (existsSync(path)) continue;
    await Bun.write(path, `${type ? '--' : '//'} ${id} - ${e.title}\n\n\n`);
    console.log(e.title); // eslint-disable-line
}
