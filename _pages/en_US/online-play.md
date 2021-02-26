---
title: Online Play
permalink: /online-play
excerpt: Enabling online play on the Cemu emulator.
toc: true
toc_sticky: true
sidebar:
  nav: guide
---

In this section, we look at how to enable online play on Cemu. This involves dumping a set of online files from your Wii U to make Nintendo think that the connection from Cemu is actually coming from your console.

If you do not plan on using online services you may skip this page. Using Cemu online has not resulted in any bans to date.
{: .notice--primary}

After we've dumped the online files, you'll be able to play with other Wii U and Cemu players on Nintendo's official game servers.

To do this, we're going to need to use a custom homebrew application to dump console files. This is done using an exploit in the Wii U browser.

As we will be connecting to real Nintendo servers, do not:
- Use mods, cheats or hacks
- Share your online files for other people to use
- Play on both your console and Cemu at the same time
  - There have been no confirmed ban cases, but this may still be unsafe
  - Using the same account to play online will kick the other player offline

Doing any of these may get your console banned, restricting you from accessing online play temporarily or permanently.

{% capture onlineWarning %}

Warning regarding reformatting or selling your Wii U Console:

- Reformatting your console will result in your NNID being unlinked from that console.  You will no longer be able to use online features on Cemu until you re-link your account to that console and re-obtain the files necessary for online play.

- Selling your console (which is not permitted by Cemu because you technically do not own that data anymore,) will likely also result in the new owner reformatting the console or otherwise removing your account from the console. This will result in permanent loss of access.

**If you want to play online with Cemu, keep your Wii U console.**

{% endcapture %}

<div class="notice--danger">{{ onlineWarning | markdownify }}</div>

## Requirements

- An SD card for homebrew

Your SD card must be formatted to FAT32 with 32KB (32768) allocation. For SD cards larger than 32GB, use [FAT32 Format](https://fat32-format.en.softonic.com/) to format it correctly.
{:.notice--info}

## Downloads

- The "Wii U Only" [homebrew pack](https://wiiusetup.chitowarlock.com/)
- The latest release of [dumpling](https://github.com/emiyl/dumpling/releases/latest)

## Preparations

1. Extract the `Wii U Only.zip` homebrew pack to the root of your SD card - `SD:\`
  - If prompted to, replace any pre-existing files
1. Eject your SD card from Windows and put it into your Wii U console

{% capture usbWarning %}

(Optional) A USB storage device for dumping everything into:

- Do not let the Wii U Format USB devices you plan to use with Dumpling.
- USB devices must be formatted to Fat32 32KB (32768) allocation.
  - USB is larger than 32GB? [Click Here](https://fat32-format.en.softonic.com/)

{% endcapture %}

<div class="notice--textbox">{{ usbWarning | markdownify }}</div>

Your SD card should look like this:

![]({{ "/assets/images/sd-card.png" | absolute_url }})
{:.notice--textbox}

## Dumping Files

{% capture accountWarning %}

Please ensure your NNID Password is being saved.

1. On your Wii U, load up the account you are going to use online.
1. To switch accounts, open the top-left avatar.
1. After you're on the correct account, open the top-left avatar once again.
1. Scroll down and turn on the "Save password?" feature.

**Not doing this will result in bad Online Files**

{% endcapture %}

<div class="notice--textbox">{{ accountWarning | markdownify }}</div>

### Opening the Homebrew Launcher

1. Turn on your Wii U console
1. Launch the internet browser and open `wiiuexploit.xyz`
1. Tap `Run Homebrew Launcher!`
  - If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot
  - Once rebooted, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again

### Using dumpling

1. Run the dumpling app from the Homebrew Launcher
1. Next, select `Dump files to use Cemu online`
1. Change the desired dump destination and account accordingly
1. Select `Start` to begin dumping
1. Select `Dump Wii U applications (e.g. Friend List, Browser etc.)`
1. Change the desired dump destination accordingly
1. Select the Friend List to dump
1. Select `Start` to begin dumping
1. When finished, go back to the Dumpling main menu
1. Exit the dumpling app
1. When finished, turn off your Wii U

## Copying the Online Files to Cemu

1. Take your SD (and if used, your USB) out of your Wii U and put it in your PC
1. Copy `otp.bin` and `seeprom.bin` from the `/dumpling/Online Files` folder to your Cemu directory
  - This is where `Cemu.exe` is located
1. Copy the `sys` and `usr` folders from `dumpling/Online Files/mlc01` on your SD/USB device to the mlc01 folder for Cemu
  - Overwrite any files if prompted

## Adding the Friend List application
1. Open the Cemu application
1. On the top bar, select `File` -> `Install game title, update or DLC`
1. Navigate to the `dumpling/System Applications` folder on your SD/USB device
1. Enter the `Friends List/meta` application folder
1. Select the `meta.xml` file

## Enabling Online Mode

1. Open the Cemu emulator
1. On the top bar, go to `Options` -> `General Settings`
1. Navigate to the `Account` tab
1. Ensure you have read the text at the top of the page
1. Check the box `Enable online mode`

![]({{ "/assets/images/cemu-account-settings.png" | absolute_url }})
{:.notice--textbox}

Your Wii U should now be ready to go online. If you ever want to disable online features, simply uncheck the box `Enable online mode`.

Continue to [Optimizing Cemu](optimizing-cemu)
{: .notice--info}
