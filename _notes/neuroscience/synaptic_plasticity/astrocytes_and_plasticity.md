---
layout: note
title: "Astrocytes and Synaptic Plasticity"
sidebar: true
---


In 2009 the research group of Alfonso Araque publishes a review paper titled "Tripartite synapses: astrocytes process and control synaptic information".
The term "tripartite synapse" was proposed in 1999.

The concept of tripartire synapse developed from the acknowldgement of some facts: 
- astrocytes detect neural activity via neuron-released neurotransmitters and, in turn, modulate synaptic transmission via release of 'gliotransmitters'.
- Astrocytes are ideally positioned to detect and modulate synaptic activity because they extend processes that are in apposition with pre- and postsynaptic neuronal elements of synapses


Astrocyte Ca2+ signal has a fundamental role in neuron-astrocyte communication as the cellular signal triggered by the neuronal activity and responsible for transmitter release from astrocytes and the consequent neuromodulation.

They even refer to an "astrocytic revolution in current neuroscience".
Everything started in the early 1990s with the first fluorescence imaging experiments of intracellular calcium concentrations in living astrocytes.
The data revelead the excitability of astrocytes, that were till then considered non-excitable cells.


### Astrocytic compartments

Astrocytes exhibit intricate spongiform morphology, dense process ramifications of irregular shape with frequent small broadenings.
These enlargements are referred to as astrocytic compartments.
They have a diameter of 1-2 micrometers (Figures in Panatier, 2011).

Spontaneous Ca2+ responses were observed in compartments with an amplitude of dF/F = 92.2% ± 9.3% and a rise time of 277.7 ± 38.8 ms.

Single pulse stimulation of neuronal presynaptic elements evoked local Ca2+ events in an astrocytic process.
The blockade of voltage-gated Na+ channels, to prevent nerve-impulse propagation, completely blocked glial Ca2+ responses.
The absence of fluorescent changes outside of the boundaries of the compartment suggests that the Ca2+ event is compartmentalized.

### Astrocytes and Short-term plasticity

Despite this ideal position, the detection and modulation mechanisms in astrocytes are deemed too slow to be involved in local modulation of rapid, basal synaptic transmission.

However, Ca2+ signaling has been generally studied globally in the whole astrocyte, where the slow timescale of Ca2+ changes precludes any spatial and temporal match with
fast and localized synaptic transmission.
Moreover, trains of sustained stimulation of afferents were necessary to induce this type of glial Ca2+ activity.
Panatier et all, in 2011, showed that single action potentials are detected in functional compratments along the astrocytic processes, via activation of glutamate receptor mGluR5. 
They also showed that astrocytes increase synaptic transmission via activation of presynaptic adenosine receptors A2A.

These results indicate that astrocytes detect small levels of neurotransmitter released locally, simultaneously with its detection by the postsynaptic neuron.

### Astrocytes can change external calcium levels
Astrocytes are known to decrease external calcium levels by releasing the glial specific, calcium-binding protein, S100, in the extracellular space (Morquette et al., 2015) in a neural activity-dependent manner (Sakatani et al., 2008; Nardin et al., 2009).


### The role of astrocytes in place cell formation: A computational modeling study [3]


#### Presynaptic neurons 
They assume 200 CA3 cells fire (Poisson train) in a location specific manner, using the usual gaussian-like shape function of the distance from the location.
The CA3 cells project to 400 CA1 cells (all-to-all connections).
CA1 cells also have one-to-all, lateral inhibitory connections, to enforce competition among CA1 cells during the environment encoding.

#### Postsynaptic neurons
Each CA3 spike produce an input current which decays exponentially ($\tau=30 ms$).
For CA1 dynamics they use the HH model, with 7 currents. 
One of the current (persistent sodium current) is modelled such that it is modulated by external calcium levels.
In particular:
$
 I_{\text{NaP}} = g_{\text{NaP}} p_\infty (V) (V - V_{\text{Na}})
$
$
p_\infty (V) = \frac{1}{1 +  e^{-\frac{V - \theta_{\text{NaP}}}{\sigma_{\text{NaP}}}}}
$
and the value of $\theta_{\text{NaP}}$ varied linearly between $-47 mV$ and $41 mV$ with external calcium, resulting in a shift of the activation curve.
In turn, this results in switch of neuronal firing mode between tonic an bursting, according to the calcium level.

#### Astrocytes
A single astrocytes enwrap all the synaptic connections for 4 CA1 neurons.
Astrocytic domains do not overlap.
The state of each astrocyte is described by a membrane voltage variable. 
This is quite surprising to me, as I always assume astrocytic dynamics works primarily intracellular calcium transients.
Anyway they model the membrane voltage as:

$
\frac{dv}{dt}= - \frac{v - v_0}{\tau} + k I 
$

where $I$ is the total synaptic current sensed by the astrocyte, simply the sum of the external currents of all the neurons in the astrocyte's domain.

Then, the astrocytic membrane voltage simply controls the external calcium level by decreasing it actively (release of a calcium binding protein) when the membrane voltage is high. 
Specifically, the external calcium dynamics is:

$
\frac{C_{ext}}{dt} = - \frac{C_{ext} - C_{ext}^0}{\tau_1} - \frac{C_{ext} (v-v_0)}{\tau_2}
$

Additionally, they assume that astrocytic modulation is enabled only in unfamiliar environment (training) and not in revisits (testing).
They say this assumption is a way to aggregate the astrocytic modulation _and_ the feedforward inhibition on CA1 cells exterted by locus coeruleus in response to novelty.
This is, to say the least, suspicious: I think they needed to disable the astrocytes after the formation of place fields in order to get decent, stable results, and they looked for some justification for it in the biology. 
As usual, in the biology you can find a possible justification for _any hypothesis_.

Anyway, the story they try to sell is this: the interneurons of the locus coeruleus exert feedforward inhibition on CA1 neurons, except when there is a novelty signal, which is detected by such neurons and they decrease they firing (of course the cite some experiments for this).
They assume that, if there is no novelty, the inhibition of the interneurons and the depolarizing effect of astrocytes simply cancel out.

#### Plasticity
They use the standard pair STDP with $A_+=0.175$, $A_-=0.5 A_+ $, and equal time constants of $30 ms$.
They clip the weights in the range $(0,30)$.


### References

- Panatier 2011
- Araque 2009

3. Polykretis, Ioannis, and Konstantinos P. Michmizos. "The role of astrocytes in place cell formation: A computational modeling study." Journal of computational neuroscience 50.4 (2022): 505-518.