{% include toc title="Table of Contents" %}

Ensure you are running the [latest drivers](https://www.amd.com/en/support) and that your GPU supports Vulkan or OpenGL 4.5+.
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

{% capture game-profiles %}{% include_relative game-profiles.md %}{% endcapture %}
{{ game-profiles | markdownify }}
