---
layout: note
title: "Synchronous Network Activity"
sidebar: true
---

### Synchronous Activity in Neural Networks
We need to give a decent definition of 'synchronous activity in neural networks'.
They do not give it in the paper, so I guess it has to be considered as an elementary notion.
However, I prefer define it explicitely as 'the tendency of the neurons within the neural network to fire at nearly the same time'.
Not a very useful definiton, of course. 
Not very precise: if two neurons consistently fire with a small fixed time lag, is their activity synchronous?
I do not know. 

Also an operational definition is apparently hard. 
In the paper, they give multiple measures.
The main measure is the cross-correlation (with lag zero) between two binned spike trains (Wang and Buzsáki, 1996).
But such value depends on the chosen bin size. 
For small bin sizes, the value should increase linearly with the bin size, in case of asynchronous activity, supralinearly in case of synchronous activity. 
I am not sure why superlinearly.
Also I think they assume that the two neurons have the same frequency. 
And the value also depends on such frequency.
Finally, they also use another measure: the cross-correlation between the convolved spike trains.
It feels a bit of a mess, and I am afraid it is bound to be so.
The improvement I can think of is not binning the spike trains, just apply the cross-correlation definition to the numerical derivative of the spike count time series.
In this way we eliminate the choice the bin size. 
However, it remains the dependence on the firing frequency. 
We would need to normalize for that but I am not sure how to do it correctly.

### Field Potential Oscillations

(What is field potential?)

The oscillations occurs in a broad spectrum of frequencies.
The following classification has been made:

- Delta frequency (0.4-4 Hz)
- Theta frequency (4-8 Hz)
- Alpha frequency (8-12 Hz)
- Beta frequency (12 - 30 Hz)
- Gamma frequency (30-100 Hz)

Each frequency is associated with different behavioral states and cognitive functions.


### Recurrent Interneuron Connectivity Does Not Support Synchrony in a Biophysical Dentate Gyrus Model

#### Introductory information
Synchronous oscillations occur at different frequencies.
Synchronous oscillations in the Gamma range (30-100Hz) have some importance (papers to cite).
Gamma oscillations are particularly strong in the dentate gyrus.
Experiments show that inhibitory interneurons have a central role in the generation of gamma oscillations (papers to cite).

Several network mechanisms for synchrony generation have been proposed and studied computationally.
There are two major models of INs-generated synchrony: ING and PING.

The ING model relies solely on recurrent
inhibitory interneuron connectivity, but it requires a large enough number of synapses. They use connectivity data of the dentate gyrus in a biophysical computational model to test its ability to generate synchronous activity. 

#### Dense recurrent inhiition generates synchrony

#### Take-home message

Essentially, they found that by constraining a DG model so that the interneurons have the experimentally observed number of chemical synapses (about 7), it does not seem possible to generate synchrony.
Synchrony emerges only when the number of synapses grows above 60.

"We have performed a variety of simulations, all intending to find synchronous neuronal activity and all with the same result: biologically plausible connectivity does not generate synchronous neuronal activity."

Of course we need to consider that 'biologically plausible' only means plausible, not real. 
In general, the model might fail to generate synchronous activity for very many reasons, involving any of the very many assumptions underlying it.
Unfortunately, it is a matter of fact that the results are inconclusive. 
But this is the curse of neuroscience. 
We could say, as they say, that it is unlikely that recurrent INs connectivity is sufficient to generate syncronous activity. 
Experiments will tell more about that.