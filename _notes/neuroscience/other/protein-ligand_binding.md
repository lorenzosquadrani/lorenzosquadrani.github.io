# Protein-Ligand Binding Model

Protein-ligand binding describes the interaction between a protein and a specific molecule (ligand), often essential for biological function. For example, protein-ligand binding is the fundamental mechanism by which chemical synapses exert their function.

In particular, I want to develop a decent understanding of:
(1) what are the basic experimental measures used to describe the phenomenon;
(2) what are the basic dynamical models used to describe the phenomenon.

The concept of *affinity* is introduced, loosely defined as 'how tightly a ligand binds to a particular protein'. The affinity of a ligand and a binding molecule depends mostly on their chemical properties, but it can also be influenced by external factors (such as the presence of other molecules).

The binding process can be described as a two-state process:

```
P + L ⇌ PL
```

- **P**: Protein
- **L**: Ligand
- **PL**: Protein-ligand complex

## Two-state stochastic model

Of course, describing exactly the dynamics of many molecules is practically impossible. 
Thus, a stochastic description is used.
We assume that the probability that, at a certain time $$t$$, a PL complex is produced is proportional to the concentrations of P and L.
The coefficient of proportionality, possibly time-dependent, is called *forward rate constant* and denoted by $$k_1$$.
We also assume that the probability that a PL complex breaks is proportional to the concentration of PL.
The coefficient of proportionality is called *backward rate constant* and  
We define the *forward rate constant* $$k_1$$ and the *backward rate constant* $$k_{-1}$$. We assume that the probability that at a certain time instant a PL complex is formed is given by:

$$
P_1 = k_1 [P][L]
$$

and the probability that at a certain time instant a PL complex breaks is given by:

$$
P_{-1} = k_{-1} [PL]
$$

Given arbitrary initial concentrations of all the molecules $$[P]_0$$, $$[L]_0$$, $$[PL]_0$$, this simple two-state stochastic model will converge for large times to some stationary concentrations $$[P]_{eq}$$, $$[L]_{eq}$$, $$[PL]_{eq}$$.

The *dissociation constant $$K_d$$ is defined as

$$
    \[
    K_d = \frac{[P]_{eq}[L]_{eq}}{[PL]_{eq}}
    \]
$$

and it is what is typically measured experimentally.
Sometime you also find the *association constant* $$K_a = 1/K_d$$.

## Hill function

Let us denote the concentration of ligand-binded protein as $$\bar p$$, with $$p$$ the concentration of ligand-free protein, and with $$l$$ the concentration of free ligand.
Assume that the total number of proteins is fixed, thus $\bar p + p = P$


$$
 
$$



## References

- Wikipedia