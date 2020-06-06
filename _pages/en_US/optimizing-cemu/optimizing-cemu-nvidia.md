{% include toc title="Table of Contents" %}

Ensure you are running the [latest drivers](https://www.nvidia.com/Download/index.aspx) and that your GPU supports Vulkan or OpenGL 4.5+.
{: .notice--primary}

 OpenGL 4.1 to 4.4 will work, however you may experience graphical issues.
 {:.notice--info}
{: .notice--textbox}

## GPU Settings

1. Open NVIDIA Control Panel
  - You can access this by right clicking on your Desktop
1. Make sure you are on the `Manage 3D Settings` section
  - This is the default section when opening the control panel
1. Go to the `Program Settings` tab
1. In "1. Select a program to customise" click `Add` -> `Browse`
1. Navigate to your Cemu folder and select the Cemu executable
1. If you are on a laptop with dual graphics, under "2. select the preferred graphics processor for this program" select `High-performance NVIDIA processor`
1. Under `OpenGL rendering GPU` select your main graphics processor
1. Under `Power management` select `Prefer maximum performance`
1. Set `Threaded Optimization` to `On`
1. Set `Triple Buffering` to `On`
1. If you have a compatible display, enable G-Sync

![]({{ "/assets/images/nvidia-gpu-settings.png" | absolute_url }})

## Cemu Settings

1. Open the Cemu main menu
1. Click `Options` -> `General settings` on the top bar

    ---

3. Navigate to the `Graphics` tab
1. Change the `Graphics API` to:
  - `Vulkan` can increase performance but reduces stability
  - `OpenGL` is more stable and can reduce crashing
1. For Vulkan, ensure that `Graphics Device` is correct and using your most powerful card in the case of devices with dual graphics
1. Set `VSync` to:
  - For Vulkan, set to `Triple buffering`
  - For OpenGL, set to `Off`

    You may not notice a difference in performance between OpenGL and Vulkan on some NVIDIA cards. Test yourself as to which is better for your configuration.
    {: .notice--info}

7. Navigate to the `Audio` tab
1. Under `General`, change `API` to `XAudio2`

## Game Profiles

{% capture game-profiles %}{% include_relative game-profiles.md %}{% endcapture %}
{{ game-profiles | markdownify }}
