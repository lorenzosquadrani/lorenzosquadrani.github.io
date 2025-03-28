---
layout: note
title: "High Performance Computing Servers"
---

### Important Warning
What follows might be bullshit. I am just trying to make sense of the things from my experience and my readings, but I am not an expert in HPC.

### Use GPU on a server
Note that if a server has GPU support, it does not mean that every nodes has a GPU.
For example, it is very unlikely that the login node has a GPU.
Thus you cannot test your code using GPU on the login node.

You can check the available resources with the command `sinfo`.

### Access a computing node
When you access a server your filesystem is usually mounted on a login node.
The login node is a server that you can use to submit jobs to the computing nodes.

Alternatively, you can access a computing node directly.
Assuming that server is using Linux, with SLURM as job scheduler, you can access a computing node with the following command:

```bash
srun --pty <OTHER SLURM OPTIONS> /bin/bash
```

If your software uses GPU, you ask for a GPU node. 
To do that, usually you need to specify a partition with GPU nodes, and the number of GPUs you need.
You can check the available partitions with the command `sinfo`.

For example I do:

```bash
srun --pty --partition=sgpu_short --gpus=2 /bin/bash
```

