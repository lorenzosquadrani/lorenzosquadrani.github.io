## Definitions

### Probability Theory

- **$\sigma$-algebra** pr **$\sigma$-field**: Given a set \Omega, a \sigma-algebra on \Omega is any collection of its subsets that (1) includes the empty set, (2) is closed under complementation, and (3) is closed under countable unions. Other definitions are possible, but they all imply the same properties. In particular, from the given definition one can prove that: the set itself belongs to the \sigma-algebra; the \sigma-algebra is closed under countable intersections; the difference of two sets in the \sigma-algebra belongs to the \sigma-algebra.

- **Measurable Space** or **Borel Space**: a pair $(\Omega, \mathcal{F})$ where \Omega is a set and \mathcal{F} is a \sigma-algebra on \Omega. The elements of $\mathcal{F}$ are called measurable sets.
- **$\mathcal{F}$-measurable Set**: a set that belongs to the $\sigma$-algebra $\mathcal{F}$.
- **Measure** Given a measurable space ($\Omega, \mathcal{F}$), a measure is a function $\mu: \mathcal{F} \rightarrow [0, +\infty]$ that satisfies the following properties: (1) $\mu(\emptyset) = 0$; (2) $ for any sequence of disjoint sets $A_1, A_2, \ldots \in \mathcal{F}$, $\mu(\cup_{i=1}^{\infty} A_i) = \sum_{i=1}^{\infty} \mu(A_i)$.
- **Probability Measure**: a measure $\mathbb{P}$ on a measurable space $(\Omega, \mathcal{F})$ such that $\mathbb{P}(\Omega) = 1$.
- **Probability Space**: a triple $(\Omega, \mathcal{F}, \mathbb{P})$ where $\Omega$ is a set, $\mathcal{F}$ is a $\sigma$-algebra on $\Omega$, and $\mathbb{P}$ is a probability measure on $(\Omega, \mathcal{F})$.
- **Measurable Function** or **Random Variable**: Given a probability measure space $(\Omega, \mathcal{F}, \mathbb{P})$, a function $X: \Omega \rightarrow \mathbb{R}$ such that the pre-image of any real interval is a $\mathcal{F}$-measurable set.
- **Characteristic Function** or *Indicator Function**: a function that takes the value 1 if the input is in a given set, and 0 otherwise; if the set is measurable, the indicator function is a measurable function.
- **Lebesgue Measure**: given a measurable space $(\Omega, F )$, when $\Omega \subseteq \mathbb{R}^n$ the measure that it is usually defined is the Lebesgue measure, which is an extension of the definitions of length, area, and volume.