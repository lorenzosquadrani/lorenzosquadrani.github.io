

### Input-Output Systems

Definitions
-----------

In the following we refer to **input-output system**, or simply system, as a process that, given an input $$x(t)$$, produces an output $$y(t)$$.

We say the system is **static** if the output at time $$t$$ does not depend on the values of the input at times $$s<t$$.
Otherwise we say that the system is **dynamic**.

We say that the system is **linear** if the properties of superposition and scaling of the output with respect to the input hold.
Otherwise we say that the system is **nonlinear**.

We say that the system is **time invariant** if the output does not depend explicitily on time, but only through the input 
(i.e. the output of the system to a given input does not depend on the time the input is presented).
Otherwise we do not say anything.

Examples 
--------

1. A time invariant nonlinear static system could be:

$$
y(t) = e^{x(t)}
$$

2. A time invariant linear dynamic system could be:

$$
y(t) = \int_{t-5}^t x(s) ds
$$

3. A generic time invariant linear static system has the form:

$$
y(t) = a x + b
$$

4. A time invariant nonlinear dynamic system could be:

$$
y(t) = \int_{t-5}^t x^2(s) ds
$$



### Convolution
Convolution is the mathematical operation that allows to derive the response of a LTI dynamic system to any input, from the knowledge of its unit impulse response.

### References
- Wan Drogelen - Signal Processing in Neuroscience, 2007