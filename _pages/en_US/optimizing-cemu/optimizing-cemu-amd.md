## Game Profiles

1. Open the Cemu main menu
1. Right click on your game(s) and click `Edit game profile`
1. Set "Mode" to:
  - If you use a CPU with 6 threads or higher, set to `Triplecore-recompiler`
  - For a CPU with 4 threads, set to `Dualcore-recompiler`
  - for a CPU with 2 threads, set to `Singlecore-recompiler`

Using triple or dualcore recompiler can cause some games to crash. If a game stops working because of this, try at a lower setting.

![]({{ "/assets/images/cemu-game-profile.png" | absolute_url }})

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
