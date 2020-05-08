## Downloads

- The latest release of [DS4Windows](https://github.com/Jays2Kings/DS4Windows/releases/latest)

## Instructions

1. Download and extract DS4Windows to your computer
  - Select the `_x64.zip` file
1. Connect your Dualshock 4 controller to Windows via Bluetooth
1. Open the DS4Windows application
1. Ensure your controller is registered with DS4Windows
1. Navigate to the `Settings` tab
1. Enable `Hide DS4 Controller`
1. Enable `UDP Server`
  - This should say `127.0.0.1` with port `26760`

    ![]({{ "/assets/images/ds4windows.png" | absolute_url }})
    {: .notice--info}

1. Open the Cemu application
1. On the top bar, go to `Settings` -> `Input settings`
1. Click `Controller API` and select `DSUClient`
1. Click `Settings` and ensure that `IP` and `Port` identical to what you saw under `UDP Server`

    ![]({{ "/assets/images/dsu-client.png" | absolute_url }})

1. Click `Controller` and select `Client X`
1. Proceed to map all your controller button inputs
1. At the top, enter in a controller profile name, e.g. `DSU Controller`
1. Click `Save`
