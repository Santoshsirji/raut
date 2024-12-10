import React from 'react';
import ChapterHeading from '@/components/subjects/ChapterHeading';
import Slate from '@/components/slate/Slate';
import Image from "next/image";

const Chapter19 = () => {
  return (
    <Slate>
      <section
        className='py-1'
        id='chapter19'
      >
        <div className="mt-14 p-3"></div>
        <ChapterHeading title={`
     Chapter 19: Alternating Current`}
        />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Peak and RMS Value of AC Current and Voltage
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            AC Current:
          </span>
        </p>
        <ul>
          <p className="text-sm lg:text-lg mb-4">
            <span className="text-2xl pr-3 font-semibold mb-2">
              AC through a Resistor:
            </span>
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            When an alternating current  &#40;AC&#41; passes through a resistor, the current and voltage are in phase with each other. The derivation is as follows:
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            Consider a resistor with resistance R connected to an AC voltage source V = V
            <sub>
              m
            </sub>
            sin &#40;ωt&#41;, where V
            <sub>
              m
            </sub>
            is the peak voltage and ω is the angular frequency.
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            The current flowing through the resistor can be determined using Ohm&lsquo;s law:
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            V = IR
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            I = V/R =  &#40;V
            <sub>
              m
            </sub>
            /R&#41;sin &#40;ωt&#41;
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            The current is directly proportional to the voltage and inversely proportional to the resistance. The sine function represents the time-varying nature of the AC current.
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            <span className="text-2xl pr-3 font-semibold mb-2">
              AC through a Capacitor:
            </span>
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            When an AC passes through a capacitor, the current and voltage are out of phase with each other. The derivation is as follows:
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            Consider a capacitor with capacitance C connected to an AC voltage source V = V
            <sub>
              m
            </sub>
            sin &#40;ωt&#41;, where V
            <sub>
              m
            </sub>
            is the peak voltage and ω is the angular frequency.
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            The current flowing through the capacitor can be determined using the relationship between current and the rate of change of voltage with respect to time:
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            I = C &#40;dV/dt&#41;
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            Differentiating the voltage equation with respect to time:
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            dV/dt = ωV
            <sub>
              m
            </sub>
            cos &#40;ωt&#41;
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            Substituting this back into the current equation:
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            I = CωV
            <sub>
              m
            </sub>
            cos &#40;ωt&#41;
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            The current is directly proportional to the rate of change of voltage and the capacitance. The cosine function represents the phase relationship between the current and voltage.
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            <span className="text-2xl pr-3 font-semibold mb-2">
              AC through an Inductor:
            </span>
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            When an AC passes through an inductor, the current and voltage are also out of phase with each other. The derivation is as follows:
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            Consider an inductor with inductance L connected to an AC voltage source V = V
            <sub>
              m
            </sub>
            sin &#40;ωt&#41;, where V
            <sub>
              m
            </sub>
            is the peak voltage and ω is the angular frequency.
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            The voltage across an inductor is given by Faraday&lsquo;s law of electromagnetic induction:
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            V = L &#40;dI/dt&#41;
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            Differentiating the current equation with respect to time:
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            dI/dt = ωI
            <sub>
              m
            </sub>
            cos &#40;ωt&#41;
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            Substituting this back into the voltage equation:
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            V = LωI
            <sub>
              m
            </sub>
            cos &#40;ωt&#41;
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            The voltage is directly proportional to the rate of change of current and the inductance. The cosine function represents the phase relationship between the current and voltage.
          </p>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            In summary, when an AC passes through a resistor, the current and voltage are in phase. In contrast, when an AC passes through a capacitor or an inductor, the current and voltage are out of phase. The phase relationship depends on the properties of the capacitor or inductor.
          </p>
          <li>
            Peak Current  &#40;I
            <sub>
              peak
            </sub>
            &#41;: The maximum value of the current waveform, representing the highest instantaneous value reached by the current during one cycle.
          </li>
          <li>
            RMS Current  &#40;I
            <sub>
              RMS
            </sub>
            &#41;: The effective value of the current waveform, equivalent to the value of direct current that would produce the same power dissipation in a resistive load as the AC current. It is calculated as I
            <sub>
              RMS
            </sub>
            = I
            <sub>
              peak
            </sub>
            / √2.
          </li>
        </ul>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            AC Voltage:
          </span>
        </p>
        <ul>
          <li>
            Peak Voltage  &#40;V
            <sub>
              peak
            </sub>
            &#41;: The maximum value of the voltage waveform, representing the highest instantaneous value reached by the voltage during one cycle.
          </li>
          <li>
            RMS Voltage  &#40;V
            <sub>
              RMS
            </sub>
            &#41;: The effective value of the voltage waveform, equivalent to the value of direct voltage that would produce the same power dissipation in a resistive load as the AC voltage. It is calculated as V
            <sub>
              RMS
            </sub>
            = V
            <sub>
              peak
            </sub>
            / √2.
          </li>
        </ul>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The RMS values of current and voltage are commonly used to determine the power and energy consumption of AC circuits. In resistive loads, the power dissipated can be calculated by multiplying the RMS current and RMS voltage  &#40;P = I
          <sub>
            RMS
          </sub>
          * V
          <sub>
            RMS
          </sub>
          &#41;.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            AC through a Resistor:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          When an alternating current  &#40;AC&#41; passes through a resistor, the current and voltage are in phase with each other. The derivation is as follows:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Consider a resistor with resistance R connected to an AC voltage source V = V
          <sub>
            m
          </sub>
          sin &#40;ωt&#41;, where V
          <sub>
            m
          </sub>
          is the peak voltage and ω is the angular frequency.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The current flowing through the resistor can be determined using Ohm&lsquo;s law:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          V = IR
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          I = V/R =  &#40;V
          <sub>
            m
          </sub>
          /R&#41;sin &#40;ωt&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The current is directly proportional to the voltage and inversely proportional to the resistance. The sine function represents the time-varying nature of the AC current.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            AC through a Capacitor:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          When an AC passes through a capacitor, the current and voltage are out of phase with each other. The derivation is as follows:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Consider a capacitor with capacitance C connected to an AC voltage source V = V
          <sub>
            m
          </sub>
          sin &#40;ωt&#41;, where V
          <sub>
            m
          </sub>
          is the peak voltage and ω is the angular frequency.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The current flowing through the capacitor can be determined using the relationship between current and the rate of change of voltage with respect to time:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          I = C &#40;dV/dt&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Differentiating the voltage equation with respect to time:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          dV/dt = ωV
          <sub>
            m
          </sub>
          cos &#40;ωt&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Substituting this back into the current equation:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          I = CωV
          <sub>
            m
          </sub>
          cos &#40;ωt&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The current is directly proportional to the rate of change of voltage and the capacitance. The cosine function represents the phase relationship between the current and voltage.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            AC through an Inductor:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          When an AC passes through an inductor, the current and voltage are also out of phase with each other. The derivation is as follows:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Consider an inductor with inductance L connected to an AC voltage source V = V
          <sub>
            m
          </sub>
          sin &#40;ωt&#41;, where V
          <sub>
            m
          </sub>
          is the peak voltage and ω is the angular frequency.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The voltage across an inductor is given by Faraday&lsquo;s law of electromagnetic induction:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          V = L &#40;dI/dt&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Differentiating the current equation with respect to time:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          dI/dt = ωI
          <sub>
            m
          </sub>
          cos &#40;ωt&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Substituting this back into the voltage equation:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          V = LωI
          <sub>
            m
          </sub>
          cos &#40;ωt&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The voltage is directly proportional to the rate of change of current and the inductance. The cosine function represents the phase relationship between the current and voltage.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          In summary, when an AC passes through a resistor, the current and voltage are in phase. In contrast, when an AC passes through a capacitor or an inductor, the current and voltage are out of phase. The phase relationship depends on the properties of the capacitor or inductor.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Phasor Diagram in AC
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          A phasor diagram in AC  &#40;alternating current&#41; represents the relationship between voltage and current phasors in an electrical circuit. It is a graphical tool used to analyze and visualize the phase and magnitude relationships between different AC quantities.
        </p>
        <br />
        <span className="text-2xl pr-3 font-semibold mb-2">
          Key Elements:
        </span>
        <h3 />
        <ol>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              Reference Axis:
            </span>
            Choose a reference axis, typically the horizontal axis, to represent the real component of the quantities.
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              Voltage Phasor:
            </span>
            Represent the voltage as a phasor, denoted by V. Its length represents the magnitude of the voltage, and its angle represents the phase shift with respect to the reference axis.
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              Current Phasor:
            </span>
            Represent the current as a phasor, denoted by I. Its length represents the magnitude of the current, and its angle represents the phase shift with respect to the reference axis.
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              Impedance Phasor:
            </span>
            Introduce the impedance of the circuit as a phasor, denoted by Z. Its length represents the magnitude of the impedance, and its angle represents the phase shift between voltage and current.
          </li>
        </ol>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Steps:
          </span>
        </p>
        <ol>
          <li>
            Plot the reference axis and denote the magnitude and phase angles of the voltage and current phasors.
          </li>
          <li>
            Add the voltage phasor to the impedance phasor to obtain the current phasor, considering their magnitudes and phase differences.
          </li>
          <li>
            Analyze the angles between the phasors to understand the phase differences between voltage and current, indicating inductive or capacitive behavior.
          </li>
        </ol>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Phasor diagrams are essential for studying AC circuits, analyzing their behavior, and solving complex problems. They help determine voltage and current relationships, power factor, reactance, and impedance. By visually representing AC quantities as phasors, engineers can simplify calculations and gain insights into circuit performance, facilitating circuit design, analysis, and troubleshooting.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Series Circuits with Combination of Resistance, Capacitance, and Inductance
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          In a series circuit containing a combination of resistance  &#40;R&#41;, capacitance  &#40;C&#41;, and inductance  &#40;L&#41;, the total impedance and the phase relationship between voltage and current can be analyzed. Let&lsquo;s consider the following circuit:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <Image height={500} width={2000} className='h-[40vh]  w-auto'
            alt='Series Circuit Diagram'
            src='https://thumbs.dreamstime.com/b/series-parallel-circuits-diagram-d-rendering-282759315.jpg'
          />
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          To analyze this circuit, we can use the concept of impedance  &#40;Z&#41;, which is the total opposition to the flow of alternating current. The impedance in a series circuit is the sum of individual impedance components.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The impedance of a resistor  &#40;R&#41; is given by its resistance value:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Z
          <sub>
            R
          </sub>
          = R
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The impedance of an inductor  &#40;L&#41; is given by the formula:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Z
          <sub>
            L
          </sub>
          = jωL
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          where j is the imaginary unit  &#40;√ &#40;-1&#41;&#41;, ω is the angular frequency  &#40;2πf&#41;, and L is the inductance.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The impedance of a capacitor  &#40;C&#41; is given by the formula:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Z
          <sub>
            C
          </sub>
          = 1 /  &#40;jωC&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Now, let&lsquo;s calculate the total impedance  &#40;Z
          <sub>
            total
          </sub>
          &#41; of the series circuit by summing up the individual impedances:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Z
          <sub>
            total
          </sub>
          = Z
          <sub>
            R
          </sub>
          + Z
          <sub>
            L
          </sub>
          + Z
          <sub>
            C
          </sub>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          = R + jωL + 1 /  &#40;jωC&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          To determine the phase relationship between voltage and current, we can use the concept of phasors. Let&lsquo;s assume the voltage across the series circuit is V and the current flowing through it is I. We can represent V and I as phasors, denoted by V̂ and Î, respectively.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The phasor diagram will show the phase shift between V̂ and Î. The angle between V̂ and Î represents the phase difference.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          By analyzing the phasor diagram and calculating the magnitude and phase difference between V̂ and Î, we can determine the behavior of the circuit. For example, if V̂ leads Î, it indicates a capacitive circuit, while if V̂ lags Î, it indicates an inductive circuit.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The total impedance and the phase relationship between voltage and current in series circuits containing a combination of resistance, capacitance, and inductance provide important insights into circuit behavior, power factor, and frequency response. These analyses are crucial for designing and troubleshooting complex AC circuits.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Series Resonance and Quality Factor
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          In an AC circuit, series resonance occurs when the inductive reactance  &#40;XL&#41; and the capacitive reactance  &#40;XC&#41; cancel each other out, resulting in a purely resistive impedance. This phenomenon leads to specific characteristics and applications in electronic circuits. Let&lsquo;s explore series resonance and the concept of the quality factor:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Series Resonance:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          In a series resonant circuit, the inductive reactance  &#40;XL&#41; and the capacitive reactance  &#40;XC&#41; are equal in magnitude but opposite in sign. This condition can be expressed as XL = -XC.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The resonant frequency  &#40;fr&#41; of the circuit can be calculated using the formula:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          fr = 1 /  &#40;2π√ &#40;LC&#41;&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          where L is the inductance and C is the capacitance in the circuit.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          At the resonant frequency, the total impedance  &#40;Z&#41; of the circuit is at its minimum value, which is equal to the resistance  &#40;R&#41; of the circuit. This implies that the current flowing through the circuit is maximized.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Quality Factor  &#40;Q&#41;:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The quality factor  &#40;Q&#41; is a measure of the selectivity or sharpness of a resonant circuit. It quantifies the efficiency with which the circuit can store and transfer energy at the resonant frequency. The higher the Q value, the narrower the bandwidth and the more selective the circuit is.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The quality factor  &#40;Q&#41; can be calculated using the formula:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Q = 2πfL / R
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          where f is the frequency of the AC signal, L is the inductance, and R is the resistance in the circuit.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          A higher Q value indicates lower energy losses in the circuit and greater efficiency in transferring energy at the resonant frequency.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Series resonance and the quality factor find applications in various electronic devices and systems, such as filters, oscillators, and communication systems. Understanding and utilizing series resonance and the quality factor are essential in designing and optimizing these circuits for specific frequency responses and performance characteristics.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Power in AC Circuits and Power Factor
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          In AC circuits, the power consumed or delivered is more complex than in DC circuits due to the presence of reactive components such as inductors and capacitors. Understanding power in AC circuits and power factor is crucial for efficient power utilization. Let&lsquo;s explore power in AC circuits and the concept of power factor:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Real Power  &#40;P&#41;:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Real power represents the actual power transferred to the load and is measured in watts  &#40;W&#41;. It is responsible for performing useful work, such as producing light, heat, or mechanical work in the circuit. Real power is given by the formula:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          P = Vrms × Irms × cos &#40;θ&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          where Vrms is the root mean square voltage, Irms is the root mean square current, and θ is the phase angle between the voltage and current waveforms.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Reactive Power  &#40;Q&#41;:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Reactive power represents the power exchanged between the source and the reactive components  &#40;inductors and capacitors&#41; in the circuit. It is measured in volt-amperes reactive  &#40;VAR&#41; and does not perform any useful work. Reactive power is given by the formula:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Q = Vrms × Irms × sin &#40;θ&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Apparent Power  &#40;S&#41;:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Apparent power represents the total power supplied to the circuit and is the combination of real power and reactive power. It is measured in volt-amperes  &#40;VA&#41; and is given by the formula:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          S = Vrms × Irms
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Power Factor  &#40;PF&#41;:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The power factor is the ratio of real power to apparent power and indicates how effectively the circuit utilizes the supplied power. It is a value between 0 and 1, where 1 represents maximum power factor or unity power factor. The power factor can be calculated as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          PF = cos &#40;θ&#41; = P / S
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          A higher power factor indicates better power utilization and reduced reactive power losses in the circuit. Power factor correction techniques are employed to improve power factor and enhance energy efficiency in AC systems.
        </p>
      </section>
    </Slate>
  )
}

export default Chapter19
