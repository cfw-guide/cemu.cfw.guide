{% include toc title="Table of Contents" %}

## Downloads

- The latest release of [BetterJoyForCemu](https://github.com/Davidobot/BetterJoyForCemu/releases/latest)

## Driver Install

1. Extract the BetterJoyForCemu `.zip` file to a folder
1. Open the folder and then open the `Drivers` folder
1. Run and install `ViGEmBus_Setup_1.16.166`
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
1. Open the BetterJoyForCemu application
1. Your controller(s) should appear connected
1. Navigate to the `Settings` tab
1. In the bottom panel, it should say `Starting server on 127.0.0.1:26760`
  - `127.0.0.1` is the IP address of the motion controls server
  - `26760` is the port of the server

    ![]({{ "/assets/images/betterjoy.png" | absolute_url }})

1. Open the Cemu application
1. On the top bar, go to `Settings` -> `Input settings`
1. Click `Controller API` and select `DSUClient`
1. Click `Settings` and ensure that `IP` and `Port` identical to what you saw in the BetterJoyForCemu LOG

    ![]({{ "/assets/images/dsu-client.png" | absolute_url }})

1. Click `Controller` and select `Client X`
1. Proceed to map all your controller button inputs
1. At the top, enter in a controller profile name, e.g. `Switch Controller`
1. Click `Save`
