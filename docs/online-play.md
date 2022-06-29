---
title: Online play
description: Enabling online play in the Cemu emulator.
---

In this section, we look at how to enable online play on Cemu. This involves dumping a set of online files from your Wii U to make Nintendo think that the connection from Cemu is actually coming from your console.

::: tip

If you do not plan on using online services you may skip this page. Using Cemu online has not resulted in any bans to date.

:::

After dumping the online files, you will be able to play with other Wii U and Cemu players on Nintendo's official game servers.

To do this, we are going to run a dumping application through the Wii U browser to transfer your account information to a USB storage device or SD card.

As we will be connecting to real Nintendo servers, do not:
- Use mods, cheats or hacks
- Share your online files for other people to use
- Play on both your console and Cemu at the same time
  - There have been no confirmed ban cases, but this may still be unsafe
  - Using the same account to play online will kick the other player offline

Doing any of these may get your console banned, restricting you from accessing online play temporarily or permanently.

::: danger

#### Warning regarding reformatting or selling your Wii U Console:

- Reformatting your console will result in your NNID being unlinked from that console. You will no longer be able to use online features on Cemu until you re-link your account to that console and re-obtain the files necessary for online play.

- Selling your console (which is not permitted by Cemu because you technically do not own that data anymore) will likely also result in the new owner reformatting the console or otherwise removing your account from the same. This will result in permanent loss of access.

**If you want to play online with Cemu, keep your Wii U console.**

:::

## Requirements

- A FAT32 formatted USB storage device or SD card

::: tip

All storage devices must be formatted to FAT32 with a 32KB (32768) allocation. For storage devices larger than 32GB, use [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm) to format it correctly.

:::

## Ensuring your password is saved

1. Turn on your Wii U console
1. Load up the account you are going to use online
    - To switch accounts, open the top-left avatar
1. After signing in to the correct account, open the top-left avatar once again
1. Scroll down and turn on the "Save password?" feature

## Launching Dumpling

1. Turn on your Wii U console
    - If prompted, **do not** format any storage devices through the Wii U
1. Insert your USB storage device or SD card
1. Launch the internet browser and open `https://dumplingapp.com/`
1. Tap `Launch Dumpling`
    - If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot
    - Once rebooted, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again

## Using Dumpling

1. Select `Dump files to use Cemu online`
1. Verify that the dump's destination is correct (SD or USB)
1. Ensure your desired Wii U Account is set
1. Select `Start` to begin dumping
1. Select `Dump Wii U applications (e.g. Friend List, Browser etc.)`
1. Change the desired dump destination accordingly
1. Select the Friend List to dump
1. Select `Start` to begin dumping
1. When finished, go back to the Dumpling main menu
1. Exit the Dumpling app

## Copying the online files to Cemu

1. Take your USB storage device or SD card out of your Wii U and connect it to your PC
1. Copy `otp.bin` and `seeprom.bin` from the `/dumpling/Online Files` folder to your Cemu directory
    - This is where `Cemu.exe` is located
1. Copy the `sys` and `usr` folders from `/dumpling/Online Files/[Your Account Name]/mlc01` on your SD/USB device to the mlc01 folder
    - By default, the `mlc01` folder is located in the Cemu folder
    - If you are unsure where it is, check in `Options` -> `General settings` under "MLC Path"
    - Overwrite any files if prompted

## Adding the friend list application

1. Open the Cemu application
1. On the top bar, select `File` -> `Install game title, update or DLC`
1. Navigate to the `/dumpling/System Applications` folder on your SD/USB device
1. Enter the `/Friends List/meta` application folder
1. Select the `meta.xml` file

## Enabling online mode

1. Open the Cemu emulator
1. On the top bar, go to `Options` -> `General settings`
1. Navigate to the `Account` tab
1. Ensure you have read the text at the top of the page
1. Check the box `Enable online mode`

![A screenshot of a Cemu online account](/assets/images/cemu-account-settings.png)

---

Your Wii U should now be ready to go online. If you ever want to disable online features, simply uncheck the box `Enable online mode`.
