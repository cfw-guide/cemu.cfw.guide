## Instructions

Motion controls are not available for Xbox and many other controllers, making some features in games, such as shrine puzzles in Breath of the Wild, hard to use. Read below on other methods to use motion controls.
{: .notice--textbox}

1. Connect your Xbox controller to Windows
1. Open the Cemu application
1. On the top bar, go to `Settings` -> `Input settings`
1. Change `Emulate controller` to `Wii U Gamepad`
1. Change `Controller API` to `XInput`
1. Change `Controller` to `Controller X`
  - If your controller isn't visible or doesn't work, try setting `Controller API` to `DirectInput`
1. Proceed to map all your controller button inputs
1. At the top, enter in a controller profile name, e.g. `Xbox Controller`
1. Click `Save`

If you're not interested in settings up motion controls, you skip this section below.

## Motion Controls

{% capture full-solutions %}
Motion controls can be fully supported by a variety of other devices, including:
- Android/iOS/Windows Phone devices with a gyroscope
  - CemuNoGyro with Web Server: [(Click Here)](https://github.com/quinton-ashley/cemu-no-gyro)
  - MotionSource App & Web Server: [(Click Here)](https://wiki.cemu.info/wiki/Motion_Controls#Phones.2FTablets_that_include_a_gyroscope)
- MotionPlus WiiMotes
  - Should be supported natively by Cemu
  - Alternatively, [WiimoteHook](https://epigramx.github.io/WiimoteHook/)
- Steam Controllers
  - Steam Gyro [Information](https://github.com/FrogTheFrog/steam-gyro-for-cemuhook)
  - [Latest Release](https://github.com/FrogTheFrog/steam-gyro-for-cemuhook/releases/latest)
{% endcapture %}
<div class="notice--success">{{ full-solutions | markdownify }}</div>

{% capture limited-solutions %}
Other limited solutions include:
- Dualshock 3 controllers
  - May not be as accurate or responsive as DS4 controllers.
  - Covered by Cemuhook's webpage: [(Click Here)](https://cemuhook.sshnuke.net/padudpserver.html)
- Emulate Motion Axes using Controller Analog Sticks
  - CemuNoGyro [Information](https://github.com/quinton-ashley/cemu-no-gyro)
  - [Latest Release](https://github.com/quinton-ashley/cemu-no-gyro/releases/latest)
- Right-clicking within Cemu's window while a Gamepad is set as the current emulated controller.
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

Once you've set up your preferred method of motion controls, you can follow the instructions below to installing Cemuhook and enabled gyro.

### Downloads

- The latest release of [Cemuhook](https://cemuhook.sshnuke.net/)
    - If you installed Cemuhook earlier, you don't need to download this

### Installing Cemuhook

1. Extract the contents of the Cemuhook `.zip` file to the Cemu directory
1. Open the Cemu application
1. In the bottom-right-hand corner, it should say `Cemu plugin x.x.x.x by rajkosto`
    - This means Cemuhook has been successfully installed
    - If doesn't say this, ensure that your Cemu directory looks like this:

![]({{ "/assets/images/cemuhook.png" | absolute_url }})
{:.notice--textbox}

### Instructions

1. On the top bar, go to `Settings` -> `Gamepad Motion Source`
1. Select your controller from this list
1. Select `By slot`
