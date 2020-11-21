---
title: Installing Cemu
permalink: /installing-cemu
excerpt: Installing and configuring Cemu for the first time.
---

{% include toc title="Table of Contents" %}

This section will take you through installing and configuring Cemu for the very first time. It is important you read all of the text here before proceeding to fully understand the instructions.

## Introduction

Cemu can be installed by extracting a `.zip` file to somewhere on your PC. In this guide, we use the Desktop as this location.

Before we launch it, we tweak the program slightly to run better, including fixing some scaling issues and making sure it runs as administrator. This is to ensure it has access to all the files it needs.

When we finally open the application, it will take us through the quick-start guide. This helps to set up the emulator properly with the necessary files and folders.

## Community Graphics Packs

Community graphics packs allow you to alter a game visually or how it will run, including:

- Displaying at higher resolutions
- Running at higher framerates
- Adjusting colours and bloom
- Improving anti-aliasing
- Applying game modifications

We recommend that you download these to allow tweaking your games for better performance.

## Downloads

- The latest release of [Cemu](https://cemu.info/#download)
- The latest release of [Cemuhook](https://cemuhook.sshnuke.net/)

## Preparations

1. Extract the Cemu `.zip` file to your Desktop
1. Right click on the Cemu executable
1. Click `Properties`
1. Navigate to the `Compatibility` tab
1. Enable the option "Disable fullscreen optimizations"
1. Enable "Run this program as administrator"
1. Click on `Change high DPI settings`
1. Enable "Use this setting to fix scaling programs for this program instead of the one in settings"
1. Enable "Override high DPI scaling behaviour. Scaling performed by: Application"
1. Click `Apply` -> `OK`

    These options are set to help avoid issues on various Windows versions, file restrictions, or display resolutions.  That said, one or more of these options will not be necessary for everyone, but not setting them may result in complications.
    {:.notice--textbox}

![]({{ "/assets/images/cemu-properties.png" | absolute_url }})
{:.notice--textbox}

## Installing Cemuhook

1. Extract the contents of the Cemuhook `.zip` file to the Cemu directory
1. Ensure that your Cemu directory looks like this:

![]({{ "/assets/images/cemuhook.png" | absolute_url }})
{:.notice--textbox}

## Configuration

1. Double click the Cemu application
1. When prompted, grant administrator access
1. You will now be greeted with the Cemu quickstart guide
  - This take you through setting up the emulator for first use

    ![]({{ "/assets/images/cemu-quickstart-guide.png" | absolute_url }})
    {:.notice--textbox}

1. <div class="wrap-collabsible">
      <input id="collapsible" class="toggle" type="checkbox">
      <label for="collapsible" class="lbl-toggle"><a>Create a folder in a safe location named "mlc01"</a></label>
      <div class="collapsible-content">
        <div class="content-inner notice--info">
          <div style="padding:.5em;">
            <p>The mlc01 path stores the emulated Wii U internal memory, including:</p>
            <ul>
              <li>System files and apps</li>
              <li>Installed games, updates, DLC</li>
              <li>User-created save data</li>
             </ul>
             <br>
             <p>By default, the mlc01 path will be stored in the Cemu directory.</p>          
          </div>
        </div>
        <div class="content-inner notice--textbox">
          <div style="padding:.5em;">
            <p>This should be on a storage drive that Cemu will always have access to, with lots of free space.</p>
            <p>If you leave the field blank, the <code>mlc01</code> folder will default to be with Cemu.exe in Cemu's folder. This folder contains all of your game installs, installed updates, DLCs, and game save files.</p>
            <p>If you delete this folder everything will be gone. If this path ever gets reset, make sure to set it again in <code>Options</code> -> <code>General Settings</code></p>
          </div>
        </div>
      </div>
    </div>
1. <div class="wrap-collabsible-2">
      <input id="collapsible-2" class="toggle-2" type="checkbox">
      <label for="collapsible-2" class="lbl-toggle-2"><a>Leave the "Game paths" field blank</a></label>
      <div class="collapsible-content-2">
        <div class="content-inner-2 notice--info">
          <div style="padding:.5em;">
            <p>This will allow Cemu to install RPX format titles to the <code>mlc01</code> storage with <code>File</code> -> <code>Install ...</code></p>
            <p>You will need double the space of the game while installing it. You will likely want to remove the source installation files after you are done to save space.</p>    
           </div>
        </div>
        <div class="content-inner-2 notice--textbox">
          <div style="padding:.5em;">
            <p>Alternatively, on a storage drive that Cemu will always have access to, with a lot of free space, create a folder in a safe location named <code>Games</code> or equivalent.</p>
            <p>In this directory you can place your WUD/WUX format games, or if you have extracted RPX format titles, make a folder for each game (labeled for the game) to place their <code>code</code>, <code>content</code> and <code>meta</code> folders.</p>
            <p>Once you set your <code>Game paths</code> to the <code>Games</code> folder itself, it will list all of the games in Cemu.</p>
          </div>
        </div>
        <div class="content-inner-2 notice--primary">
          <div style="padding:.5em;">
            <p>If your hardware changes where the storage drive letters change, this can disrupt Cemu from finding your <code>mlc01</code> path or your <code>Game paths</code>.</p>
            <p>If you ever start Cemu and something is missing, make sure to restart your computer. Otherwise, please ensure that your paths are set correctly.</p>
          </div>
        </div>
      </div>
    </div>

1. <div class="wrap-collabsible-3">
      <input id="collapsible-3" class="toggle-3" type="checkbox">
      <label for="collapsible-3" class="lbl-toggle-3"><a>Click "Download community graphics packs"</a></label>
      <div class="collapsible-content-3">
        <div class="content-inner-3 notice--info">
          <div style="padding:.5em;">
            <p>Community graphics packs allow you to alter a game visually or how it will run, including:</p>
            <ul>
              <li>Displaying at higher resolutions</li>
              <li>Running at higher framerates</li>
              <li>Adjusting colours and bloom</li>
              <li>Improving anti-aliasing</li>
              <li>Applying game modifications</li>
            </ul>
            <br>
            <p>We recommend that you download these to allow tweaking your games for better performance.</p>      
          </div>
        </div>
      </div>
    </div>
1. Click `Next`

## Finishing set-up

1. For now, do not click `Configure Input`
  - We will do this next in more detail
1. Enable "Automatically check for updates"
  - If you don't wish to get update notifications, you may update Cemu manually with an option under the Help menu
1. Click `Close`

Now we've gone through the quickstart guide, we'll move onto properly mapping controller inputs, (including motion controls).

Continue to [Controller Configuration](controller-configuration)
{: .notice--info}
