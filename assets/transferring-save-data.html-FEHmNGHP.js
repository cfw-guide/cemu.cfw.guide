import{_ as n,r as a,o as s,c as d,a as r,b as o,d as i,e as t}from"./app-Ca89HDD3.js";const u={},h={href:"https://www.wiiubru.com/appstore/zips/mocha.zip",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/dimok789/homebrew_launcher/releases/tag/1.4",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/FIX94/ftpiiu/releases",target:"_blank",rel:"noopener noreferrer"},c={href:"https://filezilla-project.org/download.php?show_all=1",target:"_blank",rel:"noopener noreferrer"},y={href:"https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history",target:"_blank",rel:"noopener noreferrer"},w={href:"http://wiiubrew.org/wiki/Title_database#00050000:_eShop_and_disc_titles",target:"_blank",rel:"noopener noreferrer"};function g(b,e){const l=a("ExternalLinkIcon");return s(),d("div",null,[e[37]||(e[37]=r('<p>In this section, we look at how to copy over your game saves from your Wii U system over to your PC.</p><p>To do this, we&#39;re going to need to use a custom homebrew application to dump your game saves. This is done using an exploit in the Wii U browser.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>These instructions are nearly identical to copying over digital games/updates/DLC, however we will copy the save data to another place and install them a different way.</p></div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>For this method, we will be copying save files over the internet using an FTP (File Transfer Protocol) server and client. This allows you to copy files over your local network directly to your computer.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This process involves accessing the Wii U internal memory! If you don&#39;t follow the instructions correctly, you could potentially cause serious damage to your console.</p></div><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><ul><li>An SD card for homebrew and dumping</li></ul><h2 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h2>',9)),o("ul",null,[o("li",null,[e[1]||(e[1]=i("The latest release of ")),o("a",h,[e[0]||(e[0]=i("MochaCFW")),t(l)]),e[2]||(e[2]=o("ul",null,[o("li",null,"This will also work with (Coldboot) Haxchi")],-1))]),e[18]||(e[18]=o("li",null,[i("The Mocha "),o("a",{href:"/assets/files/config.ini"},"config")],-1)),o("li",null,[e[4]||(e[4]=i("The latest release of ")),o("a",p,[e[3]||(e[3]=i("Homebrew Launcher Installer")),t(l)]),e[5]||(e[5]=o("ul",null,[o("li",null,[i("You will need to download the "),o("code",null,"payload.zip"),i(" file")])],-1))]),o("li",null,[e[7]||(e[7]=i("The v1.4 release of ")),o("a",f,[e[6]||(e[6]=i("The Homebrew Launcher")),t(l)]),e[8]||(e[8]=o("ul",null,[o("li",null,[i("You will need to download the v1.4 "),o("code",null,"homebrew_launcher.v1.4.zip"),i(" release of The Homebrew Launcher")])],-1))]),o("li",null,[e[12]||(e[12]=i("A modified release of ")),e[13]||(e[13]=o("a",{href:"/assets/files/ftpiiu_everywhere.elf"},"FTPiiU",-1)),e[14]||(e[14]=i(" (FTP Server) ")),o("ul",null,[o("li",null,[e[10]||(e[10]=i("If you use (Coldboot) Haxchi, download the latest release of ")),o("a",m,[e[9]||(e[9]=i("FTPiiU")),t(l)]),e[11]||(e[11]=i(" (FTP server)"))])])]),o("li",null,[e[16]||(e[16]=i("The latest release of ")),o("a",c,[e[15]||(e[15]=i("FileZilla")),t(l)]),e[17]||(e[17]=i(" (FTP Client)"))])]),e[38]||(e[38]=r('<h2 id="preparations" tabindex="-1"><a class="header-anchor" href="#preparations" aria-hidden="true">#</a> Preparations</h2><ol><li>Download and install FileZilla to your computer</li><li>Extract the <code>mocha.zip</code> file to the root of your SD card <ul><li>If prompted to, replace any pre-existing files</li></ul></li><li>Extract the <code>homebrew_launcher.v.1.4.zip</code> file to the root of your SD card</li><li>Copy the <code>config.ini</code> file to the <code>/wiiu/apps/mocha</code> folder on your SD card</li><li>Copy the <code>payload.elf</code> file from the <code>payload.zip</code> file to the <code>/wiiu</code> folder on your SD card</li><li>Download and move the <code>ftpiiu.elf</code> file to the <code>\\wiiu\\apps</code> folder on your SD Card</li><li>Ensure you have enough space on your PC for your game</li><li>Eject your SD card from Windows and put it into your Wii U console</li></ol><h2 id="launching-mochacfw" tabindex="-1"><a class="header-anchor" href="#launching-mochacfw" aria-hidden="true">#</a> Launching MochaCFW</h2>',3)),o("ol",null,[e[25]||(e[25]=o("li",null,"Turn on your Wii U console",-1)),e[26]||(e[26]=o("li",null,[i("Launch the internet browser and open "),o("code",null,"wiiuexploit.xyz")],-1)),o("li",null,[e[23]||(e[23]=i("Tap ")),e[24]||(e[24]=o("code",null,"Run Homebrew Launcher!",-1)),o("ul",null,[e[22]||(e[22]=o("li",null,"If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot",-1)),o("li",null,[e[20]||(e[20]=i("Once rebooted, ")),o("a",y,[e[19]||(e[19]=i("reset the browser's save data")),t(l)]),e[21]||(e[21]=i(" and try again"))])])]),e[27]||(e[27]=o("li",null,[i("Once in the Homebrew Launcher, launch MochaCFW "),o("ul",null,[o("li",null,"This should return you back to the Homebrew Launcher")])],-1))]),e[39]||(e[39]=r('<h2 id="copying-files" tabindex="-1"><a class="header-anchor" href="#copying-files" aria-hidden="true">#</a> Copying Files</h2><h3 id="connecting-via-ftp" tabindex="-1"><a class="header-anchor" href="#connecting-via-ftp" aria-hidden="true">#</a> Connecting via FTP</h3><ol><li>Power on your Wii U console</li><li>Open the Homebrew Channel</li><li>Run <code>FTPiiU Everywhere</code></li><li>On your screen you should see a line saying:<br><code>Listening for data connections at xxx.xxx.xxx.xxx:PORT</code><br> where each <code>x</code> and <code>PORT</code> is a number <ul><li>This is the IP address and port of your FTP server</li></ul></li><li>Keep this screen open on your Wii U</li><li>On your computer, open FileZilla</li><li>Enter in your IP address to the <code>Host</code> field on the top bar <ul><li>This is the <code>xxx.xxx.xxx.xxx</code> part</li></ul></li><li>Enter in your port to the <code>Port</code> field on the top bar <ul><li>This is the <code>PORT</code> part</li></ul></li><li>When warned about an insecure connection, ignore and continue</li><li>You should now see your Wii U storage displayed on the right half of the FileZilla window</li></ol><h3 id="transferring-saves" tabindex="-1"><a class="header-anchor" href="#transferring-saves" aria-hidden="true">#</a> Transferring saves</h3>',4)),o("ol",null,[e[31]||(e[31]=o("li",null,[i("If your game is stored on your Wii U internal memory, navigate to "),o("code",null,"storage_mlc/usr/save/00050000")],-1)),e[32]||(e[32]=o("li",null,[i("If your game is stored on a USB storage device, navigate to "),o("code",null,"storage_usb/usr/save/00050000")],-1)),e[33]||(e[33]=o("li",null,[i("In this directory, you should see folders with 8 character names "),o("ul",null,[o("li",null,`This is the last 8 digits of each game's "Title ID", which allows to Wii U to uniquely identify each game by a number, instead of a name`)])],-1)),o("li",null,[e[29]||(e[29]=i("You can use the full list of each game's Title ID to identify which game is which, found ")),o("a",w,[e[28]||(e[28]=i("here")),t(l)]),e[30]||(e[30]=o("ul",null,[o("li",null,[i("Copy the Title ID of the game and use "),o("strong",null,"Ctrl+F"),i(" to search for it")])],-1))]),e[34]||(e[34]=o("li",null,"Once you've found the save for the game you want, open that folder",-1)),e[35]||(e[35]=o("li",null,[i("There will be a folder named "),o("code",null,"8000000X"),i(" for each user, numbered in the order of creation")],-1)),e[36]||(e[36]=o("li",null,"Find the one that belongs to your account, and then copy that over to the left-side panel in FileZilla, over to your computer",-1))]),e[40]||(e[40]=r('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If any downloads fail, right click on them in the bottom panel and try to download them again.</p></div><p>After this is finished, you can exit FileZilla and turn off your Wii U.</p><h2 id="copying-to-cemu" tabindex="-1"><a class="header-anchor" href="#copying-to-cemu" aria-hidden="true">#</a> Copying to Cemu</h2><ol><li>Open the Cemu application</li><li>Right click on the game you&#39;d like to import save data to</li><li>Click <code>Save directory</code></li><li>Enter the <code>user</code> folder</li><li>Copy over your save data to that folder</li><li>If there is a <code>80000001</code> folder already there, rename it to something else <ul><li>This will make your old save data inaccessible until you rename it back</li></ul></li><li>Copy over your <code>8000000X</code> folder and rename it to <code>80000001</code> if it is not named that already</li></ol><p>The game should now boot with your save data installed. If it doesn&#39;t, check your account settings and make sure you are using the default Cemu user <code>80000001</code>.</p>',5))])}const x=n(u,[["render",g],["__file","transferring-save-data.html.vue"]]);export{x as default};