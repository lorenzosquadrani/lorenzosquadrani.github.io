---
title: "Time Series Analysis"
collection: notes
tag: signal processing
permalink: /notes/signal_processing/time_serie_analysis
---

## Time Series Analysis

### Stationary Process and Autocorrelation function
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


### Filtering
Before computing the cross correlation between two time series, we need to remove trends, seasonality and autocorrelation.
This is because when measuring the cross correlation we want to quantify how much the two variables influence each other.
If the signals have a common trend, seasonality or autocorrelation, the cross correlation will be higher.
For example:
- the value of 

### Do it in Python
As usual Python has way too many libraries.
The fundamental one is for sure `pandas` for handling time series data.
For doing the statistical analysis the most common seems to be `statsmodel`.
It includes:
- tests for stationarity
- autocorrelation plots
- forecasting with autoregressive models