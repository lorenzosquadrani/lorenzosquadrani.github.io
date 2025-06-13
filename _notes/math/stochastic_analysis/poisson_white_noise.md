---
layout: note
title: "Poisson White Noise"
sidebar: true
---

### Definition

Consider a Poisson process $N_t$ with constant rate $\lambda$.

Consider a compound Poisson process:

$$
Z_t = \sum_{k=1}^{N_t} X_k
$$

where $\{\ X_k, k \geq 1 \}$ is a collection of real-valued independent identically distributed random variables, independent of $N_t$.

One can easily show using the law of total expectation, that:

$$
\mathbf{E}[Z_t] =\mathbf{E}[N_t]\mathbf{E}[X_k]=  \lambda t \mathbf{E}[X_k] \\
\mathbf{E}[(Z_t-\mathbf{E}[Z_t])(Z_s-\mathbf{E}[Z_s])] = \lambda \min(t, s) \mathbf{E}[X^2_k]
$$

provided that $\mathbf{E}[X^2_k]$ exists and is finite.

We define the Poisson white noise process as:

$$
W_P(t) \equiv \frac{d Z_t}{dt} 
$$

Notice that definition is just formal because the compound Poisson process is not differentiable.
The process represents a series of impulses occurring at random times (the times of the Poisson process) and with random strengths (the values of $X_k$).
A realization of $Z_t$ is stepwise function, which can thus be represented as a sum of Heavyside theta functions. 
Under this perspective, the 'formal' derivative we used above is related to the distributional derivative, which for a sum of theta functions is a sum Dirac delta functions: a series of impulses!

### Dynamics systems with Poisson White Noise

Before going on here it is convenient to be familiar with the treatment of dynamic systems with Gaussian white noise.
So let us do that before.



### References

- Grigoriu, Mircea. "Dynamic systems with Poisson white noise." Nonlinear Dynamics 36 (2004): 255-266.