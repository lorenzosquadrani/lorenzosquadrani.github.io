# Docker 

## What is Docker?
Docker is a **Container Engine**, i.e. a tool for run a program in any machine without incurring in the problems due to different environments.
From a functional point of view, it is analogue to Virtual Machines (VMs). 
From a practical point of view, it is much more light weight and efficient with respect to VMs.
Other example of Container Engines are Containerd, CRI-O, Podman.

To achieve its scope, Docker uses **Docker Containers**. 
A Container is a software package, containing all the dependencies required for a given application.

Containers are built and run by the **Docker Engine**.

The design of Docker is a *client-server* architecture, the client being the **Docker CLI** (Command Line Interface) and the server being the **Docker Daemon**, which is running and communicating with the OS (Operative System).
