---
layout: note
title: "PCA for Time Series Analysis"
sidebar: true
---

Consider a vector of stationary stochastic processes $${\vec x}_t$$ (in discrete time, for simplicity).
Let $${\vec \mu}=\mathbb{E}[{\vec x}_t]$$ be the vector of the expectation values; since the processes are stationary, it does not depend on time.

The lag-dependent covariance matrix of $${\vec x}_t$$ is defined as:

$$
\Gamma_h = \mathbb{E}[({\vec x}_t - \vec \mu) ({\vec x}_{t+h} - \vec \mu) ]
$$

Notice that, since the processes are stationary, it depends only on the time lag $$h$$ and not on the absolute time $$t$$.
Notice also that the lag-dependent covariance matrix is the natural extension of the usual covariance matrix, defined for a vector of *random variables*, to the case of a vector of stationary *stochastic processes*.

The Principal Component Analysis can be applied on the lag-dependent covariance matrix.

A field in which this happens is that of atmospheric science, in which you have spatio-temporal time series of atmospherical quantities.
In this field eigenvectors of the covariance matrix are often referred to as Empirical Orthogonal Functions (EOFs).

### Singular Spectrum Analysis (SSA)

Consider a stationary stochastic process $$x_t$$.
We construct a vector of $$p$$ random variables by considering lagged versions of the single stochastic process, thus:

$$
\vec x = (x_t, x_{t+1}, ... , x_{t+p-1})
$$

The covariance matrix $$\Sigma$$ of $$\vec x$$ is thus such that $$\Sigma_{i j}$$ is the autocovariance of $$x_t$$ with lag $$|i-j|$$.
Matrices in which the $$(i,j)$$-th element depends only on $$|i-j|$$ are known as *Toplitz matrices* (o with umlaut, too hard to do now), and their eigenvectors and eigenvalues have a well-known pattern of trigonometric functions.
The principal components are moving averages of the time series, and the EOFs provides the weights in the moving average.
If the time series as an oscillatory component, it has a pair of eigenvectors with identical eigenvalues.
The corresponding coefficients (principal components) have the same oscillatory pattern but a phase difference of $$\pi/2$$.

Of course, the covariance matrix cannot be known, but it must be estimated from our data (sample covariance matrix).
Thereotically, to do that we should be able to take multiple independent samples of the random variable with fixed lag.
In practice this is impossible, and what you do is the following.
You have a time series of $$n$$ time steps.
You choose a number of lags $$p<n$$, and rearrange your data in a matrix $$n' \times p$$, where $$n' = n-p+1$$.
The number $$p$$ should be large enough to resolve large periods of oscillations, but not too large, to have a decent number of samples.
The rule of thumb is $$p=n/4$$.

### Multichannel SSA

### Principal Oscillation Pattern (POP) Analysis
Consider a $$n\times p$$ data matrix of measurements on a meteorogical variable (to fix the ideas), taken at $$n$$ time points and $$p$$ spatial locations.








