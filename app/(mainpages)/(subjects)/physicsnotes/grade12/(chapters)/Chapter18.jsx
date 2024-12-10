import React from 'react';
import ChapterHeading from '@/components/subjects/ChapterHeading';
import Slate from '@/components/slate/Slate';
const Chapter18 = () => {
  return (
    <Slate>
      <section
        className='py-1'
        id='chapter18'
      >
        <div className="mt-14 p-3"></div>
        <ChapterHeading title={`
     Chapter 18: Electromagnetic Induction`}
        />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Electromagnetic Induction  &#40;Faraday&lsquo;s Laws; Induced Electric Fields&#41;
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Electromagnetic induction is the phenomenon of generating an electromotive force  &#40;EMF&#41; or electric current in a conductor when it is exposed to a changing magnetic field. This phenomenon is governed by Faraday&lsquo;s laws of electromagnetic induction. Let&lsquo;s discuss Faraday&lsquo;s laws and the induced electric fields in more detail, along with their derivations.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Faraday&lsquo;s First Law of Electromagnetic Induction:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          According to Faraday&lsquo;s first law, when there is a change in the magnetic field through a circuit, an EMF is induced in the circuit. This EMF induces an electric current if the circuit is closed. The magnitude of the induced EMF is directly proportional to the rate of change of magnetic flux through the circuit.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Mathematically, Faraday&lsquo;s first law can be stated as:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          EMF = -dΦ/dt
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Where:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          - EMF is the induced electromotive force in the circuit.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          - dΦ/dt is the rate of change of magnetic flux through the circuit.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Derivation of Faraday&lsquo;s First Law:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Consider a conducting loop placed in a changing magnetic field. Let the magnetic field passing through the loop be B, and the area of the loop be A. The magnetic flux Φ through the loop is given by Φ = B * A.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Now, if the magnetic field B changes with time, then the rate of change of magnetic flux dΦ/dt is given by dΦ/dt = d &#40;B * A&#41;/dt = A *  &#40;dB/dt&#41;.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          According to Faraday&lsquo;s law, this rate of change of magnetic flux induces an EMF in the loop. The negative sign indicates the direction of the induced EMF opposes the change in magnetic field.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Faraday&lsquo;s Second Law of Electromagnetic Induction:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Faraday&lsquo;s second law states that the magnitude of the induced EMF is equal to the rate of change of magnetic flux linkage with respect to time. The magnetic flux linkage is the product of the number of turns in a coil and the magnetic flux passing through each turn.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Mathematically, Faraday&lsquo;s second law can be stated as:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          EMF = -N *  &#40;dΦ/dt&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Where:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          - EMF is the induced electromotive force in the circuit.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          - N is the number of turns in the coil.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          - dΦ/dt is the rate of change of magnetic flux linkage with respect to time.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Derivation of Faraday&lsquo;s Second Law:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Consider a coil with N turns placed in a changing magnetic field. The magnetic flux Φ through each turn of the coil is given by Φ = B * A, where B is the magnetic field and A is the area of each turn.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The magnetic flux linkage Φl through the entire coil is the product of the number of turns N and the magnetic flux through each turn, i.e., Φl = N * Φ.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Differentiating both sides of the equation with respect to time, we get d &#40;Φl&#41;/dt = N *  &#40;dΦ/dt&#41;.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          According to Faraday&lsquo;s second law, this rate of change of magnetic flux linkage induces an EMF in the coil.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Induced Electric Fields:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          When an EMF is induced in a circuit, an electric field is also induced. The induced electric field drives the electric current in the circuit.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          For a stationary circuit, the induced electric field is conservative, and the electric potential difference  &#40;voltage&#41; is responsible for the flow of electric current.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          For a non-stationary circuit, the induced electric field is non-conservative. The changing magnetic field induces an electric field, known as the induced electric field, which is responsible for driving the electric current in the circuit.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          This completes the discussion on electromagnetic induction, Faraday&lsquo;s laws, and the induced electric fields.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Lenz&lsquo;s Law and Conservation of Energy
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Lenz&lsquo;s law is a fundamental principle in electromagnetism that describes the direction of induced currents in response to a changing magnetic field. It is based on the principle of conservation of energy. Let&lsquo;s explore Lenz&lsquo;s law and its relationship with the conservation of energy.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Lenz&lsquo;s Law:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Lenz&lsquo;s law states that the direction of an induced current in a conductor will always be such that it opposes the change that produced it. In other words, the induced current creates a magnetic field that opposes the change in the magnetic field that caused the induction.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          This can be summarized by the following statement:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          &quot;An induced current will flow in a direction that creates a magnetic field to counteract the change in the magnetic field causing the induction.&quot;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Lenz&lsquo;s law is a consequence of the conservation of energy and is in accordance with the principle that energy cannot be created or destroyed.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Conservation of Energy:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The principle of conservation of energy states that energy is conserved in a closed system. It can neither be created nor destroyed, but it can be transformed from one form to another.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          When applying Lenz&lsquo;s law to the induction process, it becomes apparent that the induced current acts in a manner to oppose the change in the magnetic field. By opposing the change, energy is conserved because the work done by the induced current against the changing magnetic field is converted into electrical energy.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          This conservation of energy is evident in various practical applications, such as generators, transformers, and electric motors, where the induced currents play a crucial role.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          In summary, Lenz&lsquo;s law dictates that the induced current always opposes the change in the magnetic field to conserve energy. This principle is rooted in the broader concept of the conservation of energy, which states that energy remains constant within a closed system. The application of Lenz&lsquo;s law ensures the efficient utilization of energy in electromagnetic systems.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Motional Electromotive Force
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Motional electromotive force  &#40;emf&#41; refers to the electromotive force induced in a conductor moving through a magnetic field. It is a fundamental concept in electromagnetism that explains the generation of electric potential difference due to the relative motion between a conductor and a magnetic field.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Faraday&lsquo;s Law of Electromagnetic Induction:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Faraday&lsquo;s law of electromagnetic induction states that a change in the magnetic field through a conductor induces an emf in the conductor. This induced emf is proportional to the rate of change of magnetic flux through the conductor.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          When a conductor moves through a magnetic field, the magnetic flux linked with the conductor changes. This change in flux induces an emf in the conductor, causing charges to move and creating an electric current.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Motional emf Equation:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The motional emf  &#40;ε&#41; induced in a conductor moving through a magnetic field is given by the equation:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          ε = B * v * L
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          where B is the magnetic field strength, v is the velocity of the conductor perpendicular to the magnetic field, and L is the length of the conductor.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The motional emf is directly proportional to the magnetic field strength, the velocity of the conductor, and the length of the conductor.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Direction of Motional emf:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The direction of the induced emf can be determined using Lenz&lsquo;s law, which states that the induced current will flow in a direction that opposes the change in magnetic flux. The direction of the induced current creates a magnetic field that counteracts the change in the external magnetic field.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Applications of motional emf include electric generators, where mechanical energy is converted into electrical energy, and devices such as velocity sensors, induction-based speedometers, and electromagnetic flowmeters.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          In summary, motional emf is the electromotive force induced in a conductor moving through a magnetic field. It follows Faraday&lsquo;s law of electromagnetic induction and is determined by the product of the magnetic field strength, the velocity of the conductor, and the length of the conductor. The direction of the induced emf follows Lenz&lsquo;s law, opposing the change in magnetic flux.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            A.C. Generators
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          An alternating current  &#40;A.C.&#41; generator is a device that converts mechanical energy into electrical energy in the form of an alternating current. It operates on the principle of electromagnetic induction and is commonly used to generate electricity in power plants, homes, and various electrical systems. Here are the key components and working principles of an A.C. generator:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Components of an A.C. Generator:
          </span>
        </p>
        <br />
        <ul>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              Rotor:
            </span>
            The rotor is the rotating part of the generator that consists of a coil or a set of coils wound around an iron core. It is connected to a mechanical prime mover, such as a turbine or an engine, which provides the rotational motion.
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              Stator:
            </span>
            The stator is the stationary part of the generator and consists of a set of coils wound around an iron core. These coils are connected to the external circuit and produce the output voltage.
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              Slip Rings:
            </span>
            The slip rings are conductive rings mounted on the rotor shaft. They provide a continuous electrical connection between the rotating rotor and the stationary external circuit.
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              Brushes:
            </span>
            The brushes are stationary conductive contacts that slide against the slip rings, allowing the transfer of electrical current between the rotor and the external circuit.
          </li>
        </ul>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Working Principle of an A.C. Generator:
          </span>
        </p>
        <br />
        <ol>
          <li>
            The mechanical prime mover, such as a turbine, rotates the rotor, creating a changing magnetic field.
          </li>
          <li>
            The changing magnetic field induces an alternating voltage in the stator coils through electromagnetic induction.
          </li>
          <li>
            The alternating voltage produced in the stator coils is transferred to the external circuit through the slip rings and brushes.
          </li>
          <li>
            The alternating current generated by the A.C. generator can be used to power various electrical devices or transmitted through power lines for distribution.
          </li>
        </ol>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Advantages of A.C. Generators:
          </span>
        </p>
        <br />
        <ul>
          <li>
            A.C. generators are capable of generating high voltages, making them suitable for long-distance transmission of electrical power.
          </li>
          <li>
            They provide a more efficient method of power generation compared to direct current  &#40;D.C.&#41; generators.
          </li>
          <li>
            A.C. power is easy to step up or step down using transformers, allowing for efficient voltage regulation.
          </li>
        </ul>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Applications of A.C. Generators:
          </span>
        </p>
        <br />
        <ul>
          <li>
            A.C. generators are widely used in power plants to generate electricity for residential, commercial, and industrial purposes.
          </li>
          <li>
            They are used in electric vehicles and hybrid vehicles to convert mechanical energy into electrical energy for powering the vehicle&lsquo;s electric motor.
          </li>
          <li>
            A.C. generators are used in backup generators to provide electrical power during power outages or in remote locations.
          </li>
          <li>
            They are utilized in various electrical systems, including appliances, lighting systems, and electronic devices.
          </li>
        </ul>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          In summary, A.C. generators play a crucial role in generating electrical energy in the form of alternating current. They utilize the principle of electromagnetic induction to convert mechanical energy into electrical energy. With their widespread applications and advantages, A.C. generators are an essential component of our modern electrical infrastructure.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Eddy Currents
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Eddy currents are swirling currents induced in a conductor when it is exposed to a changing magnetic field. These currents circulate within the conductor in closed loops and create their own magnetic fields. Eddy currents can have both beneficial and detrimental effects depending on the application. Here are some key points about eddy currents:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Formation:
          </span>
        </p>
        <ul>
          <li>
            Eddy currents are induced in a conductor when it is exposed to a changing magnetic field or when there is relative motion between the conductor and a magnetic field.
          </li>
          <li>
            The changing magnetic field can be caused by varying the current in nearby coils, moving a magnet near the conductor, or by electromagnetic induction.
          </li>
        </ul>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Effect on Conductors:
          </span>
        </p>
        <ul>
          <li>
            Eddy currents cause resistance and heating in the conductor. This is due to the fact that the currents flow in closed loops and encounter resistance within the conductor.
          </li>
          <li>
            In high-frequency applications, eddy currents can lead to significant power losses and heating, which can be undesirable in devices such as transformers or electrical motors.
          </li>
        </ul>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Applications of Eddy Currents:
          </span>
        </p>
        <ul>
          <li>
            Eddy currents are used in devices such as induction cooktops, where a changing magnetic field induces currents in a metal cookware, resulting in heating for cooking purposes.
          </li>
          <li>
            Eddy current brakes are used in some trains and roller coasters for braking, where the relative motion between a conductor and a magnetic field induces eddy currents that generate resistance and slow down the motion.
          </li>
          <li>
            Eddy current testing is a non-destructive testing method used to detect defects or cracks in conductive materials, such as metals. The presence of eddy currents alters the impedance of a coil, allowing defects to be identified.
          </li>
        </ul>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Minimizing Eddy Currents:
          </span>
        </p>
        <ul>
          <li>
            Laminating or layering conductive materials can reduce the formation of eddy currents. By separating the conductor into thin layers with insulating material in between, the path for eddy currents is interrupted, reducing their effects.
          </li>
          <li>
            Using materials with high electrical resistivity can also minimize the impact of eddy currents. Materials with high resistivity offer greater opposition to the flow of eddy currents, reducing power losses and heating.
          </li>
        </ul>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Eddy currents are an important phenomenon to consider in applications involving changing magnetic fields and conductive materials. While they can result in power losses and heating, they are also utilized in various technologies for heating, braking, and non-destructive testing. Understanding and managing eddy currents is essential for optimizing the performance of electrical and magnetic systems.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Self-Inductance
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Self-inductance is a property of a circuit or a coil that causes it to oppose changes in the current flowing through it. It is represented by the symbol L and is measured in henries  &#40;H&#41;. Self-inductance occurs due to the magnetic field generated by the current in the coil itself. Here is the derivation of self-inductance:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Consider a circuit or a coil with N turns and carrying a current I. The magnetic flux Φ through each turn of the coil is given by Φ = B × A, where B is the magnetic field and A is the area of each turn.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          According to Faraday&lsquo;s law of electromagnetic induction, the induced electromotive force  &#40;emf&#41; in the coil is given by:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E = -dΦ/dt
        </p>
        <p className="text-sm lg:text-lg mb-4">
          where dΦ/dt represents the rate of change of magnetic flux with respect to time.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          By substituting Φ = B × A, we have:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E = -d &#40;B × A&#41;/dt
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Using the product rule of differentiation, we can expand the above equation as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E = - &#40;dB/dt&#41; × A - B ×  &#40;dA/dt&#41;
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Since A is a constant  &#40;area of each turn&#41;, dA/dt = 0. Therefore, the equation simplifies to:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E = - &#40;dB/dt&#41; × A
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Now, the magnetic field B can be related to the current I using the equation B = μ₀NI/l, where μ₀ is the permeability of free space, N is the number of turns, and l is the length of the coil.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Substituting the above expression into the equation for E, we get:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E = - &#40;d/dt&#41; &#40;μ₀NI/l&#41; × A
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E = - &#40;μ₀NA/l&#41; ×  &#40;dI/dt&#41;
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E = -L ×  &#40;dI/dt&#41;
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Comparing this equation with the equation for the induced emf in a coil, we can equate the terms and obtain:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          L =  &#40;μ₀NA²&#41;/l
        </p>
        <p className="text-sm lg:text-lg mb-4">
          This is the expression for self-inductance  &#40;L&#41; of a coil, which depends on the permeability of free space  &#40;μ₀&#41;, the number of turns  &#40;N&#41;, the cross-sectional area of each turn  &#40;A&#41;, and the length of the coil  &#40;l&#41;.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Mutual Inductance
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Mutual inductance is a property of two coils that describes the extent to which changes in the current in one coil induce an electromotive force  &#40;emf&#41; in the other coil. It is represented by the symbol M and is also measured in henries  &#40;H&#41;. Here is the derivation of mutual inductance:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Consider two coils, coil 1 and coil 2, placed close to each other. Coil 1 carries a current I1, which produces a magnetic field B1. The magnetic field produced by coil 1 passes through coil 2 and induces an emf in it.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The magnetic flux Φ2 through each turn of coil 2 due to the magnetic field B1 is given by Φ2 = B1 × A2, where A2 is the area of each turn of coil 2.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          According to Faraday&lsquo;s law of electromagnetic induction, the induced emf in coil 2 is given by:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E2 = -dΦ2/dt
        </p>
        <p className="text-sm lg:text-lg mb-4">
          By substituting Φ2 = B1 × A2, we have:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E2 = -d &#40;B1 × A2&#41;/dt
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Using the product rule of differentiation, we can expand the above equation as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E2 = - &#40;dB1/dt&#41; × A2 - B1 ×  &#40;dA2/dt&#41;
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Since A2 is a constant  &#40;area of each turn of coil 2&#41;, dA2/dt = 0. Therefore, the equation simplifies to:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E2 = - &#40;dB1/dt&#41; × A2
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Now, the magnetic field B1 can be related to the current I1 using the equation B1 = μ₀N1I1/l1, where μ₀ is the permeability of free space, N1 is the number of turns of coil 1, and l1 is the length of coil 1.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Substituting the above expression into the equation for E2, we get:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E2 = - &#40;d/dt&#41; &#40;μ₀N1I1/l1&#41; × A2
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E2 = - &#40;μ₀N1A2/l1&#41; ×  &#40;dI1/dt&#41;
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E2 = -M ×  &#40;dI1/dt&#41;
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Comparing this equation with the equation for the induced emf in coil 2, we can equate the terms and obtain:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          M =  &#40;μ₀N1A2&#41;/l1
        </p>
        <p className="text-sm lg:text-lg mb-4">
          This is the expression for mutual inductance  &#40;M&#41; between coil 1 and coil 2, which depends on the permeability of free space  &#40;μ₀&#41;, the number of turns of coil 1  &#40;N1&#41;, the cross-sectional area of each turn of coil 2  &#40;A2&#41;, and the length of coil 1  &#40;l1&#41;.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          These derivations provide the mathematical expressions for self-inductance and mutual inductance, which are fundamental concepts in electromagnetism and are crucial in the analysis and design of electromagnetic devices and circuits.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Energy Stored in an Inductor  &#40;with derivation&#41;
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Consider an inductor with self-inductance
          <em className="font-semibold text-sm lg:text-lg pr-2">
            L
          </em>
          and current
          <em className="font-semibold text-sm lg:text-lg pr-2">
            I
          </em>
          flowing through it. The inductor stores magnetic energy in its magnetic field. The energy stored in the inductor can be calculated by integrating the power over time.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The power delivered to the inductor is given by
          <em className="font-semibold text-sm lg:text-lg pr-2">
            P = VI
          </em>
          , where
          <em className="font-semibold text-sm lg:text-lg pr-2">
            V
          </em>
          is the voltage across the inductor. According to Faraday&lsquo;s law of electromagnetic induction,
          <em className="font-semibold text-sm lg:text-lg pr-2">
            V = L &#40;dI/dt&#41;
          </em>
          . We can rewrite the power equation as:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <em className="font-semibold text-sm lg:text-lg pr-2">
            P = LI &#40;dI/dt&#41;
          </em>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          To find the total energy stored in the inductor, we integrate this power expression over time. Let&lsquo;s assume the current changes from an initial value
          <em className="font-semibold text-sm lg:text-lg pr-2">
            I1
          </em>
          to a final value
          <em className="font-semibold text-sm lg:text-lg pr-2">
            I2
          </em>
          over a time interval
          <em className="font-semibold text-sm lg:text-lg pr-2">
            t1
          </em>
          to
          <em className="font-semibold text-sm lg:text-lg pr-2">
            t2
          </em>
          .
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The energy stored,
          <em className="font-semibold text-sm lg:text-lg pr-2">
            W
          </em>
          , is given by:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <em className="font-semibold text-sm lg:text-lg pr-2">
            W = ∫ &#40;t1 to t2&#41; P dt
          </em>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <em className="font-semibold text-sm lg:text-lg pr-2">
            = ∫ &#40;t1 to t2&#41; LI &#40;dI/dt&#41; dt
          </em>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <em className="font-semibold text-sm lg:text-lg pr-2">
            = L ∫ &#40;I1 to I2&#41; I dI
          </em>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <em className="font-semibold text-sm lg:text-lg pr-2">
            = 1/2 LI^2 |_I1 to _I2
          </em>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <em className="font-semibold text-sm lg:text-lg pr-2">
            = 1/2 L  &#40;I2^2 - I1^2&#41;
          </em>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Therefore, the energy stored in an inductor is given by the formula:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <em className="font-semibold text-sm lg:text-lg pr-2">
            W = 1/2 L  &#40;I2^2 - I1^2&#41;
          </em>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          This equation shows that the energy stored in an inductor is proportional to the square of the current passing through it and the inductance of the inductor. It is important to note that energy is stored in the magnetic field generated by the current flowing through the inductor.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Transformer
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          A transformer is an electrical device that is used to transfer electrical energy between two or more circuits through electromagnetic induction. It consists of two or more coils of wire, known as windings, which are usually wound around a core made of magnetic material.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The main principle of operation of a transformer is based on Faraday&lsquo;s law of electromagnetic induction. When an alternating current  &#40;AC&#41; flows through the primary winding, it generates a magnetic field that continuously changes in strength and direction. This changing magnetic field induces an alternating voltage in the secondary winding, which can be used to power electrical devices or transmit electricity over long distances.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The primary and secondary windings are electrically isolated from each other and are magnetically coupled through the core. The ratio of the number of turns in the primary winding to the number of turns in the secondary winding, known as the turns ratio  &#40;Np/Ns&#41;, determines the voltage transformation of the transformer.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Transformers are widely used in various applications, including power transmission and distribution, voltage regulation, impedance matching, and isolation. They offer efficient and reliable means of transferring electrical energy with minimal losses.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The operation of a transformer can be described using the following equations:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Vp / Vs = Np / Ns
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          This equation represents the voltage ratio between the primary winding  &#40;Vp&#41; and the secondary winding  &#40;Vs&#41;, which is equal to the turns ratio  &#40;Np/Ns&#41; of the transformer. It shows that the voltage in the secondary winding can be adjusted by changing the number of turns in the windings.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Ip * Np = Is * Ns
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          This equation represents the current relationship between the primary current  &#40;Ip&#41;, primary winding turns  &#40;Np&#41;, secondary current  &#40;Is&#41;, and secondary winding turns  &#40;Ns&#41; of the transformer. It illustrates that the product of current and turns is conserved between the primary and secondary windings.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Transformers are designed to operate at specific frequencies and power ratings. They can step up or step down the voltage and current levels, depending on the application requirements. The efficiency of a transformer is high, typically above 95%, resulting in minimal power losses during the energy transfer process.
        </p>
      </section>
    </Slate>
  )
}

export default Chapter18
