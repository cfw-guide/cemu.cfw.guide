---
title: "Troubleshooting"
permalink: /troubleshooting
---

{% include toc title="Table of Contents" %}

## The Legend of Zelda: Breath of the Wild

[Full Cemu Wiki listing of issues](https://wiki.cemu.info/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild)

### System update requested at boot

This is caused by the game not being updated. BOTW must have update version 1.4.0 or above to work. Follow our [Dumping Updates and DLC](dumping-updates-and-dlc) guide to dump and install the latest BOTW update to Cemu.

### Game freezing after "Open your eyes..."

This is caused by the game not being updated. BOTW must have update version 1.4.0 or above to work. Follow our [Dumping Updates and DLC](dumping-updates-and-dlc) guide to dump and install the latest BOTW update to Cemu.

### Constant stuttering during gameplay

This can be caused by shader compilation or Vulkan pipeline cache building. With OpenGL, the shader cache will build up over time and will become unnoticable. Vulkan pipeline cache will build quicker, however has to rebuild every time you update your GPU drivers.

### Off-coloured "milky" sea/water

This is caused by the disabling of `Full Sync at GX2Drawdone()` on OpenGL. You can either enable it, or switch to Vulkan which has it forcefully enabled.

### Black/grey sky

This is caused by the latest NVIDIA graphics drivers on Vulkan. You can fix it for now by reverting to previous graphics drivers or switching to OpenGL.

### Cutscenes (Rito Village/Vah Medoh) cause the game to freeze

This can be caused by setting the framerate to 60FPS. Set it to 30FPS temporarily, then set it back after the cutscene has finished.

### Thunderblight Ganon disappears during battle

This can be caused by setting the framerate to 60FPS. Set it to 30FPS temporarily, then set it back after the battle has finished.

### Flurry-rush attacks won't connect with enemy

This can be caused by setting the framerate to 60FPS. We found that if you were close enough, all hits would land anyway. Setting framerate to 30FPS will fix this properly.
