# Wofh Build Info Bot

## Overview
Wofh Build Info Bot is a Discord assistant that calculates building costs, upgrade times, and market estimates for the World of Frozen Heroes game. The bot parses natural language (English or Russian) and responds in-channel or via DM with structured breakdowns tailored to the requested building levels.

## Key Features
- Calculates build, upgrade, and rebuild costs with optional time, nonstop, price, and separator flags.
- Detects buildings by name or tag (e.g., `[b2]`) and understands multiple languages.
- Formats replies with resource summaries, hourly throughput, and optional price estimates.
- Ships with a lightweight regression harness (`src/tests/tests.js`) for portable validation.

## Quick Start
1. Copy the template configuration: `cp config.json.template config.json` and paste your Discord bot token inside.
2. Install dependencies: `npm install`.
3. Launch the bot locally: `node src/bot.js`. Use a test server before pointing at production guilds.

## Usage
- Invoke commands with `!bi` (English) or `!си` (Russian) prefixes, or mention the bot directly.
- Example: `!bi hut 3 5 time! price!` → upgrade cost from 3→5 including total time and sell price.
- Central commands: `build`, `upgrade`, `rebuild`, `help`. Add modifiers such as `non-stop!`, `separator!`, `price!`, `time!`, or `all!` for comprehensive output.
- The parser tolerates extra words and mixed casing; focus on including the building and level range.

## Testing
Run the regression harness with `node src/tests/tests.js`. Add new scenarios by extending the `tests` array; each entry compares the expected multiline reply with the handler output.

## Project Structure
- `src/bot.js` boots the Discord client and relays messages to the handler stack.
- `src/messageHandler.js` orchestrates parsing, post-processing, command routing, and reply composition.
- `src/parser.js`, `src/postParsed.js`, and `src/handler.js` capture domain logic for interpreting commands.
- `src/language/` stores localized tokens; `src/export/` contains building definitions and helpers.
- `config.json.template` documents required secrets; never commit filled credentials.

## Development Notes
- The bot logs parsed payloads when `debug` is true in `src/messageHandler.js`; disable for noisy environments.
- Prices resolve through `src/priceStub.js`; adjust values to match current market rates before publishing updates.
