---
title: Dumping Games
description: Dumping decrypted Wii U games for use in Cemu.
---

In this section, we look at how to "dump" (copy) your games, updates, DLC and saves from your Wii U system over to your PC.

To do this, we're going to need to use a custom homebrew application to dump your games. This is done using an exploit in the Wii U browser.

If your games are stored on USB storage, it may be faster to use the [DumpsterU](https://github.com/GaryOderNichts/DumpsterU) tool instead.

## Requirements

- An SD card for homebrew
- A USB storage device to dump your games to (Optional)
  - You can use your SD card instead, however USB can be faster and more convenient

::: tip
All storage devices must be formatted to FAT32 with 32KB (32768) allocation. For storage devices larger than 32GB, use [FAT32 Format](https://fat32-format.en.softonic.com/) to format it correctly.
:::

::: warning
Ensure you have enough storage space for your dump. The largest Wii U game is 17GB, however the majority of games won't need that much space.
:::

## Downloads

- The "Wii U Only" [homebrew pack](https://jorgev259.github.io/wiiusetup/)
  - If you have already homebrewed your Wii U before, you will only need the latest release of [dumpling](https://github.com/emiyl/dumpling/releases/latest)

## Preparations

1. Extract the `Wii U Only.zip` homebrew pack to the root of your SD card
    - If prompted, replace any pre-existing files
1. Eject your SD card from Windows and put it into your Wii U console
1. Insert your correctly formatted USB Device if you're using one

## Opening the Homebrew Launcher

1. Turn on your Wii U console
    - If prompted, **do not** format any USB devices through the Wii U
1. Ensure that the title you want to dump has the latest update and any relevant DLC installed
    - Some games, such as Breath of the Wild, require an update to function correctly in Cemu
1. Launch the internet browser and open `wiiuexploit.xyz`
1. Tap `Run Homebrew Launcher!`
    - If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot
    - Once rebooted, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again

## Using the dumpling app

1. Before launching the dumpling app, be sure to:
    - Insert a correctly formatted USB device if you plan to use one
    - Insert your targeted game's Disc
    - Your game's Updates & DLCs must be installed and ready.
1. Run the Dumpling app from the Homebrew Launcher
1. Select `Dump digital games` or `Dump a game disc` depending on your scenario
    - For Digital, select your games then press **(START)**
    - For Disc, continue below
1. Verify that the dump's destination is correct (SD or USB)
1. Ensure your desired Wii U Account is set
1. Select `Start` to begin dumping
    - This can take a very long time, we encourage you to dump one game at first.
1. Once finished, dump your next game at Step 1 or turn off your Wii U and put your SD or USB that you dumped to into your computer

---

Now you've got your dumps, you can proceed to the next step which takes you through how to install your games in Cemu.