---
layout: note
title: "Linux Ecosystem"
---

## Terminology
- devices: any hardware, also disk partitions


## Disk partition
Pro tip: it was quite stupid to have the whole disk as my Linux Root Filesystem.


## Linux Kernel
The linux kernel is the core of the operating system.
It manages all the physical devices.

The main devices of a system are: CPU, keyboard, mouse, serial ports, ...
Each device has its own Hardware Controller and its own Control and Status Register (CSR).
The CSR of device is used to start it, stop it, initialize it, diagnose any problems.

Of course, any applications needs to use the system's devices. 
However, when a developer write an application, he does not write the code for to manage the hardware controllers.
This is because is kept in the Linux kernel.
The software which that handle a hardware controller is called device driver.
Each device in the system is represented by a *device special file*, and all the device special files are stored in `/dev/`.

Drivers are stored in the directory `/lib/modules/`.

Drivers can be installe on a linux system using the package manager.

## Swap
A swap partition requires creating a partition, which is very hard to resize later, sometimes so hard that a full reinstall is required.
A swap file is a specially created file, normally located in the root '/' directory, that's just as fast as a partition, but that's much easier to change later if need be.
Most modern installers create a swap file because of its many advantages over a partition.

Swap partitions had advantages over swap files before the era of SSDs. They ensure that the swap space is contiguous, which reduces head seeking. You can also place the swap partition at the edge of the platter where reading and writing is faster than in the middle.
These days with SSDs being common, it doesn't really matter anymore.

Fair question. I've been using a swap file for probably a decade or more by now. Never noticed any performance penalty over a dedicated partition. Those who claim that a partition is faster, I'd like to see some actual benchmarks that confirm that. I've never seen any.

## Linux Folders
Usually, the root of a linux system contains the following folders:
- `/var/` - Contains all files that varies frequently while the system is running.

You can explore the filesystem hierarchy with the command `man hier` (open the system's manual at page "hierarchy").

## Desktop Manager
The Desktop Manager (DE) is a bundle of programs which provides a common graphical user interface.
Examples of DE are: CINNAMON, GNOME, KDE.

The main applications composing a DE are:
- window manager
- taskbar
- terminal emulator
- file manager
- text editor
- ...

On principle, you could mix applications from different desktop environments, making your custom desktop environment.
There are however some drawbacks: (1) applications provided by a desktop environment tend to integrate better with the native environment; (2) applications provided by two different DEs will probably rely on different libraries, so you will have to use disk space for additional dependencies.

The aesthetics of the GUI (how all the widgy-widgets look like) is handled by a "Toolkit". 
Examples of toolkits are GTK (Gnome Tool Kit) or Qt.
Importantly, Linux applications which provide a GUI might be based on GTK or Qt (or another toolkit, if there is).
At the time when I am writing, 03/2024, most linux distributions are based on GTK.

### Window Manager
What is a X Window Manager?
Provided that the WM is compatible with the EWWM/NetWM specifications, you can interact with it using the application `wmctrl`.

For example, the command `wmctrl -l` shows all the windows currently managed.
There is a row for each window, with multiple columns.
The first column contains the window identity as an hexadecimal number. 
Check the linux manual for more information (`man wmctrl`).

## Package Management - APT

All the sources the apt application considers for installing packages are typically found in the folder `/etc/apt/sources.list.d/`.
When installing a package what apt is tipically doing is:
- create a folder containing all the compiled source in /usr/share or /usr/local/
- add an excutable file in /usr/bin/

Useful options:
- `--install-suggests` - install also suggested packages

## Unix useful commands
- `curl` - exchange data between a device and a server through a terminal
- `compgen -ac` - list all the available commands and aliases
- `lspci` - show information about PCI buses and the devices
- `dmesg` - show all the device drivers recognized by the kernel
- `man` - show a page of the manual
- `wmctrl` - interact with the window manager

## Common Software

### Archive Manager
An archive is a collection of files.
The files might be compressed.

Most linux distributions come with CLI tools to manage archives.
These usually are `tar`,`gzip`,`zip`,`unzip`.

To unzip a file, simply use the command:
```bash
unzip file.zip
```