---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
  - /curriculum
---

{% include base_path %}

## Education

* Ph.D in **Theoretical and Computational Neuroscience**, University of Bonn, 2022-2025 (expected)
* M.S. in **Applied Physics**, University of Bologna, 2020-2022
* B.S. in **Physics**, University of Bolgona, 2017-2020

**Relevant Graduate-level Courses**: Mathematical Analysis 1&2, Pattern Recognition, Advanced Machine Learning, Image Processing, Complex Networks, Physics of Complex Systems, Software and Computing for Applied Physics, Statistical Data Analysis for Applied Physics, Statistical Mechanics

## Skills

* **Theoretical Skills**: Mathematical Modeling, (Big) Data Analysis, Statistical Inference, Graph Theory
* **Programming Languages**: Python, Matlab, C++
* **Python Libraries**: Pytorch, Jax, Scikit-learn, Pandas, Seaborn, PyQt
* **Other Tools**: Git, LaTeX, Linux, SLURM
* **Soft Skills**: Scientific Writing, Communication, Teamwork, Problem Solving
* **Languages**: English (C1), Italian (native), German (B1)

## Experience and Projects

* **Modeling the interaction between neurons and other brain cells and its role in reinforcement-driven learning.**

  In this project, I studied the brain circuits involved in experience-driven learning. By modeling the interaction between neurons and other brain cells (based on experimental data), I derived a new learning rule that promotes the adaptation of previously learned behavior to new environments. I simulated (using Python) a reinforcement-driven place avoidance
task, replicating the effects of genetic brain cells manipulation on the learning performance.

* **Describing Deep Networks’ dynamics within the theoretical framework of Thermodynamics.**

  In this project, I studied the weights dynamics of deep neural networks during training. I implemented small convolutional networks (∼ 104 parameters) using Pytorch, and I trained them on standard image classification tasks (MNIST and CIFAR10). For a given network model, the dynamics of the weights is determined by the Loss Function (Cross-entropy loss) and the optimization algorithm (SGD with Momentum). We assumed that, after a sufficiently high number of training epochs, the network reaches a "thermodynamic equilibrium", so that the system can be described by macroscopic variables (such as temperature and volume) defined as long-time averages of microscopic quantities (such as weights position, velocity and mass). I described how such a description varies with different network properties, such as batch-normalization, dropout, and number of layers.

## Publications

  Find them [here]({% link _pages/publications.md %}).