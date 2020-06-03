{% include toc title="Table of Contents" %}

Ensure you are running the [latest drivers](https://www.amd.com/en/support) and that your GPU supports Vulkan or OpenGL 4.5.
{: .notice--primary}

 OpenGL 4.1 to 4.4 will work, however you may experience graphical issues.
 {:.notice--info}

## Cemu Settings

1. Open the Cemu main menu
1. Click `Options` -> `General settings` on the top bar

    ---

3. Navigate to the `Graphics` tab
1. Change the `Graphics API` to `Vulkan`
  - This is very important and will increase performance by up to 50% on AMD GPUs
  - This can cause stuttering when playing for the first time or after a driver update, but will go away after time
1. Ensure that `Graphics Device` is correct and using your most powerful card in the case of devices with dual graphics
1. Set `VSync` to triple buffering

    ---

7. Navigate to the `Audio` tab
1. Under `General`, change `API` to `XAudio2`

## Game Profiles

{% capture otherIssues %}

Doing this can cause other issues to occur:
- With many processors, this can cause lower performance in games
- This can cause extra heat which may reduce performance in devices with poor thermals (e.g. laptops)
- This may cause some games to stop working or crash when enabled
  - If this happens, set "Mode" to a lower setting

{% endcapture %}

<div class="notice--danger">{{ otherIssues | markdownify }}</div>

We recommend only doing this if you are experiencing poor performance in low-end CPUs, where this can have a massive impact on framerates.
{: .notice--primary}

{% capture instructions %}

To continue, we need to know how many logical processors your CPU has. You can find this by opening the Task Manager in Windows.

Right click on the Windows button and click `Task Manager`. Next Click `More Details` and go to the `Performance` tab. Under `CPU` you should find `Logical processors`.

1. Open the Cemu main menu
1. Right click on your game(s) and click `Edit game profile`
1. Set "Mode" to:
  - If you use a CPU with 6 logical processors or higher, set to `Triplecore-recompiler`
  - For a CPU with 4 logical processors, set to `Dualcore-recompiler`
  - for a CPU with 2 logical processors, set to `Singlecore-recompiler`
  1. Set "Thread Quantum" to `100000`

  {% endcapture %}

<div class="notice--info">{{ instructions | markdownify }}</div>
