## Downloads

- The latest release of [BetterJoy](https://github.com/Davidobot/BetterJoy/releases/latest)
- The latest release of [Cemuhook](https://cemuhook.sshnuke.net/)
    - If you installed Cemuhook earlier, you don't need to download this

## Installing Cemuhook

1. Extract the contents of the Cemuhook `.zip` file to the Cemu directory
1. Open the Cemu application
1. In the bottom-right-hand corner, it should say `Cemu plugin x.x.x.x by rajkosto`
    - This means Cemuhook has been successfully installed
    - If doesn't say this, ensure that your Cemu directory looks like this:

![]({{ "/assets/images/cemuhook.png" | absolute_url }})
{:.notice--textbox}

## Installing Drivers

1. Extract the BetterJoy `.zip` file to a folder
1. Open the folder and then open the `Drivers` folder
1. Run and install `ViGEmBus_Setup`
1. Enter the `HIDGuardian` folder
1. Right click the `HIDGuardian Install (Run as Admin)` file
1. Click "Run as Administrator"
  - Administrator privileges are required for this
1. When prompted, allow the script to run in administrator mode
1. Wait for the driver install to be complete
1. You may need to restart once this is done

## Instructions

1. Connect your Joy-cons or Switch Pro controller to Windows via Bluetooth
  - You will need to connect both joy-cons separately if you are using two
1. Open the BetterJoy application
1. Your controller(s) should appear connected
1. Open the Cemu application
1. On the top bar, go to `Settings` -> `Input settings`
1. Change `Emulate controller` to `Wii U Gamepad`
1. Change `Controller API` to `XInput`
1. Change `Controller` to `Controller X`
1. Proceed to map all your controller button inputs
1. At the top, enter in a controller profile name, e.g. `Switch Controller`
1. Click `Save`
1. Exit the Input Settings

## Motion Controls

1. On the top bar, go to `Settings` -> `Gamepad Motion Source`
1. Select your controller from this list
1. Select `By slot`
