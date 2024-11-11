---
title: "Stochastic Processes"
collection: notes
tag: Stochastic Analysis for Finance
permalink: /notes/stochastic_analysis_for_finance/stochastic_processes
---

## Some definitions

### Stochastic Process
Let $$(\Omega, \mathcal{F})$$ be a measurable space and $$I \subset \mathbb{R}$$ be an index set.
We call stochastic process any sequence of random variables $$\{X_t\}_{t \in I}$$ on the same sample space $$\Omega$$.
We denote a stochastic process as $$\{X_t\}_{t \in I}$$, or $$X: I \times \Omega \rightarrow \mathbb{R}$$, or simply $$X_t$$.

If the index set is discrete, we call it a discrete-time stochastic process.
If the index set is continuous, we call it a continuous-time stochastic process.

### Filtration
Let $$(\Omega, \mathcal{F})$$ be a measurable space and $$I \subset \mathbb{R}$$ be an index set.
We call filtration any sequence of $$\sigma$$-algebras $$\{\mathcal{F}_t\}_{t \in I}$$, such that $$\mathcal{F}_s \subset \mathcal{F}_t$$ for any $$s \leq t$$.

Note that any stochastic process induces a filtration, defined as $$\mathcal{F}_t = \sigma(X_s, s \leq t)$$, which is called the natural filtration of the $$\sigma$$-algebra $$\mathcal{F}$$ with respect to the stochastic process $$\{X_t\}_{t \in I}$$.

### Adapted Process
A stochastic process $$\{X_t\}_{t \in I}$$ is said to be adapted to the filtration $$\{\mathcal{F}_t\}_{t \in I}$$ if $$X_t$$ is $$\mathcal{F}_t$$-measurable for any $$t \in I$$.




## Brownian Motion

Originally, the term *Brownian motion* referred to a physical phenomenon observed by the botanist Robert Brown in 1827.
He observed that pollen grains suspended in water perform an apparently random motion.
It phenomenon was modeled mathematically by the mathematician Louis Bachelier in 1900, and later by Albert Einstein in 1905.
Later, Norbert Wiener devoloped a rigorous mathematical theory of Brownian motion, which is now a fundamental concept in stochastic analysis, and sometimes called *Wiener process*.

### Definition

Let $$W_t$$, $$t \geq 0$$, be a stochastic process on a probability space $$(\Omega, \mathcal{F}, \mathbb{P})$$.
We say that $$W_t$$ is a Brownian motion if:
- $$W_0 = 0$$ with probability 1.
- $$t \mapsto W_t$$ is continuous with probability 1.
- For any $$0 \leq s < t$$, the increment $$W_t - W_s$$ is normally distributed with mean 0 and variance $$t-s$$.
- For $$0 \leq t_1 < t_2 < \ldots < t_n$$, the increments $$W_{t_2} - W_{t_1}, W_{t_3} - W_{t_2}, \ldots, W_{t_n} - W_{t_{n-1}}$$ are independent.


## Martingales

### Definition
Let $$\{ X_t \}_{t \in I}$$ be a stochastic process adapted to the filtration $$\{ \mathcal{F}_t \}_{t \in I}$$.
Let the random variable $$X_t$$ be integrable for any $$t \in I$$, i.e. $$\mathbb{E}[|X_t|] < \infty$$.
We say that $$\{ X_t \}_{t \in I}$$ is a martingale with respect to the filtration $$\{ \mathcal{F}_t \}_{t \in I}$$ if:

$$
\mathbb{E}[X_t | \mathcal{F}_s] = X_s$$ for any $$s \leq t
$$.

### Poisson Process

TODO: from source https://gtribello.github.io/mathNET/resources/jim-chap20.pdf

The spiking times are independent on one another, and the "number of firing times in time intervals of the same length" follows a Poisson distribution with a fixed rate $$\nu$$.
We know that in this case, the probability density function of the ISI (inter-spike interval) is an exponential function.
In general, when the Poisson process does not represent a spike train, the time between to successive events is called *interarrival time* or *waiting time*.

