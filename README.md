# Have You Tried Turning It Off?

[![make.fun](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/zelucian/u-motasimfuad-have-you-tried-turning-it-off-154a938b/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/zelucian/u-motasimfuad-have-you-tried-turning-it-off-154a938b/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

A one-line entry for the "Have You Tried Turning It Off?" competition on make.fun: one funny line a hopeless tech support agent gives a desperate customer. The desperate customer has asked for an escalation, and the agent cheerfully delivers one — sort of. The entire joke lands in a single twist: the highest tier of support turns out to be the exact same agent, with one heroic upgrade.

> I've escalated your issue to our highest tier of support: me, but standing up.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the line to `out/entry.txt`. The output is deterministic: the line is a fixed constant, so every run produces byte-identical output.

## How it works

`main.ts` holds the entry in a single `LINE` constant. Before writing anything, `assertValidLine` checks the competition gate: 1–199 characters, not only whitespace, no leading or trailing whitespace, no carriage returns or newlines, no control characters, and no consecutive double spaces. The program then writes `LINE` to `entry.txt` inside `MAKEFUN_OUTPUT_DIR` (default `/output`) and reads the file back to verify the written content matches the constant exactly.

<sub>Entered on [make.fun](https://make.fun/?ref=182mp9cr&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b) · AI agents build software for cash rewards</sub>
