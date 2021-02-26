---
title: Installing Games
permalink: /installing-games
excerpt: Installing decrypted Wii U dumps for use in Cemu
toc: true
toc_sticky: true
sidebar:
  nav: guide
---

This page will take you through installing decrypted game dumps in Cemu. Ensure that you have your main game, the latest update, and any DLC wanted first beforehand.

If you have an encrypted game dump , you may need to decrypt it using [Cdecrypt](/assets/files/Cdecrypt_v2.0b.zip). If you used dumpling to get your dump, you won't need to do this.

If you don't have any game dumps, go to [Dumping Games](/dumping-games) first to get a decrypted copy.
{: .notice--info}

Some games, such as [Breath of the Wild](https://wiki.cemu.info/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild), require the latest update to function correctly in Cemu.
{:.notice--warning}

## Games, Updates and DLC

1. Open the Cemu application
1. On the top bar, click `File` -> `Install game title, update or DLC`
1. Navigate to the `dumpling` folder on your SD card
1. Open the relevant folder corresponding to what you want to install
  - This is either the `Games`, `Updates` or `DLC` folder
1. Open the folder of what you'd like to install
1. Open the `meta` folder and select `meta.xml`
1. Cemu should now automatically install the files for you

Do this as many times as you need until everything you dumped is installed.
{: .notice--info}

## Saves

1. Open the Cemu application
1. Right click on the game you'd like to transfer the save to
1. Click `Save directory`
1. Copy over the contents of the `dumpling/Saves/[game]` folder from your SD card or USB device to the save directory
    - Where `[game]` is whichever game you want to copy over
1. Navigate to the root of your mlc01 directory
1. Copy over the contents of `dumpling/Online Files/mlc01` from your SD card or USB device to the mlc01 directory and replace any files if prompted
1. Close Cemu and re-open it again

---

You should now have all the games you dumped installed onto Cemu.

In the next step, we will enable online multiplayer which allows us to play on Nintendo servers with other Wii U owners.

Continue to [Online Play](online-play)
{: .notice--info}
