{% capture full-solutions %}
Motion controls can be fully supported by a variety of other devices, including:
- Android/iOS devices with a gyroscope
  - See the Android section of Cemuhook's webpage: [(Click Here)](https://cemuhook.sshnuke.net/padudpserver.html)
- MotionPlus WiiMotes
  - Should be supported natively by Cemu
  - Alternatively, [WiimoteHook](https://epigramx.github.io/WiimoteHook/)
- Steam Controllers
  - [Steam Gyro](https://github.com/FrogTheFrog/steam-gyro-for-cemuhook)
{% endcapture %}
<div class="notice--success">{{ full-solutions | markdownify }}</div>

{% capture limited-solutions %}
Other limited solutions include:
- Dualshock 3 controllers
- Android/iOS devices with a magnetometer
  - Will be slow and sluggish
{% endcapture %}
<div class="notice--warning">{{ limited-solutions | markdownify }}</div>

{% capture partial-solutions %}
Failing that, you _might_ be able to get by with:
- CemuNoGyro (Emulate Motion using Controller Analog Sticks)
  - [Information](https://github.com/quinton-ashley/cemu-no-gyro)
  - [Latest Release](https://github.com/quinton-ashley/cemu-no-gyro/releases/latest)
- Android/iOS devices with only an accelerometer
- Non-MotionPlus WiiMotes
- Right clicking and using the mouse wheel on the game with your mouse
{% endcapture %}
<div class="notice--danger">{{ partial-solutions | markdownify }}</div>

You can view how to use and install these on the [Cemu Wiki](https://wiki.cemu.info/wiki/Motion_Controls).
{: .notice--info}
