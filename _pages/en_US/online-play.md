---
title: Online Play
permalink: /online-play
---

{% include toc title="Table of Contents" %}

In this section, we look at how to enable online play on Cemu. This involves dumping a set of online files from your Wii U to make Nintendo think that the connection from Cemu is actually coming from your console.

If you do not plan on using online services, we recommend you skip this section entirely to reduce the risk of a ban.
{: .notice--primary}

After we've dumped the online files, you'll be able to play with other Wii U and Cemu players on Nintendo's official game servers.

You will need to have a homebrewed Wii U running MochaCFW for this, as system access is required to retrieve game files. You can do this by following the instructions on [wiiu.hacks.guide](https://wiiu.hacks.guide/). Once you've completed the process, come back to this page and continue.

As we will be connecting to real Nintendo servers, do not:
- Use mods, cheats or hacks
- Play on both your console and Cemu at the same time
- Share your online files for other people to use

Doing these may get your console banned, restricting you from online play.

This process involves accessing the Wii U internal memory! If you don't follow the instructions correctly, you could potentially cause serious damage to your console.
{: .notice--danger}

## Introduction

For this method, we will be copying update/DLC files over the internet using an FTP (File Transfer Protocol) server and client. This allows you to copy files over your local network directly to your computer.

## Requirements

- A Wii U with [MochaCFW](https://wiiu.hacks.guide/)
- An SD card used for modding the Wii U

## Downloads

- The latest release of [wiiu-nanddumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest)
- The latest release of [dumpling](https://github.com/emiyl/dumpling/releases/latest)

## Preparations

1. Move the dumpling `.elf` file to the `\wiiu\apps` folder on your SD Card
1. Extract the wiiu-nanddumper `.zip` file to the `\wiiu\apps` folder on your SD card
1. Eject your SD card from Windows and put it into your Wii U console

## Copying Files

### Obtaining OTP and SEEPROM

1. Power on your Wii U console
1. Open the Homebrew Channel
1. Run `nanddumper.elf`
1. Set `OTP (1KB)` and `SEEPROM (1KB)` to `<yes`
1. Set everything else to `<no>`
1. Your Wii U will now reboot

### Using dumpling

1. Open the Homebrew Channel again
1. Launch MochaCFW if it's not already running
1. Run `dumpling.elf`
1. Select `Online Files` and press the **(A)** button
1. Select `Friends List` and press the **(A)** button again
1. Press the Home button to exit and then turn off your Wii U

## Copying to Cemu

1. Take your SD card out of your Wii U and put it in your PC
1. Copy `otp.bin` and `seeprom.bin` to your Cemu directory
  - This is where `Cemu.exe` is located
1. Copy **the contents** of `dumpling/online_files/mlc01` to your Cemu mlc01 folder
  - Overwrite any files if prompted
1. Copy the `dumpling/friends_list` folder to your Cemu games directory

## Selecting your Account

1. Open the Cemu emulator
1. On the top bar, go to `Options` -> `General Settings`
1. Navigate to the `Account` tab
1. Ensure your active account is set to the account you use on your Wii U
1. Check the box `Enable online mode`

![]({{ "/assets/images/cemu-account-settings.png" | absolute_url }})
{:.notice--textbox}

Your Wii U should now be ready to go online. If you ever want to disable online features, simply uncheck the box `Enable online mode`.

Continue to [Optimizing Cemu](optimizing-cemu)
{: .notice--info}
