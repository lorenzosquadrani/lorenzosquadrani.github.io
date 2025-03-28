---
layout: note
title: "Arch Linux"
---

What the fuck is Arch Linux?

It is just another distribution of Linux.
What is Linux would be a good question.
Not sure about the answer.

Anyway you can say "apple" and "banana", just as you can say "Arch Linux" and "Ubuntu".

But somehow it feels like Arch Linux is special, like it is "more linux" then the other distributions. 
Why? It is simply because of the principles on which Arch Linux is built.
They includes the usual ones from all distributions like "modernity", "versatility", bla bla.
But one is really important: "simplicity".
Arch linux provides no more than it is strictly needed to run.
Whatever else you want, you need to set it up yourself.
That might sound bad, but then it has the advantage that you know exactly how your system is built.
So it grew very popular among geeks.
And I am a geek so hell I am installing it.

I mean, from the principles you read "GUI configuration utilities are not officially provided, encouraging users to perform most system configuration from the shell and a text editor." LoL.

You compile things for x86_64, or in general for an architecture.

The goal of the bootstrapping procedure is to setup an environment from which the scripts from arch-install-scripts (such as pacstrap(8) and arch-chroot(8)) can be run.

If the host system runs Arch Linux, this can be achieved by simply installing arch-install-scripts. If the host system runs another Linux distribution, you will first need to set up an Arch Linux-based chroot.

I am installing Arch Linux, it would be a nightmare to go deep in everything I do not fully understand. 
I just note down here things I am neglecting.
Not sure how all the checksum and signature verification works.
The commands for making a usb image do not work, I use the Linux Mint tool. LoL.
What is UEFI mode. What is EFI system partition.
So even the kernel is not mandatorily linux. What about the alternatives?
What is chrooting? Apparently it kind of opening a unix shell in the system that I just installed in the root filesystem partition.
Because for example I had nano in the live image of ArchLinux, but I do not have nano in this shell after chroot.
What is the fstab file for?

