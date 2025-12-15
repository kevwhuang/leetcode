# CLAUDE.md

This repository contains solutions to every LeetCode problem, written primarily in JavaScript. For problems where JavaScript is not supported (concurrency, Pandas, etc.), solutions are provided in the appropriate language (Java, Python, SQL).

## Commands

| Command | Description |
|---------|-------------|
| `bun run lint` | Run ESLint |
| `bun run gen` | Generate stub files for new problems |
| `bun test` | Run all tests |
| `bun test <file>` | Run a specific test file |

## File Conventions

| Extension | Usage |
|-----------|-------|
| `.js` | Free JavaScript problems |
| `.jsx` | Free JavaScript problems (React) |
| `.mjs` | Premium JavaScript problems |
| `.cjs` | Free JavaScript problems (CommonJS) |
| `.p.cjs` | Premium JavaScript problems (CommonJS) |
| `.sql` | Free database problems |
| `.p.sql` | Premium database problems |
| `.java` | Java problems (concurrency) |
| `.p.java` | Premium Java problems |
| `.py` | Python problems (Pandas) |

The `.p.` infix denotes premium.

## Solution Format

- Header comment: `// {id} - {title}` (or `--` for SQL)
- Export via `module.exports`

## Code Style

| Rule | Value |
|------|-------|
| Indentation | 4 spaces |
| Quotes | Single |
| Semicolons | Required |
| Trailing commas | Multiline |
| Max line length | 80 (problems), 130 (tests), 100 (elsewhere) |

## Architecture

```
leetcode/
├── problems/         Solutions by difficulty (easy/medium/hard) and ID range
├── neetcode/         Solutions by NeetCode 150 category
├── data-structures/  Custom implementations (Heap, Trie, SegmentTree, etc.)
├── tests/            Jest-style tests for neetcode/
└── public/           Generator scripts
```
