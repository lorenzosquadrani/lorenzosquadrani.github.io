---
layout: note
title: "Linux Distributions"
---

## Linux Mint

Linux Mint is a linux distribution based on Ubuntu.
The Linux Mint version installed and the Ubuntu version it is based on are stored in `/etc/os-release` and `etc/upstream-release/lsb-release`.

### Configuration steps:
- Install Brave Browser
- Set shortcuts for launchers and windows


## Debian 

### Automatic Updates
By default, Debian provides automatic updates for security and other critical stuff.
Since it is just this really essential updates, I think it is ok to keep it automatic, so that you do not really care.
Of course it would be different if the updates regarded multiple packages in the system, in which case you want to have more control on it.
On the other hand, such upgrades are rare in Debian, and of couse are not automatic.

Now, the gnome-software package may install also automatic software updates. 
Those you can disably from its settings.

### Power button behavior

Thanks the linux god, Debian has an amazing wiki. 
So here's the page for [configuring the power button](https://wiki.debian.org/ConfigurePowerButton).

The default init system for Debian is `systemd`, and it is the one I have.
In systemd-based systems, the behavior of the power button is handled by the daemon `systemd-logind`.
The configuration of the daemon is in `etc/systemd/logind.conf`.

Here, we change the lines:
```
[Login]
HandlePowerKey=suspend
HandlePowerKeyLongPress=poweroff
```

And then we restart the service:
```
systemctl restart systemd-logind.service
```


### Workspaces

I configure workspaces for my GNOME desktop enviroment.
In settings-multitasking I found some basics settings.
Now I would like to add the workspace indicator in the top bar.
The settings for the top bar should be in Tweaks, but there is quite little.
I think I must use some extensions.
I installed an extension for firefox to use the web-based extension system of GNOME.
Apparently, the app `gnome-browser-connector` was already installed.

### Visual Studio Code

#### Installation

Microsoft itself provides a [repository](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux) to distribute VS code to Debian.
Of course, they provide the copy-paste snippet of bash commands to add and configure it, but let us try to understand them.

First, we make sure we have the tools `wget` and `gpg`.
[GNU Wget](https://www.gnu.org/software/wget/) is a free software package for retrieving files using HTTP, HTTPS, FTP and FTPS, the most widely used Internet protocols.
[GnuPG](https://gnupg.org/) is a complete and free implementation of the OpenPGP standard.
Of course, if you have a full Desktop Environment like GNOME, they will be already installed.
```
sudo apt-get install wget gpg
```

Now we used both tools, piping them with the bash symbol `|`.
The pipe symbol passes the output (stdout) of a previous command to the input (stdin) of the next one, or to the shell. 
This is a method of chaining commands together.
With `wget` we download the file at the specified address (if you put the address in a web browser, the browser will 
probably automatically download it).
The arguments `-q` and `-O` are the usual quiet and output file options; since as 'output file' we give a dash, 
the fetched content will be given to the standard output.
With `gpg` I am not sure what we do. 
Normally `gpg` should be followed by a command, and if it is not it will execute the most reasonable command according
to the file it is provided with.
In our case the file is of course the `microsoft.asc` file.
According to ChatGPT, such file could be a simple ASCII text file, but also a ASCII Armored File.
An ASCII Armored File usually contains encrypted data or a digital signature in a format that can be transmitted over text-based protocols (like email) or stored in a text format, which is human-readable.
If we double-click the file, it is opened by the GNOME password and keyrings tool, trying to add a signature!
I guess now we know the file contains a signature, but let us open it with a simple text editor to check.
Well it contains a single block of text, headed `-----BEGIN PGP PUBLIC KEY BLOCK-----`.
So the file provides us with a public key.
In the man page I read that a file containing keys is 'listed', which I do not undestand.
Enough, let us run it and see.
```
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
```
Of course it created a file named `packages.microsoft.gpg`, in which it wrote the stdout.
Let us run it again without redirecting the stout.
Uh, we get some text with unknown font. 
And ChatGPT explains us why: a `.gpg` file is a file that contains GPG (GNU Privacy Guard) encrypted data.

In the next passage we install a keyring using this encrypted file.
The `install` command simply copy files in different locations and set attributes of the files.

```
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
```
If I check know the password and keyrings tool, there is nothing new. So this type of keyring is probably specific for
`apt`, and not relevant for the user. 

Now an easy step, we use the command `tee` which reads from the standard input and write to standard output or files.
We use it add the repository for Visual Studio Code to the sources of `apt`. 
This repository needs a signature, for which we use the `gpg` file we created before.
```
echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" |sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null
```

Finally we remove the files we do not need anymore.
```
rm -f packages.microsoft.gpg
```

Now we install the package `apt-transport-https`. 
Actually, it seems like it is available by default in recent versions of `apt`, so we skip this step.
We directly run `sudo apt update` and we see that the new repository is being detected.
Now we can install code with `sudo apt install code`.


#### Extensions

If you are coding using Python, you will immediately asked to install the Python extension.
This is an official extension (i.e. developed by the VS code developers).
Its basic feature is too 'provide access points' to other extensions related with Python developing, in order to coordinate and integrate them.
Indeed, the extension will automatically install two other extensions: Pylance and Python Debugger.
I am not sure what this extension does on its own.

