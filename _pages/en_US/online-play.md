---
title: Online Play
permalink: /online-play
---

{% include toc title="Table of Contents" %}

In this section, we look at how to enable online play on Cemu.

If you do not plan on using online services, we recommend you skip this section entirely to reduce the risk of a ban.
{: .notice--primary}

We can use this to play games such as Super Smash Bros, Splatoon and Mario Kart 8 online, using official Nintendo servers. This means that it'll be just like playing online on a real Wii U.

You will need to have a homebrewed Wii U for this, as system access is required to retrieve user files. You can do this quite easily if you follow the instructions in [wiiu.hacks.guide](https://wiiu.hacks.guide/). Once you've completed this, come back to this page and continue.

Since we will be connecting to <span style="text-decoration: underline">real Nintendo servers</span>, there will always be a chance of being banned. Do not use mods, cheats or hacks online.
{: .notice--danger}

This process involves accessing the Wii U internal memory! If you don't follow the instructions correctly, you could potentially cause serious damage to your console.
{: .notice--danger}

Never modify any file on your Wii U internal storage unless you know what you're doing.
{: .notice--textbox}

## Introduction

For this method, we will be copying update/DLC files over the internet using an FTP (File Transfer Protocol) server and client. This allows you to copy files over your local network directly to your computer.

## Requirements

- An SD card
- An SD card reader for your PC
- A [homebrewed Wii U](https://wiiu.hacks.guide/) with Custom Firmware
- Enough space on your PC for the update/DLC dump

## Downloads

- The latest release of [wiiu-nanddumper](https://github.com/koolkdev/wiiu-nanddumper/releases)
- If you use Haxchi or CBHC, download the latest release of [FTPiiU](https://github.com/FIX94/ftpiiu/releases) (FTP server)
- If you use Mocha CFW, download this modified release of [FTPiiU](/assets/files/ftpiiu_everywhere.elf) (FTP Server)
- The latest release of [FileZilla](https://filezilla-project.org/download.php?show_all=1) (FTP Client)

## Preparations

1. Download and install FileZilla to your computer
1. Move the `ftpiiu.elf` file to the `\wiiu\apps` folder on your SD Card
1. Extract the wiiu-nanddumper `.zip` file to the `\wiiu\apps` folder on your SD card
1. Create a folder on your computer called `online_files`
1. Eject your SD card from Windows and put it into your Wii U console

## Copying Files

### Obtaining OTP and SEEPROM

1. Power on your Wii U console
1. Open the Homebrew Channel
1. Run `nanddumper`
1. Set `OTP (1KB)` and `SEEPROM (1KB)` to `<yes`
1. Set everything else to `<no>`
1. Your Wii U will now reboot

### Connecting via FTP

1. Open the Homebrew Channel again
1. Run `FTPiiU Everywhere`
1. On your screen you should see a line saying:<br>
    `Listening for data connections at xxx.xxx.xxx.xxx:PORT`<br>
    where each `x` and `PORT` is a number
  - This is the IP address and port of your FTP server
1. Keep this screen open on your Wii U
1. On your computer, open FileZilla
1. On the right-side panel, navigate to the `online_files` folder
1. Enter in your IP address to the `Host` field on the top bar
  - This is the `xxx.xxx.xxx.xxx` part
1. Enter in your port to the `Port` field on the top bar
  - This is the `PORT` part
1. When warned about an insecure connection, ignore and continue
1. You should now see your Wii U storage displayed on the right half of the FileZilla window

### Transferring data

1. Navigate to the `storage_mlc/sys/title/0005001b/10054000/content` folder on your Wii U internal storage
1. Copy over both the `ccserts`, `scerts` and `10056000` folders to the `online_files` folder
1. Navigate to `storage_mlc/usr/save/system/act/800000XX`
  - The accounts will be numbered in order of creation starting at `80000001`
1. Copy over the `account.dat` file to the `online_files` folder
  - You can verify if the account belongs to you by opening up the `.dat` file in a text editor and checking the `AccountID` field
1. Navigate to `storage_mlc/sys/title/00050030`
1. Copy over the folder to `online_files` that corresponds to your region:<br>
  JP: `1001500A`<br>
  US: `1001510A`<br>
  EU: `1001520A`

Your game should now begin copying over to your computer. This will take a very long time and you may want to go do something else while this is happening.

After this is finished, you can exit FileZilla and turn off your Wii U.

## Copying to Cemu

1. Take your SD card out of your Wii U and put it in your PC
1. Find your `otp.bin` and `seeprom.bin` files and copy them to the online folder you made
1. Go to your Cemu mlc01 folder
1. Navigate to `mlc01\usr\title\0005001b\10054000\content`
1. Copy over both your `ccerts` and `scerts` folders from the `online_files` folder
1. Navigate to `mlc01\usr\title\0005001b`
1. Copy over the `10056000` folder from the `online_files` folder
1. Navigate to `mlc01\sys\title\0050030`
1. Copy over the `10015X0A` folder from the `online_files` folder corresponding to your region
1. Navigate to `mlc01\usr\save\system\act\80000001`
1. Copy over the `account.dat` file from the `online_files` folder
1. Go to your Cemu directory
  - This is where `Cemu.exe` is located
1. Copy over your `otp.bin` and `seeprom.bin` files from the `online_files` folder

## Selecting your Account

1. Open the Cemu emulator
1. On the top bar, go to `Options` -> `General Settings`
1. Navigate to the `Account` tab
1. Ensure your active account is set to `80000001`
1. Check the box `Enable online mode`

Your Wii U should now be ready to go online. If you ever want to disable online features, simply uncheck the box `Enable online mode`.

Continue to [Optimizing Cemu](optimizing-cemu)
{: .notice--info}
