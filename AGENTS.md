<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Playwright Visual QA
A Playwright MCP server is available. Use it to visually inspect the app in a real browser.
- **After any UI/styling change**: open the running dev server in the browser, take a screenshot, and check for layout issues, misalignment, or broken spacing. If something looks off, fix it before finishing.
- **When asked to check the UI**: navigate to the relevant page, capture it, and evaluate aesthetic symmetry — consistent spacing, alignment, color balance, and responsiveness.
- **Self-correct**: if a visual issue is found, fix the code and re-check until the page looks correct.

## GitHub MCP
A GitHub MCP server is available. Use it to speed up development:
- **Before creating a file/component**: search the repo for existing similar code to avoid duplication.
- **Issues**: if asked to work on a feature or bug, check open issues for context or acceptance criteria first.
- **PRs**: when asked to review or understand recent changes, look at open/merged PRs instead of guessing.
- **Search**: use GitHub code search to find examples or patterns already used in the codebase before writing new ones from scratch.
