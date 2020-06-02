---
title: Online Play
permalink: /online-play
---

{% include toc title="Table of Contents" %}

In this section, we look at how to enable online play on Cemu. This involves dumping a set of online files from your Wii U to make Nintendo think that the connection from Cemu is actually coming from your console.

If you do not plan on using online services you may skip this page. Using Cemu online has not resulted in any bans to date.
{: .notice--primary}

After we've dumped the online files, you'll be able to play with other Wii U and Cemu players on Nintendo's official game servers.

To do this, we're going to need to use a custom homebrew application to dump console files. This is done using an exploit in the Wii U browser.

As we will be connecting to real Nintendo servers, do not:
- Use mods, cheats or hacks
- Share your online files for other people to use
- Play on both your console and Cemu at the same time
  - No confirmed ban cases but this may still be unsafe.
  - Using the same account will kick the other player offline.

Doing any of these may get your console banned, restricting you from accessing online play temporarily or permanently.

{% capture onlineWarning %}

Warning regarding `Reformatting` or `Selling` your Wii U Console:

- Reformatting your console will result in your NNID being unlinked from that console.  You will no longer be able to use online features on Cemu until you re-link your account to that console and re-obtain the files necessary for online play.

- Selling your console (which is not permitted by Cemu because you technically do not own that data anymore,) will likely also result in the new owner reformatting the console or otherwise removing your account from the console. This will result in permanent loss of access.

`If you want to play online with Cemu, keep your Wii U console.`

{% endcapture %}

<div class="notice--danger">{{ onlineWarning | markdownify }}</div>

## Requirements

- An SD card for homebrew

## Downloads

If you set up homebrew before when using dumpling, you'll only need to download `wiiu-nanddumper`.
{:.notice--info}

- The latest release of [MochaCFW](https://www.wiiubru.com/appstore/zips/mocha.zip)
  - This will also work with (Coldboot) Haxchi
- The Mocha [config](/assets/files/config.ini)
- The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest)
  - You will need to download the `payload.zip` file
- The v1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` release of The Homebrew Launcher
- The latest release of [wiiu-nanddumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest)
- The latest release of [dumpling](https://github.com/emiyl/dumpling/releases/latest)

## Preparations

1. Extract the `mocha.zip` file to the root of your SD card
  - If prompted to, replace any pre-existing files
1. Extract the `homebrew_launcher.v.1.4.zip` file to the root of your SD card
1. Copy the `config.ini` file to the `/wiiu/apps/mocha` folder on your SD card
1. Copy the `payload.elf` file from the `payload.zip` file to the `/wiiu` folder on your SD card
1. Extract the dumpling `.zip` file to the root of your SD card
1. Extract the wiiu-nanddumper `.zip` file to the `\wiiu\apps` folder on your SD card
1. Eject your SD card from Windows and put it into your Wii U console

## Dumping Files

### Opening the Homebrew Launcher

1. Turn on your Wii U console
1. Launch the internet browser and open `wiiuexploit.xyz`
1. Tap `Run Homebrew Launcher!`
  - If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot
  - Once rebooted, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again

### Using nanddumper

1. Run `nanddumper.elf`
1. Set `OTP (1KB)` and `SEEPROM (1KB)` to `<yes`
1. Set everything else to `<no>`
1. Your Wii U will now reboot

### Launching MochaCFW

1. Open the Homebrew Launcher as mentioned previously
1. Once in the Homebrew Launcher, launch MochaCFW
  - This should return you back to the Homebrew Launcher, where we will now launch dumpling

### Using dumpling

1. Run the dumpling app from the Homebrew Launcher
1. Select `Account Data` using the **(A)** button
  - If you did this before while dumping games, this isn't necessary
1. Select `Friends List` using the **(A)** button
1. Press **(START)** to begin dumping
1. Press the Home button to exit and then turn off your Wii U

## Copying to Cemu

1. Take your SD card out of your Wii U and put it in your PC
1. Copy `otp.bin` and `seeprom.bin` from the root of your SD card to your Cemu directory
  - This is where `Cemu.exe` is located
1. Copy **the contents** of `dumpling/account_data/mlc01` to your Cemu mlc01 folder
  - Overwrite any files if prompted
1. Copy the `dumpling/friends_list_xx` folder to your Cemu games directory
  - `xx` will vary depending on your region

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
