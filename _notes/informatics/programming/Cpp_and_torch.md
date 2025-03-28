---
layout: note
title: "C++ and torch"
---

C++ is a compiled language.
Suitable for systems programming and large scale applications.

unions and struct?

### Day 2
Signal extension modes: padding adds infinitely many frequencies in the fourier transform. In signal processing the standard way of extending is symmetric.
Historically torch was written in lua, brazilian language one of the first interpreted. The torch team, acquired by meta switched to python. Python foundation had guidelnes on how to extend the python interpreter. That's why pytorch is efficient: because people did C++ extension to the python interpreter.
This is why pytorch beated tensorflow, which has just a heading of python but it is basically C++, so people cannot interact after you did the python stuff.

Small dataset mechine learning is harder than big dataset, because in the small you have to assume more things, like the convolution structure, which means local correlation.

A physics guy friend of moritz works at deepl.

Documentation of Pytorch API: https://pytorch.org/cppdocs/.


Extending the python interpreter using python build.

Using watch to monitor a process.

```
squeue --me
srun --overlap -jobid 12345 --pty bash
watch nvidia-smi
```

When you are in a single node? Maybe using tmux? You should ask Moritz.