Overall, it seems like the really key passages when installing an operating system from a console are: make the right partitions, with the right format.
Install the OS in the root partition (which is equivalent to say: create a bunch of folder and files in that partition.
Install the bootloader in the right place, and give it the right configuration.

Now arch-linux is running. I already have a lot of folders that I do not understand, full of things that I do not understand, in my root I mean.
Not very nice.
Anyway, since I am not superexcited of losing time, I head to the Desktop Enviroment page of Arch Linux Wiki.

Damn it, lost a lot of time just to make systemd-netword working. And probably I will end up using a network manager.
Anyway, now I installed hyprland.
I installed kitty terminal emulator.
I installed uwsm (universal wayland session manager).

I installed it from scratch. Now I have the right partinioning.
Janko made me install the tool fd, quite cool.
How does it compare with whereis command?
I chose pulse audio instead of pipewire damn. Now I do know how to switch, because hyprland wants pipewire. Or maybe not.
The audio does not work now anyway, need to check it.
I installed waybar, but did not configure it very much.
I would like it to look like gnome as possible.

What is a fucking socket? How does it differ from a service?

When I installed waybar there was some gtk libraries in the dependencies. Does it mean that the applications I want to use determine which graphics library I use? whether GTK or Qt or others? Is it correct to call them graphics library? 
Libreoffice for examples let you choose if you want to use GTK or Qt. Thus, it is probably up to the developer to make the app compatible with a given graphics library.

VS-code needed a package org.freedesktop.secrets.
Maybe secrets are not actually packages. What are secretes?
To install it, I had to install one package among 4, I chose gnome-keyring.

(from the archlinux guide)
It is important to remember that there are two different kinds of configurations on a GNU/Linux system. System-wide configuration affects all users. Since system-wide settings are generally located in the /etc directory, root privileges are required in order to alter them. For example, to apply a Bash setting that affects all users, /etc/bash.bashrc should be modified.
User-specific configuration affects only a single user. Dotfiles are used for user-specific configuration. For example, the file ~/.bashrc is the user-specific configuration file. The idea is that each user can define their own settings, such as aliases, functions and other interactive features like the prompt, without affecting other users' preferences.

To make a service start at boot, just enable it with systemctl (like you start it, but enable).

Ops, I made a fresh arch linux install, with full GNOME DE.
Now I really want to understand if and how I can change the compositor of GNOME.
GNOME is on wayland. Does it make sense to say so?
Wayland is a display server protocol.
Any display server using the Wayland protocol is called compositor.
So the right sentence is: the GNOME desktop environment includes a compositor using the Wayland protocol.
What is this compositor? It is Mutter. 
Can I replace it with Hyprland? Does not seem easy. I read on GNOME page that they use hardware accelaration to make mutter run smooth.
I am afraid the compositor is a bit at the hearth of the desktop environment, thus changing it is quite challenging. But let us see what we can do.
The point is that I would like a dynamic compositor instead of a stacking one like Mutter.
As I suspected, it is not possible to change mutter in GNOME. GNOME is build on mutter somehow.
Even the gnome extensions that add some tiling power to the windows management of GNOME, do not get close to the power of a tiling compositor.
It is a completely different logic.
So new mission: slowly build hyprland and debuilding GNOME. I already installed hyprland.
We will face each issue one at a time.

Not sure why I gave up also the other mission, and went for a fresh minimal install of archlinux. 
Installed again hyprland and started makeing a DE from scractch.

### Environment Variable
What is an environment I am not sure, but I think it refers to a shell or bash thing. What is bash I am also not sure. What is a shell I am also not sure. LoL.

Anyway how to list environment variables in the terminal?
In archlinux the package coreutils provides the commanda printenv.
It also provides the command env to run a command in a modified environment.
Environment variables could be local or global.

When we say that a package provides a command, we mean it provides a binary which is placed in the PATH (probably in /usr/bin) and thus can be used as a command.

### Pacman
To search for a package among installed ones:

```
pacman -Qs keyword
```

### OpenPGP
OpenPGP is an open standard for cryptographic operations. 
I am not sure what open means.
Anyway this is a just a standard, i.e. a set of rules.

### Keyring 
I find on my archlinux the package `archlinux-keyring`. 
It is part of the core of archlinux, but I read it was installed on my system as a dependency.
I read it is required by base and base-devel.
Base seems to be a minimal package installed when installing archlinux itself.
So let us state this: archlinux comes with package called `archlinux-keyring`.
But it only provides a command `archlinux-keyring-wkd-sync`, which I do not know that it does.

Aha-aha. I have to install the library libsecret, archlinux core again.
Oh it was already installed because required by other packages.
I read that also org.freedesktop.secrets is installed. 
Not sure when, but at a certain point I installed kwallet, which provides this secrets.
Aha-aha. kwallet is KDE wallet. So no gnome-keyring is necessary. Fair enough.

But what the fuck are secrets? Do not know.

### Backlight
So how backlight is handled really depends on the hardware.
With Intel laptops, it usually through the ACPI interface.
There is a kernel module, called ACPI, which controls the power of the screen's LEDs.
Archlinux provides an interface to this module with the sysfs files in /sys/class/backlight.
The two important files are `max_brightness`, which tells you which is the maximum level of brightness you can set, and `brightness` which tells you the current level of brightness and is modifiable.
Notably, only the root user can edit the file by defualt.

Thus, we need to set a udev rule.
So first I check that the udevd.service, provided by systemd, is running and enabled. 
I use `systemctl | grep udev` for this.
Then I create a file `/etc/udev/rules.d/45-backlight.rules`. 
The number 45 I do not know why, someone puts 90, someone puts nothing.
In the file I write rule:

```
ACTION=="add", SUBSYSTEM=="backlight", KERNEL=="intel_backlight", RUN+="/usr/bin/chgrp video /sys/class/backlight/intel_backlight/brightness"
```
What this command rule does it is not clear.
But theoretically it should allow the users in the group video to access the brightness file as if they were root.
But what are groups?
Users and groups are used in GNU/Linux systems for access control.
Every file on a GNU/Linux system is owned by a user and a group. In addition, there are three types of access permissions: read, write, and execute.
Each file can have different permissions for the owner user, the owner group, and the others.
The groups existing in the system are listed in the file `/etc/group`.
I can check that the group `video` exists with the command:

```
cat /etc/group | grep video
```

I can check if my user is in the group with the command:

```
groups lorenzos
```

I am not, so I will add my user with the command:

```
gpasswd -a user group
```

The classic CLI tool for controlling editing the files without using echo is `acpilight` which provides the command `xbacklight`.

Now it works!

Now I would like to assign the brightness controll to the keys of brightness on my keyboard.
But what are they? Simply F6 and F7? Or are they considered differently? For example F3 (volume up), it is not considered F3 unless I keep pressed the key Fn.

I ran showkeys --scancode and showkeys --keycode, but I got just useless numbers lol.
Then I ran `wev`, and I noticed that I pressed the raise volume or the brightness up key, wev did not see anything.
This meant that some process was capturing them before wev could. 
This made sense because the volume was raised. 
Who was raising the volume? It turns out it was the hyprland process.
In hyprland.conf, there are already the keybinding for volume as well as brightness. 
The brightness is bound to brightnessctl, a tool that I do not have and that is why it does not work. 
I could replace it with xbacklight, or just install brightnessctl.
Well I installed brighnessctl and it worked out of the box. 
I even ask myself now if what I did before was necessary. I should try removing my user from the video group and see if it still works.
We can do it again using `gpasswd`.
Ok it looks like all the thing of the video group was useless.
In particular, it is this brightnessctl that magically does not need the permissions to work.
While, now that I have removed my user from video, xbacklight of course does not work.

### Network Manager
GNOME uses network manager. 
The service is probably already enabled, but we can check it via
```
systemctl list-unit-files
```

The problem is that the GUI that GNOME uses to display the wifi configuration is part of the GNOME core, prbabily of the GNOME applet. Quite hard to use on hyprland.
Although it should be possible. Cmon it is not related to the compositor.
Ye also the GNOME bar would be amazing to have in hyprland.

### Bluetooth
I just installed bluez for getting the bluetooth.service, enabled it and then blueman to have a panel applet.
But then I decided the panel applet is quite useless, since I very rarely connect new bluetooth items. 
On those rare occasion, I can just easily use a CLI tool.
The bluez-utils package provides `bluetoothctl`, which I find quite comfortable. 

### Notifications Manager
Archlinux has in its core applications libnotify, which implements the Desktop notifications specifications, and it is compatible both with X11 and Wayland.
You also need a notification server (or daemon).
I just installed `swaync` and added it to hyrpland conf file to start at the DE boot.
Notice that, when installing `swaync`, a service was added in my folder `/usr/share/dbus-1/services`.
It is called `org.erikreider.swaync.service`, but if I open it with nano I see that the name of the official service is giving is another one:

```
[D-BUS Service]
Name=org.freedesktop.Notifications
Exec=/usr/bin/swaync
SystemdService=swaync.service
```

### Specifications
A specification is a set of rules which define a standard way to implement a function, such as making an application run at startupu (XDG autotostart specification), or handling the notifications in a desktop environment (Desktop notifications specifications).
All the specifications for open-source, desktop applications on linux are collected on specifications.freedesktop.com.

### Media docs
I installed libreoffice.

### Screenshots 

I installed hyprshot. 
I would like to fork it and edit so that in the notification also shows me to buttons, one for saving the screenshot and one for editing it.
It seems doable because the whole hyprshot is just one shell file.
The scripts uses some local variables to keep track of what is happening.
But let us proceed by step.
First of all I notice that hyprshot has an option to open the screenshot just acquired with a command of my choice.
This is useful for the edit option: I can open the screenshot with my image editor.
I tried swappy and satty, which are basically the same. I like a bit more the graphics from satty, so I'll go with it.

I spotted the place of hyprshot where the notification is sent. 
I would like to add the buttons save and edit. 
Lucky for me, the standard libnotify with notify-send command supports adding buttons which returns certain values to the sender of the notification when clicked.
So I will try to edit hyprshot now.
I can easily add the buttons to the notifications. 
When the action options are used with notify-send, the process should automatically wait for the user to interact with the notification or for the notification timeout to pass. 
Otherwise, the process would normally end after sending the notification, and there would be no way to use the user response with the buttons, which would be printed in the standard output of the shell that was used to call hyprshot.
Unfortunately, I immediately notice that the process is not waiting at all. 
There is an option to make it wait explicitily (althought it should be automatically on when using --action), but that option does not work.
Eventually I spot in Hyprshot code a function called `checkRunning`, which looks very very ugly.
It sleeps 1s, probably to give the time for the main functions to get active. 
Then it continuosly checks for `slurp` to see if there is such process.
If there is not, it kills the process hyprpicker, a tool used hyprshot when the FREEZE option is on.
If I get rid of this checkRunning, the notify-send process correctly waits for my interaction with the notification.
Now of course I wonder if I care of the freeze option.
I think it could be handy sometimes, but sometimes not. 
Anyway, I notice that Hyprshot is using grimshot instead of grimblast, the version of grim developed directly by the hyprland team. 
I guess I will use grimblast in my script.

Actually grimblast is a full screenshot script. 
I will try it and edit that one instead.
First, I set the `GRIMBLAST_EDITOR` environment variable to be `satty` in my bashrc.


### Application launcher and File search tool
I want to use Albert. I like it, it always very fast. If it is too heavy and bloated as someone says I do not see it. The standard alternative would be rofi, but the wayland compatible versions at the moment does not have file search feature.

But how can Albert do not care about Wayland or X11? I heard it is because it is uses Qt. But does it make sense?
A Qt application could be run on X11 or Wayland.

Anyway, Albert is available in AUR.

Albert is gonna use default applications to open the files and the directory.
Remember to set the as you wish.
Default applications are dictated by the xdg standard.
You can set them using the tool `xdg-settings` or `xdg-mime`.

### Synchronization with Google Drive
I installed rclone via pacman (extra repository).
First I need to set up the connection with my remote Google Drive.
Just run `rclone config` for an interactive configuration session.

### Hyprland Configuration

I would like to have a battery-saving mode to run hyprland.
Basically, when I am in the login tty, since in by bash_profile there is hyprland, it starts it automatically using the config in .config/hypr/hyprland.conf.
But I can specify which config file to use with the parameter -c.
Thus, I can make a config file which starts half of the processes, saving lot of batteru runtime.

I would like the keybinding for whatsapp web to toggle its tab if it is already open.

I like the idea of that youtuber I forgot the name.
The idea was that every workspace has a default program running, which is always the same, so that really you do not have to think
were you want to quickly switch to another task. You are coding in workspace 3, you think oh I should write down this note, you switch to workspace 2 
where simplenote in waiting for you in your browser and you do it. 
It would be SO annoyting having to open a new browser in the same workspace, splitting the screen, to that and closing.
Of course, when a single task requires two or more programs, you can always open new instances.
The workspaces could be:
1 - tmux session
2 - coding (vscode or nvim)
3 - browser (whatsapp, simplenote, google calendar)
4 - emails
special workspace: spotify

Now I make that at startup, hyprland opens a tmux session in my workspace 1 and the browser in workspace 3.

### Text editor

Let us try to learn Vi/Vim/NeoVim/that thing.
Vim is a terminal text editor.
There is also a version with the GUI, caleld gVim.
I will try that one to learn.
Ok no, I tried it very quickly and it seems like it just add useless GUI.
Not GUI that lets me learn faster.
I will just go with NeoVim, without any gui extension.

The key feature of Vim is that it works with modes and commands.
There are 4 modes: visualization, insertion, ..., command.

I suspend the switching to Neovim, for when I have time or when I really need it.

### Tmux
Let's go with Tmux.
Tmux is a terminal multiplexer, i.e. a tool that helps you handle multiple terminals.
It is organized in sessions, windows, and panes.
Each session is its own login shell, thus with its own environment and its own life independent from your main login shell (meaning you could logout but processes run in the tmux sessions would still go on). 
Quite useless since when I logout is just to power off my laptop anyway.
So the windows are aumatically numbered and shown at the bottom of the tmux GUI.
Each pane is a terminal.

Basically you use tmux as one, two, or very many terminals. 
What you need to know is how to create new terminals in the position that you like, and how to move among them.
Every action that you can do in tmux starts with the `<PREFIX>`, which is by default `CTRL+b`.
After the prefix key, you type the command that you want to execute. 
The basics ones are:
- `c` - create and focus a new window
- `1` - focu window 1 (and so for any number)
- `%` - split the pane horizontally
- '"' - split the pane vertically
- `arrow keys` - move through panes
- `q` - show panes number and then pick one
But just use the [cheatsheet](https://tmuxcheatsheet.com/).

I installed some commong plugins:
- tmux pluggins manager
- tmux-sensible (some configurations on which everyone should agree on)

### Power management
Before trying any optimization of power consumption, I need to have a way to evaluate it.
To do that, I first try `powertop`.
### TODOs

### Printers software
Basically there is one option: [CUPS](https://wiki.archlinux.org/title/CUPS). 
Based on standards, open source.

We install it, then we can choose whether to enable the `cups.service` with `systemd` or to use socket activation to only start CUPS when a program requests it.

Starting the service and then try to print will not work, as no printers are shown.
We need to add the printers first. 
For this, we can use the Web Interface at `http://localhost:631/`.
Just go to administration, 

For printers, we usually do not need to worry about drivers, as most recent printers support driverless usage.



- printers software
- battery saving hyprland config
- battery usage checking software
How to do it I guess really depends on which browser I am using.


