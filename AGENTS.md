# Repository Guidelines

## Project Structure & Module Organization
- `src/` hosts Discord bot logic; `bot.js` boots the client and routes messages through `messageHandler.js`.
- Domain helpers live alongside the handler: `parser.js`, `postParsed.js`, `replyBuilder.js`, and `Resources.js`. Keep new modules colocated by feature.
- Localization strings sit under `src/language/`; reuse `input.js` patterns when adding commands.
- Manual regression tests live in `src/tests/tests.js`; extend the exported `tests` array to cover new flows.
- Copy `config.json.template` to `config.json` and keep secrets out of version control.

## Build, Test, and Development Commands
- `npm install` installs Discord.js and any future shared dependencies.
- `cp config.json.template config.json` and then populate `BOT_TOKEN` to prepare a local bot session.
- `node src/bot.js` runs the bot against the configured Discord workspace; use a sandbox server for manual checks.
- `node src/tests/tests.js` executes the lightweight regression harness and logs per-scenario status.

## Coding Style & Naming Conventions
- Use 4-space indentation, double quotes for strings, and follow the existing minimal-semicolon style.
- Favor camelCase for functions and variables, PascalCase for constructor-like modules, and uppercase snake case for constants.
- Require modules with relative paths (`require("./replyBuilder.js")`) and group top-level imports before logic.
- Keep command keywords lower case to align with `language/input.js` definitions.

## Testing Guidelines
- Add focused test entries to the `tests` array in `src/tests/tests.js`; name scenarios succinctly (e.g., `"rebuild depot limits"`).
- Mirror expected replies line-by-line in the helper to retain diff-friendly comparisons.
- Run `node src/tests/tests.js` before opening a PR; attach output for non-trivial changes.
- Capture edge cases such as malformed tags or new resource types whenever parser behavior shifts.

## Commit & Pull Request Guidelines
- Follow the short, imperative commit style found in history (`back to x2`, `add prices`).
- Each PR should include: a concise summary, manual/test evidence, and any linked Discord ticket or issue.
- Mention configuration impacts (e.g., new environment keys) and include screenshots or sample payloads when output formats change.
- Keep PRs scoped narrowly; coordinate multi-part changes via stacked or draft PRs for early feedback.

## Configuration & Security
- Never commit populated `config.json`; rely on `config.json.template` for defaults and share secrets securely.
- Rotate bot tokens immediately if exposed and update deployments; document rotations in the PR.
- Validate Discord permissions before deploying to production servers to prevent unexpected message access.
