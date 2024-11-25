---
title: "Time Series Analysis"
collection: notes
tag: signal processing
permalink: /notes/signal_processing/time_serie_analysis
---

# Stationary Process and Autocorrelation function
Consider a time series $$\{ X_t\}_{t \in I}$$, I being an index set.
Assume $$E[X_t^2]<\infty \quad \forall t \in I$$.

The function that to each time $$t\in I$$ assigns the expected value of the random variable $$X_t$$, i.e.:

$$
\mu_X(t) = E[X_t]
$$

is called *mean function* of the time series $$\{ X_t\}$$.

The function that to each pair of times $$(r, s) \in I \times I$$ assigns the covariance of the random variables $$X_r$$ and $$X_s$$, i.e.:

$$
\gamma_X(r, s) = \text{Cov}(X_r, X_s) = E[(X_r - \mu_X(r))(X_s - \mu_X(s))]
$$

is called *covariance function* of the time series $$\{ X_t\}$$.

The time series $$\{ X_t\}$$ is said to be *weakly stationary* if the mean function is a constant and the covariance function can be written as a function of the difference between the two times. 
Thus:

$$
 \{X_t\} \text{ is stationary} \iff \mu_X(t) = c \in \mathbb{R} \text{ and } \gamma_X(t, t+h) = \gamma_X(h) \quad \forall t \in I
$$

If the time series $$\{ X_t \}$$ is stationary, its covariance function written as a function of the time lag $$h$$, i.e. $$\gamma_X(h)$$ is also called *autocovariance function* (ACVF).

The *autocorrelation function* (ACF) is defined as:

$$
\rho_X(h) = \frac{\gamma_X(h)}{\gamma_X(0)}
$$


# Filtering

## Discontinuities and outliers
The first thing we need to do when looking at a time series is visualizing it.
If there is any apparent discontinuity, it might be useful to split it in homogenous parts.
If there are outliers, it might be useful to carefully check if there are reasons to exclude them.

## Trends and seasonality
Before computing the cross correlation between two time series, we need to remove trends, seasonality and autocorrelation.
This is because when measuring the cross correlation we want to quantify how much the two variables influence each other.
If the signals have a common trend, seasonality or autocorrelation, the cross correlation will be higher.
For example: ... TO BE ADDED

To estimate and remove the trends and the seasonality we need a model of how they contribute to the time series.
The most common model is the *classical decomposition*:

$$
 X_t = m_t + s_t + Y_t
$$

where $$m_t$$ is a slow-varying function reprenting the trend, $$s_t$$ represents the seasonality, and $$Y_t$$ is a stochastic process which is stationary.

If the magnitude of the seasonal and stochastic components depend on the level of the process, the process is not compatible with the additive model (for obsvious reasons).
Sometime in this case the solution is just to take a transformation of the data which reduces such dependence.
Typically the logarithm is taken (*variance normalization*).

Assuming that the model is compatible with the process, we want to estimate and remove $$m_t$$ and $$s_t$$, and hope that the residuals $$Y_t$$ will be a stationary process.
This is because if the process is stationary we can compute a lot of things and estimate a probabilistic model for it.
There is another approach developed by Box and Jenkins, 1976, to obtain a stationary process from the original one. 
This consists in differencing $$Y_t$$ until it becomes stationary.

### Trend without seasonality
The model in this case is:

$$
X_t = m_t + Y_t
$$

with $$E[Y_t] = 0$$ (without lose of generality because we assumed the process $$Y_t$$ to be stationary).

There are three categories of methods for trend removal from a time series: smoothing, fitting, differencing.

#### Smoothing
Under the assumption that the stochastic process $$Y_t$$ is stationary with zero average, and that the trend $$m_t$$ varies much slower than $$Y_t$$, we can estimate the $$m_t$$ by reducing the fast fluctuations.

To filter out the fast fluctiations we can apply smoothing filters in the spatial or in the frequency domain.

Typical filters are:
- **boxcar filter**: 
a filter which is uniform within a symmetric interval and zero otherwise. For a discrete signal $$X_t$$ it can be written as:

$$
W_t = \frac{1}{(2q+1)} \sum_{j=-q}^q X_{t-j}
$$

Assuming that $$m_t$$ is approximately linear in the interval $$[t-q, t+q]$$, we can write:

$$
W_t = \frac{1}{(2q+1)} \sum_{j=-q}^q (m_{t-j} + Y_{t-j}) \approx = m_t
$$

If $$m_t$$ is a linear function, a large enough $$q$$ will completely remove the fluctuations without distorting the trend.
On the other hand, in general $$m_t$$ is non linear, thus a too large window would distort the trend.

- **Spencer 15-point**: 
a filter such that 


### Do it in Python
As usual Python has way too many libraries.
The fundamental one is for sure `pandas` for handling time series data.
For doing the statistical analysis the most common seems to be `statsmodel`.
It includes:
- tests for stationarity
- autocorrelation plots
- forecasting with autoregressive models


# ARMA processes
An important family of parametric stationary time series is formed by the **autoregressive moving average** (ARMA) processes.
Under some conditions, they can be used to approximate stationary process with a given autocovariance function.

We say that a random process $$\{X_t\}$$ is an ARMA process if it is stationary and if, for each $$t$$:

$$
X_t - \phi_1 X_{t-1} - ... - \phi_p X_{t-p} = Z_t + \theta_1 Z_{t-1} + ... + \theta_q Z_{t-q}
$$

where 
