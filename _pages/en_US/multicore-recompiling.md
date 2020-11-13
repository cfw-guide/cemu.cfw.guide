---
title: Multi-core Recompiling
permalink: /multicore-recompiling
excerpt: Configuring Cemu's recompiler to work best for your system.
---

In newer versions of Cemu, the recompiler will automatically be set to what's best for your system.

By default, this is set by the number of CPU cores in your PC, such that:
- 1-2 cores uses single-core recompiling
- 3-4 cores uses dual-core recompiling
- 5+ cores uses triple-core recompiling

Triple-core recompiling is the fastest of the three, but only works with 5 or more cores. **For most systems, this setting is left fine as default and does not need to be modified.**

Some games may perform worse using higher core counts. Do your own testing to see what works best for you.
{: .notice--primary}

Beware that when you increase the amount of cores, the CPU will generate more heat and games can become less stable. If you experience overheating or crashing, try setting the recompiler to a lower core count.
{:.notice--danger}

1. Open the Cemu main menu
1. Right click on your game(s) and click `Edit game profile`
1. Set "Mode" to your desired core count
    - `Single-core Interpreter` is not recommended as it is extremely slow
1. Keep "Thread Quantum" set to `45000` for stable Audio performance
  - Setting to higher values may give a small (1-3) FPS boost, but you may encounter static-like audio and other issues
