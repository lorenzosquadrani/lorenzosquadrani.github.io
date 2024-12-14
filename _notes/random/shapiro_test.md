# Test for normality

## Shapiro-Wilk test
Given a sample of N observations, the Shapiro-Wilk test is used to test the following composite hypothesis: "The observations are indipendent and identically distributed and they follow a normal distributions with a certain mean $\mu$ and sigma $\sigma$.

The test statistic is given by:
$$
W = \frac{(\sum_{i=1}^{N} a_i x_{(i)})^2}{\sum_{i=1}^{N} (x_i - \bar{x})^2}
$$
where $x_{(i)}$ is the i-th order statistic, $\bar{x}$ is the sample mean, and $a_i$ are the coefficients that depend on the sample size N.

It is not necessary to understand the meaning of the statistic to use the test.
The null hypothesis is rejected if the p-value is less than the significance level $\alpha=0.05$.

The statistic $W$ takes values between 0 and 1.
The test can be used only for $N>2$.

The mean, variance, skewness and kurtosis are 1-dimensional statistics that can be used to describe the distribution of a sample.
They give useful information about the shape of the distribution, but they are not sufficient to describe it completely, since different distributions can have the same values of these statistics.

Another useful statistic is the ***order statistics***, which are the values of the sample sorted in ascending order.
The Shapiro-Wilk test is based on the order statistics.
In particular, it computes the correlation between the order statistics and the expected values of the order statistics under the null hypothesis.
Notice that the mean and sigma values do not affect the distribution of such correlation.
For this reasos, the Shapiro-Wil test is an example of non-parametric test.

## Kullback-Leibler divergence
The Kullback-Leibler divergence is a measure of how one probability distribution diverges from a second probability distribution.
It is also called relative entropy.

Given two probability distributions $P$ and $Q$, the Kullback-Leibler divergence is defined as:
$$
D_{KL}(P||Q) = \sum_{x \in X} P(x) \log \left( \frac{P(x)}{Q(x)} \right)
$$
where $X$ is the set of possible outcomes.