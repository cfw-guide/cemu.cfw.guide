---
title: Installing Games
excerpt: Installing decrypted Wii U dumps for use in Cemu
---

This page will take you through installing decrypted game dumps in Cemu. Ensure that you have your main game, the latest update, and any DLC wanted first beforehand.

If you have an encrypted game dump , you may need to decrypt it using [Cdecrypt](/assets/files/Cdecrypt_v2.0b.zip). If you used dumpling to get your dump, you won't need to do this.

::: warning
Some games, such as [Breath of the Wild](https://wiki.cemu.info/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild), require the latest update to function correctly in Cemu.
:::

## Installing titles

If you have a game dump, you can install it through Cemu in the "Installing dumps" tab. If you have dumped your account data and online files, follow the "Downloading from eShop" tab to download and install your game.

<br>

::::: tabs

:::: tab name="Downloading from eShop" :default="true"

1. Open the Cemu application
1. On the top bar, click `Tools` -> `Download Manager`
1. Select your account, then click "Connect"
1. Right click on the title you want to install, and click "Download"

Once installed, you should be able to launch the title from the Cemu menu.

::::

:::: tab name="Installing dumps"

1. Open the Cemu application
1. On the top bar, click `File` -> `Install game title, update or DLC`
1. If you used [dumpling](https://github.com/emiyl/dumpling) to dump your game, navigate to the `dumpling` folder on your SD card
    - If you used an alternative dumping tool, navigate to the folder where you keep your game dumps
1. Open the relevant folder corresponding to what you want to install
    - This is either the `Games`, `Updates` or `DLC` folder for dumpling
1. Open the folder of what you'd like to install
1. Open the `meta` folder and select `meta.xml`
1. Cemu should now automatically install the files for you

Repeat this as many times as you need until everything you dumped is installed.

Linux users may have issues installing updates/DLC. You may have to extract the title directly to the installation directory: `mlc01/usr/title`. If using Lutris, please read the [notes](https://lutris.net/games/cemu/) under the script provided.

### Saves

1. Open the Cemu application
1. Right click on the game you'd like to transfer the save to
1. Click `Save directory`
1. If you used dumpling, open the `dumpling/Saves/[game]` folder from your SD card or USB device
    - If you used an alternative dumping tool, navigate to the folder where you keep your save backups
1. Copy and paste the contents to the save directory you opened from Cemu

::::

:::::

---

You should now have all the games you dumped installed onto Cemu.

In the next step, we will enable online multiplayer which allows us to play on Nintendo servers with other Wii U owners.