---
title: Multi-core Recompiling
description: Configuring Cemu's recompiler to work best for your system.
---

In newer versions of Cemu, the recompiler will automatically be set to what's best for your system.

By default, this is set by the number of CPU cores in your PC, such that:
- 1-3 cores use single-core recompiling
- 4+ cores use multi-core recompiling

Multi-core recompiling is the fastest and uses up to three threads, dynamically scaling for each game. **For most systems, this setting is left fine as default and does not need to be modified.**

::: tip
In rare cases, some games may perform worse using multi-core recompiling. Do your own testing to see what works best for you.
:::

::: warning
Beware that when you use multi-core recompiling, the CPU will generate more heat and games can become less stable. If you experience overheating or crashing, try manually setting the recompiler to single-core.
:::

## Manual Settings

1. Open the Cemu main menu
1. Right click on your game(s) and click `Edit game profile`
1. Set "Mode" to single-core or multi-core recompiling
    - We don't recommend using the single-core interpreter as it is extremely slow
