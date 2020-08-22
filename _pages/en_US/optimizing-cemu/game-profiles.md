By default, Cemu will only sure the single-core recompiler. For most games and processors, this will give you the best performance and stability.

However, some older processors (such as the AMD FX Series) can benefit from multi-core recompiling.

Some games as well, such as Breath of the Wild, see a massive improvement using multi-core recompiling, even on modern processors.

{% capture otherIssues %}

Doing this can cause other issues to occur:
- This can cause extra heat which may reduce performance in devices with poor thermals (e.g. laptops)
- This may cause some games to stop working or crash when enabled
  - If this happens, set "Mode" to a lower setting

{% endcapture %}

<div class="notice--danger">{{ otherIssues | markdownify }}</div>

Do not use this if you already get good performance in your game. This can actually cause the game to be slower with a lot of CPUs.
{: .notice--primary}

To continue, we need to know how many logical processors your CPU has. You can find out in the Windows Task Manager.

Right click on the Windows button and click `Task Manager` -> `More Details`.

Go to the `Performance` tab. Under `CPU` you should find `Logical processors`.

1. Open the Cemu main menu
1. Right click on your game(s) and click `Edit game profile`
1. Set "Mode" to:
  - If you use a CPU with 6 logical processors or higher, set to `Triplecore-recompiler`
  - For a CPU with 4 logical processors, set to `Dualcore-recompiler`
  - For a CPU with 2 logical processors, set to `Singlecore-recompiler`
1. Keep "Thread Quantum" set to `45000` for stable Audio performance.
  - If set to 100,000 - gives a 1~3FPS boost but you may encounter staticy audio or other unknown problems.

If your CPU overheats while using the Triplecore-recompiler, but you need multi-core for performance, consider using Dualcore-recompiler instead.
{:.notice--info}
