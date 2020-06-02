{% capture full-solutions %}
Motion controls can be fully supported by a variety of other devices, including:
- Android/iOS devices with a gyroscope
  - Android - Bottom section of Cemuhook's webpage: [(Click Here)](https://cemuhook.sshnuke.net/padudpserver.html)
  - iOS - Bottom of this Cemu Wiki Page: [(Click Here)](https://wiki.cemu.info/wiki/Motion_Controls)
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
  - May not be as accurate or responsive as DS4 controllers.
  - Covered by Cemuhook's webpage: [(Click Here)](https://cemuhook.sshnuke.net/padudpserver.html)
- CemuNoGyro (Emulate Motion Axes using Controller Analog Sticks)
  - [Information](https://github.com/quinton-ashley/cemu-no-gyro)
  - [Latest Release](https://github.com/quinton-ashley/cemu-no-gyro/releases/latest)
- Right-clicking within Cemu's window while a Gamepad is set as the emulated controller.
  - If an alternative controller is being emulated, you may open the Separate Gamepad View to do the same.
{% endcapture %}
<div class="notice--warning">{{ limited-solutions | markdownify }}</div>

{% capture partial-solutions %}
Failing that, you _might_ be able to get by with:
- Non-MotionPlus WiiMotes
- Android/iOS devices with a magnetometer
- Android/iOS devices with only an accelerometer
{% endcapture %}
<div class="notice--danger">{{ partial-solutions | markdownify }}</div>

You can view how to use and install most of these on the [Cemu Wiki](https://wiki.cemu.info/wiki/Motion_Controls) or [Cemuhook Motion Instructions](https://cemuhook.sshnuke.net/padudpserver.html) webpages.
{: .notice--info}
