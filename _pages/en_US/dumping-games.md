---
title: Dumping Games
permalink: /dumping-games
excerpt: Dumping decrypted Wii U games for use in Cemu.
redirect_from:
  - dumping
  - dumping-updates-and-dlc
  - transferring-save-data
---

{% include toc title="Table of Contents" %}

In this section, we look at how to "dump" (copy) your games, updates, DLC and saves from your Wii U system over to your PC.

To do this, we're going to need to use a custom homebrew application to dump your games. This is done using an exploit in the Wii U browser.

## Requirements

- An SD card for homebrew
- (Optional) A USB storage device to dump the game to
  - Only required if the game is too big for the SD card
  - Wii U games can vary in size up to 17GB, but having 12GB of storage should be okay for most games

## Downloads

- The "Wii U Only" [homebrew pack](http://wiiu.rikumax.net/)
- The latest release of [dumpling](https://github.com/emiyl/dumpling/releases/latest)

## Preparations

1. Extract the `Wii U Only.zip` homebrew pack to the root of your SD card
  - If prompted, replace any pre-existing files
1. Extract the `dumpling.zip` file to the root of your SD card
1. Eject your SD card from Windows and put it into your Wii U console
1. Plug a USB storage device into your Wii U if you want to dump your data to USB storage
  - Some users have reported better performance using the back ports, however the front ports should be fine as well

## Opening the Homebrew Launcher

1. Turn on your Wii U console
1. Launch the internet browser and open `wiiuexploit.xyz`
1. Tap `Run Homebrew Launcher!`
  - If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot
  - Once rebooted, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again

## Using dumpling

1. Insert any USB devices or game discs you'd like to use beforehand
1. Run the dumpling app from the Homebrew Launcher
1. Select `Dump digital games` or `Dump a game disc` depending on your scenario
1. Select all the games you'd like to dump using the **(A)** button and then press **(START)**
    - Skip this step when dumping a game disc
1. Change the dump destination and account accordingly
1. Select `Start` to begin dumping
  - This can take a very long time
1. Once finished, dump your next game at Step 1 or turn off your Wii U and put your SD/USB that you dumped to into your computer

## Installing to Cemu

### Games, Updates and DLC

1. Open the Cemu application
1. On the top bar, click `File` -> `Install game title, update or DLC`
1. Navigate to the `dumpling` folder on your SD card
1. Open the relevant folder corresponding to what you want to install
  - This is either the `Games`, `Updates` or `DLC` folder
1. Open the folder of what you'd like to install
1. Open the `meta` folder and select `meta.xml`
1. Cemu should now automatically install the files for you

### Saves

1. Open the Cemu application
1. Right click on the game you'd like to transfer the save to
1. Click `Save directory`
1. Copy over the contents of the `dumpling/Saves/[game]` folder from your SD card or USB device to the save directory
    - Where `[game]` is whichever game you want to copy over
1. Navigate to the root of your mlc01 directory
1. Copy over the contents of `dumpling/Online Files/mlc01` from your SD card or USB device to the mlc01 directory and replace any files if prompted
1. Close Cemu and re-open it again
1. On the top bar, click `Options` -> `Active Account`
1. Select the account used from your Wii U

You should now have any games, updates, DLC and saves installed onto Cemu.

We will now enable online multiplayer and play with people across the world on Nintendo servers in our online play guide.

Continue to [Online Play](online-play)
{: .notice--info}
