---
title: Installing Games
excerpt: Installing decrypted Wii U dumps for use in Cemu
---

This page will take you through the installation of decrypted game dumps in Cemu. If you dumped the Friend List application earlier, you can install it like any other dump under "Installing dumps".

If you have an encrypted game dump , you may need to decrypt it using [CDecrypt](/assets/files/Cdecrypt_v2.0b.zip). If you used dumpling to get your dump, you will not need to do this.

## Installing titles

If you have dumped your account data and online files to install an eShop title, follow the "Downloading from eShop" tab to download and install your game. If you have a disc game dump, you can install it through Cemu in the "Installing dumps" tab.

::::: tabs

:::: tab name="Downloading from eShop" :default="true"

1. Open the Cemu application
1. On the top bar, click `Tools` -> `Download Manager`
1. Select your account, then click "Connect"
1. Right click on the title you want to install, and click "Download"

Once installed, you should be able to launch the title from the Cemu menu.

::::

:::: tab name="Installing dumps"

## Installing dumps

1. Open the Cemu application
1. On the top bar, click `File` -> `Install game title, update or DLC`
1. If you used [Dumpling](https://github.com/emiyl/dumpling) to dump your game, navigate to the `dumpling` folder on your SD card or USB storage device
    - If you used an alternative dumping tool, navigate to the folder where you keep your game dumps
1. Open the relevant folder corresponding the content you want to install
    - In Dumpling, this is either the `Games`, `Updates` or `DLC` folder
1. Open the folder of the game, update or DLC you would like to install
1. Open the `meta` folder and select `meta.xml`
1. Cemu should now automatically install the files for you

Repeat this as many times as you need until everything you dumped is installed.

Linux users may have issues installing updates/DLC. You may have to extract the title directly to the installation directory: `mlc01/usr/title`. If using Lutris, please read the [notes](https://lutris.net/games/cemu/) under the script provided.

## Transferring saves

1. Open the Cemu application
1. Right click on the game you would like to transfer the save to
1. Click `Save directory`
1. If you used Dumpling, open the `dumpling/Saves/[Game Title]` folder from your SD card or USB storage device
    - If you used an alternative dumping tool, navigate to the folder where you keep your save backups
1. Copy and paste the contents to the save directory you opened from Cemu

## Installing updates and DLC

Once you have installed the base game, you can follow the instructions in the "Downloading from eShop" tab to install any updates or DLC.

Some games, such as Breath of the Wild, **require** the latest update to be installed to be functional in Cemu.

::::

:::::

You should now have all the games you dumped installed onto Cemu.

In the next step, we will enable online multiplayer, which will allow us to play on Nintendo servers with other Wii U owners.