
## Cinnamon
Desktop: Cinnamon v: 6.2.9 

Distro: Linux Mint 22 Wilma

### Email client: Thunderbird
I use thunderbird as email client and I want it to stay in the system tray. 
However, thunderbird does not have such feature as for now (May 2024).

There some extensions trying to cope for this lacking feature, but for me they did not work.

The solution for me was `kdocker`. 
I made a shorcut to run the command `kdocker -q -t thunderbird`, and I set it to run at startup.

I installed the extensions "Minimize on Close" by thunderbird, so that when I close it, it goes back to the tray (kdocker has the option iconify when minimized, but not iconify when closed, that's why we need to minimize thunderbird).

## GNOME

To check the version of GNOME you are running use the command `gnome-shell --version`, or just the About GUI.
I tried GNOME 43.9 on Debian 12 (bookworm).

### Workspaces

I configure workspaces for my GNOME desktop enviroment.
In settings-multitasking I found some basics settings.
Now I would like to add the workspace indicator in the top bar.
The settings for the top bar should be in Tweaks, but there is quite little.
I think I must use some extensions.
I installed an extension for firefox to use the web-based extension system of GNOME.
Apparently, the app `gnome-browser-connector` was already installed.
