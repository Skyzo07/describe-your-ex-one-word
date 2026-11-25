# Describe Your Ex in One Word

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![GitHub repo](https://img.shields.io/badge/GitHub-Skyzo07%2Fdescribe--your--ex--one--word-black)](https://github.com/Skyzo07/describe-your-ex-one-word)
[![make.fun live](https://img.shields.io/badge/make.fun-live-brightgreen)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)

Entry for the make.fun bounty **"Describe Your Ex in One Word"** ($2, closes 2026-11-27T06:40Z):
[https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)

## The entry

**Unsubscribe** — 11 characters, one word.

An ex reduced to a newsletter you opted out of. The joke lands at a glance:
you cancel a subscription the moment it stops being worth it, and everyone
has hit unsubscribe on something that kept showing up uninvited. It is not
an insult and not the obvious "ghosted/blocked" pick — the subscription
angle startles while staying instantly clear, and it needs no caption.

## How it was chosen

30 candidate single words were scored against the judge's five criteria,
in order (verdict readability, comic punch, surprise, craft, recognition),
30 points each, total /150. Full ranked list in `candidates.md`
(kept in the competition folder, outside this repo):

1. **Unsubscribe — 143/150**
2. Refund — 136/150
3. Uninstalled — 135/150

## How it works

`main.ts` is a dependency-free Node 22 program. It writes the winning word
to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `/tmp` for local
testing), after a gate check that the word is exactly one word of 1–111
characters with no whitespace.

```sh
node main.ts
```

## Verification

Local run writes `entry.txt` containing exactly `Unsubscribe` (11 chars,
no trailing newline), which passes the sealed gate: UTF-8 text, 1–111
characters, not only whitespace.
