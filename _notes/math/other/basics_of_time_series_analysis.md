---
layout: note
title: "Basics of Time Series Analysis"
sidebar: true
---

Consider a discrete time series $$... x_{-1}, x_0, x_1, x_2 ,...$$. 

Much of time series analysis is concerned with series that are stationary, and which can be described entirely by their first- and second-order moments; these moments are

$$
\begin{align}
    \mu &= E[x_i] \\
    \lambda_k &= E[(x_i - \mu) (x_{i+k}- \mu)]
\end{align}
$$

The information contained in the autocovariances can be expressed equivalently in terms of the power spectrum of the series:

$$
f(\lambda) = \frac{1}{2 \pi} \sum_{k=-\infty}^{\infty} \lambda_k e&{-ik\lambda}
$$

Recall that $$f(\lambda)$$ measures the relative importance of the angular frequency $$\lambda$$ in the Forier decomposition of the original time series.
For example, if the series is almost a pure oscillation with angular frequency $$\lambda_0$$, then $$f(\lambda)$$ is large for $$\lambda$$ close to $$\lambda_0$$ and near zero elsewhere.
The same information is found in the autocovariance $$\lambda_k$$, of course.

Due to the existence of two different functions representing the same information (the autocovariance function and the Fourier power spectrum), there also two types of analysis tecniques of time series, namely in the time domain and in the frequency domain.


### References
- Principal Component Analysis, I.T. Joliffe