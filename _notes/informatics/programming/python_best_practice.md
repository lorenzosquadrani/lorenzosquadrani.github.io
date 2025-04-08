---
layout: note
title: "Python Best Practices"
sidebar: true
---

## Python Environments

### Using pipenv 

Theoretically you can create a python environment with the python version you need using the command `pipenv --python x.x.x`.

However, the python version you want to use must be already installed in your system. You should also be lucky enough that pipenv finds it and use it correctly. 

You have multiple options to install a python version on your system:
- `asdf` For more details see on the website https://asdf-vm.com/guide/getting-started.html.
- pyenv.
- you can install the python version you need directly from the source.
- you can use some ppa (personal package archive), for example there a certain 'deadsnake' distributing all the python versions.

Unfortunately, none of these solutions worked for me. LOL.

### Using conda
Miniconda (minimal version of Anaconda) is definitely the best solution I have found to manage python virtual environments. 
I like that the installation is completely local (a folder in your home), and both the environments and the python versions are stored inside that folder.


## Python Linting

Linting is the process of analyzing the source code of a program to spot errors (synthattic, stylistic, funtional).
As the name suggest, it is normally used to refine the code, removing inefficiencies, bug-prone lines, hard-to-read lines.

Linting is particularly useful for interpreted programming languages, like Python.
The reason is pretty straightforward: python code does not have compiling phase, in which errors could be detected.
Here, a linter can be used as a debugger.

To track suspicious constructs in software written in a given computer language.
Lintining highlights semantic and stylistic problems in your Python code.

Usually, a linter performs a **static analysis**.

## Python Packaging

The following information is taken from the official Python Packaging User Guide (https://packaging.python.org/), in date 23 May 2024.

There is more than one way to package a Python project.
The most appropriate one depends on the target audience, environment in which the package will be used, and some charcteristics of the project itself.


### Python Testing

Pytest, Nox.

