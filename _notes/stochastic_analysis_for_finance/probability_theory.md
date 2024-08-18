---
title: "Probability Theory"
collection: notes
tag: Stochastic Analysis for Finance
permalink: /notes/stochastic_analysis_for_finance/probability_theory
---

## Some definitions

- **$$\sigma$$-algebra** pr **$$\sigma$$-field**: Given a set $$\Omega$$, a $$\sigma$$-algebra on $$\Omega$$ is any collection of its subsets that (1) includes the empty set, (2) is closed under complementation, and (3) is closed under countable unions. Other definitions are possible, but they all imply the same properties. In particular, from the given definition one can prove that: the set itself belongs to the $$\sigma$$-algebra; the $$\sigma$$-algebra is closed under countable intersections; the difference of two sets in the $$\sigma$$-algebra belongs to the $$\sigma$$-algebra.

- **Measurable Space** or **Borel Space**: a pair $$(\Omega, \mathcal{F})$$ where \Omega is a set and \mathcal{F} is a \sigma-algebra on \Omega. The elements of $\mathcal{F}$ are called measurable sets.
- **Measurable Set** or **Event**: given a measurable space $$(\Omega, \mathcal{F})$$, any set that belongs to the $$\sigma$$-algebra $$\mathcal{F}$$.
- **Measure** Given a measurable space ($$\Omega, \mathcal{F}$$), a measure is a function $$\mu: \mathcal{F} \rightarrow [0, +\infty]$$ that satisfies the following properties: (1) $$\mu(\emptyset) = 0$$; (2) for any sequence of disjoint sets $$A_1, A_2, \ldots \in \mathcal{F}$$, $$\mu(\cup_{i=1}^{\infty} A_i) = \sum_{i=1}^{\infty} \mu(A_i)$$.
- **Probability Measure**: a measure $$\mathbb{P}$$ on a measurable space $$(\Omega, \mathcal{F})$$ such that $$\mathbb{P}(\Omega) = 1$$.
- **Probability Space**: a triple $$(\Omega, \mathcal{F}, \mathbb{P})$ where $\Omega$$ is a set, $\mathcal{F}$ is a $$\sigma$$-algebra on $$\Omega$$, and $$\mathbb{P}$$ is a probability measure on $$(\Omega, \mathcal{F})$$.
- **Measurable Function** or **Random Variable**: Given a probability measure space $$(\Omega, \mathcal{F}, \mathbb{P})$$, a function $$X: \Omega \rightarrow \mathbb{R}$$ such that the pre-image of any real interval is a measurable set.
- **Characteristic Function** or **Indicator Function**: a function that takes the value 1 if the input is in a given set, and 0 otherwise; if the set is measurable, the indicator function is a measurable function.
- **Lebesgue Measure**: given a measurable space $$(\Omega, F )$$, when $$\Omega \subseteq \mathbb{R}^n$$ the measure that it is usually defined is the Lebesgue measure, which is an extension of the definitions of length, area, and volume.

### Random Variable
Let $$(\Omega, \mathcal{F})$$ be a sample space.
A random variable is any real function $$X: \Omega \rightarrow \mathbb{R}$$, such that the pre-image of any real interval (or more generally, any Borel set) is a measurable set, i.e.

$$
X^{-1}(B) \in \mathcal{F} \text{ for any Borel set } B \in \mathcal{B}(\mathbb{R}).
$$

Note that the random variable takes values in $$\mathbb{R}$$, but the sample space $$\Omega$$ can be any set.

Let us take a *sample* of the random variable $$X$$. 
To do that, we take an element $$\omega \in \Omega$$ from the sample space, and we get the real value $$X(\omega) \in \mathbb{R}$$.

### Distribution Function
Let $$X$$ be a random variable on the probability space $$(\Omega, \mathcal{F}, \mathbb{P})$$.
One can show that the function $$\mu_X: \mathcal{B}(\mathbb{R})\rightarrow \mathbb{R}$$ defined by

$$
\mu_X(A) = \mathbb{P}(X^{-1}(A))
$$ 

is a probability measure on $$(\mathbb{R}, \mathcal{B}(\mathbb{R}))$$.
Note that the definition is well-posed, because $X$ is a measurable function, so $$X^{-1}(A) \in \mathcal{F}$$ (domain of $$\mathbb{P}$$) for any Borel set $$A$$.
The function $$\mu_X$$ inherits the properties of the probability measure from $$\mathbb{P}$$.

It might exist (but it is not guaranted) a function $$f_X: \mathbb{R} \rightarrow [0, +\infty]$$ such that

$$
\mu_X(A) = \int_{A} f_X(x) dx \quad \text{for any Borel set } A \in \mathcal{B}(\mathbb{R}).
$$

If it exists, the function $$f_X$$ is called the **probability density function** of $$X$$.

Let us consider a real interval $$[a, b]$$ and a random variable $$X$$ on the probability space $$\mathbb{P}$$.
What is the probability that a sample from the random variable $$X$$ falls in $$[a, b]$$?
First, we need to know which portion of the sample space $$\Omega$$ is mapped by $X$ into $$[a, b]$$, i.e. $$X^{-1}([a, b])$$.
Since $$X$$ is by definition a measurable function, $$X^{-1}([a, b]) \in \mathcal{F}$$.
Thus, we can compute the probability of that set using the probability measure, i.e. 

$$
p(X\in [a,b]) = \mathbb{P}(X^{-1}([a, b])) = \mu_X([a,b]) = \int_a^b f_X(x) dx.
$$



