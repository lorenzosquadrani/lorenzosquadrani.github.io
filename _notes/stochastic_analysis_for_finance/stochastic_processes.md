---
title: "Stochastic Processes"
collection: notes
tag: Stochastic Analysis for Finance
permalink: /notes/stochastic_analysis_for_finance/stochastic_processes
---

## Some definitions

### Stochastic Process
A stochastic process is a sequence of random variables on the same sample space $$\Omega$$, parametrized by an index set $$I \subset \mathbb{R}$$.
We denote a stochastic process as $$\{X_t\}_{t \in I}$$, or $$X: I \times \Omega \rightarrow \mathbb{R}$$, or simply $$X_t$$.

If the index set is discrete, we call it a discrete-time stochastic process.
If the index set is continuous, we call it a continuous-time stochastic process.

### Filtration
Let $$(\Omega, \mathcal{F})$$ be a measurable space.
If a sequence of $$\sigma$$-algebras $$\{\mathcal{F}_t\}_{t \in I}$$ is such that $$\mathcal{F}_s \subset \mathcal{F}_t \subset \mathcal{F}$$ for any $$s \leq t$$, then we call it a filtration.

Note that any stochastic process induces a filtration, called the natural filtration, defined as $$\mathcal{F}_t = \sigma(X_s, s \leq t)$$.
