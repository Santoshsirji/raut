import React from 'react';
import ChapterHeading from '@/components/subjects/ChapterHeading';
import Slate from '@/components/slate/Slate';
const Chapter2 = () => {
  return (
      <Slate>
          <section
              className='py-1'
              id='chapter2'
          >
              <div className="mt-14 p-3"></div>
              <ChapterHeading title={`
     Chapter 2: Periodic Motion`}
              />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Equation of Simple Harmonic Motion  &#40;SHM&#41;
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  Simple Harmonic Motion  &#40;SHM&#41; is a type of periodic motion where an object oscillates back and forth around an equilibrium position under the influence of a restoring force that is proportional to its displacement. The equation that describes the motion of an object undergoing SHM is:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      x &#40;t&#41; = A * cos &#40;ωt + φ&#41;
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where:
              </p>
              <ul>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          x &#40;t&#41;
                      </span>
                      represents the displacement of the object from its equilibrium position at time
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          t
                      </span>
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          A
                      </span>
                      represents the amplitude of the motion, which is the maximum displacement from the equilibrium position
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          ω
                      </span>
                      represents the angular frequency of the motion, given by
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          ω = 2πf
                      </span>
                      , where
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          f
                      </span>
                      is the frequency of the motion
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          φ
                      </span>
                      represents the phase angle, which determines the initial position of the object at
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          t = 0
                      </span>
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Derivation of the Equation of SHM:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The equation of SHM can be derived using the principles of Newton&lsquo;s second law of motion and Hooke&lsquo;s law. Here are the main steps involved in the derivation:
              </p>
              <ol>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          Newton&lsquo;s Second Law:
                      </span>
                      Start with Newton&lsquo;s second law for an object undergoing one-dimensional motion:
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          F = ma
                      </span>
                      , where
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          F
                      </span>
                      is the net force acting on the object and
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          a
                      </span>
                      is its acceleration.
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          Restoring Force:
                      </span>
                      For an object undergoing SHM, the restoring force acting on it is proportional to its displacement from the equilibrium position:
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          F = -kx
                      </span>
                      , where
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          k
                      </span>
                      is the force constant or the spring constant and
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          x
                      </span>
                      is the displacement.
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          Acceleration:
                      </span>
                      Equate the restoring force and the expression for acceleration:
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          -kx =   ma
                      </span>
                      .
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          Acceleration as a Second Derivative:
                      </span>
                      Rewrite the equation in terms of acceleration as the second derivative of displacement:
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          m &#40;d^2x/dt^2&#41; = -kx
                      </span>
                      .
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          Simplification:
                      </span>
                      Divide both sides of the equation by
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          m
                      </span>
                      to simplify the expression:
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          d^2x/dt^2 = -kx/m
                      </span>
                      .
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          Angular Frequency:
                      </span>
                      Introduce the concept of angular frequency
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          ω
                      </span>
                      by substituting
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          ω^2 = k/m
                      </span>
                      , where
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          ω
                      </span>
                      is given by
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          ω = 2πf
                      </span>
                      and
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          f
                      </span>
                      is the frequency of the motion.
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          Solution:
                      </span>
                      Solve the differential equation
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          d^2x/dt^2 = -ω^2x
                      </span>
                      to obtain the general solution:
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          x &#40;t&#41; = A * cos &#40;ωt + φ&#41;
                      </span>
                      , where
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          A
                      </span>
                      is the amplitude and
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          φ
                      </span>
                      is the phase angle.
                  </li>
              </ol>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  This derived equation represents the motion of an object undergoing simple harmonic motion. It shows how the displacement of the object varies sinusoidally with time, governed by the amplitude, angular frequency, and phase angle.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Energy in Simple Harmonic Motion  &#40;SHM&#41;
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  In simple harmonic motion  &#40;SHM&#41;, the energy of the system is conserved and can be divided into two components: kinetic energy and potential energy.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Kinetic Energy  &#40;KE&#41;:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The kinetic energy of an object undergoing SHM can be expressed as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      KE =  &#40;1/2&#41; * m * v^2
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where:
              </p>
              <ul>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          m
                      </span>
                      is the mass of the object
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          v
                      </span>
                      is the velocity of the object
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  Since SHM involves oscillatory motion, the velocity of the object can be written as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      v = ω * A * sin &#40;ωt + φ&#41;
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where:
              </p>
              <ul>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          ω
                      </span>
                      is the angular frequency
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          A
                      </span>
                      is the amplitude
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          φ
                      </span>
                      is the phase angle
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  Substituting the expression for velocity into the equation for kinetic energy, we get:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      KE =  &#40;1/2&#41; * m *  &#40;ω * A * sin &#40;ωt + φ&#41;&#41;^2
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      KE =  &#40;1/2&#41; * m * ω^2 * A^2 * sin^2 &#40;ωt + φ&#41;
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Potential Energy  &#40;PE&#41;:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The potential energy of an object undergoing SHM can be expressed as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      PE =  &#40;1/2&#41; * k * x^2
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where:
              </p>
              <ul>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          k
                      </span>
                      is the force constant or the spring constant
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          x
                      </span>
                      is the displacement of the object from its equilibrium position
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  Since SHM involves oscillatory motion, the displacement of the object can be written as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      x &#40;t&#41; = A * cos &#40;ωt + φ&#41;
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  Substituting the expression for displacement into the equation for potential energy, we get:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      PE =  &#40;1/2&#41; * k *  &#40;A * cos &#40;ωt + φ&#41;&#41;^2
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      PE =  &#40;1/2&#41; * k * A^2 * cos^2 &#40;ωt + φ&#41;
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Total Mechanical Energy:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The total mechanical energy in SHM is the sum of the kinetic energy and potential energy:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      E = KE + PE
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      E =  &#40;1/2&#41; * m * ω^2 * A^2 * sin^2 &#40;ωt + φ&#41; +  &#40;1/2&#41; * k * A^2 * cos^2 &#40;ωt + φ&#41;
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      E =  &#40;1/2&#41; *  &#40;m * ω^2 * A^2 * sin^2 &#40;ωt + φ&#41; + k * A^2 * cos^2 &#40;ωt + φ&#41;&#41;
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  The above expression represents the total mechanical energy in simple harmonic motion. It shows how the energy of the system is distributed between kinetic energy and potential energy, and how it varies with time as the object oscillates back and forth.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Oscillation of a Mass Suspended from a Coiled Spring
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  The oscillation of a mass suspended from a coiled spring is a classic example of simple harmonic motion  &#40;SHM&#41;. It demonstrates the principles of SHM and how energy is transferred between kinetic energy and potential energy. Here&lsquo;s how it works:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Setup:
                  </span>
              </p>
              <ul>
                  <li>
                      A mass, denoted as &quot;m,&quot; is attached to the lower end of a coiled spring.
                  </li>
                  <li>
                      The upper end of the spring is fixed to a support or a ceiling.
                  </li>
                  <li>
                      When the mass is displaced from its equilibrium position, the spring experiences a restorative force that tries to bring the mass back to its original position.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Equilibrium Position:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The equilibrium position is the position where the spring is neither compressed nor stretched. In this position, the force exerted by the spring is zero, and the net force acting on the mass is also zero.
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Displacement and Hooke&lsquo;s Law:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  When the mass is displaced from the equilibrium position, it experiences a restoring force provided by the spring. According to Hooke&lsquo;s Law, the magnitude of the restoring force is directly proportional to the displacement from the equilibrium position.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The equation for the restoring force can be written as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      F = -kx
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where:
              </p>
              <ul>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          F
                      </span>
                      is the restoring force
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          k
                      </span>
                      is the spring constant
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          x
                      </span>
                      is the displacement from the equilibrium position
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Period and Frequency:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The period, denoted as &quot;T,&quot; is the time taken for one complete oscillation. It is the reciprocal of the frequency, denoted as &quot;f.&quot;
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The period of oscillation for a mass-spring system can be calculated using the equation:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      T = 2π√ &#40;m/k&#41;
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Energy Transfer:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  As the mass oscillates, energy is transferred between kinetic energy  &#40;KE&#41; and potential energy  &#40;PE&#41;.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  At the extreme points of the motion  &#40;maximum displacement&#41;, the mass has maximum potential energy and zero kinetic energy.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  At the equilibrium position  &#40;zero displacement&#41;, the mass has maximum kinetic energy and zero potential energy.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  As the mass oscillates, it continues to interchange between potential and kinetic energy, but the total mechanical energy  &#40;sum of KE and PE&#41; remains constant throughout the motion.
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Applications:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The oscillation of a mass-spring system has various practical applications, such as:
              </p>
              <ul>
                  <li>
                      Spring-mass systems used in mechanical clocks and watches
                  </li>
                  <li>
                      Suspension systems in vehicles to provide a smooth ride
                  </li>
                  <li>
                      Harmonic oscillators in musical instruments
                  </li>
                  <li>
                      Seismometers to measure earthquake activity
                  </li>
                  <li>
                      Testing and calibration of mechanical systems
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  The oscillation of a mass suspended from a coiled spring is a fundamental example of SHM and helps illustrate the principles of energy transfer and the relationship between displacement, force, and oscillation period.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Angular Simple Harmonic Motion  &#40;SHM&#41;
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  Angular Simple Harmonic Motion  &#40;SHM&#41; refers to the oscillatory motion exhibited by an object rotating about a fixed axis. It follows similar principles as linear SHM but involves angular quantities such as angular displacement, angular velocity, and angular acceleration. One example of angular SHM is a simple pendulum:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Simple Pendulum
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  A simple pendulum consists of a mass, known as the bob, suspended from a fixed point by a string or rod. It exhibits oscillatory motion when displaced from its equilibrium position. Here are the key characteristics of a simple pendulum:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Equilibrium Position:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The equilibrium position of a simple pendulum is the vertical position where the bob hangs freely without any external force acting on it. In this position, the string or rod is vertical, and the pendulum is at rest.
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Displacement and Restoring Torque:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  When the pendulum is displaced from its equilibrium position, it experiences a restoring torque that tries to bring it back to the equilibrium. The restoring torque is directly proportional to the angular displacement.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The equation for the restoring torque can be written as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      τ = -kθ
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where:
              </p>
              <ul>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          τ
                      </span>
                      is the restoring torque
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          k
                      </span>
                      is the torsional constant or rotational spring constant
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          θ
                      </span>
                      is the angular displacement from the equilibrium position
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Period and Frequency:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The period of a simple pendulum, denoted as &quot;T,&quot; is the time taken for one complete oscillation. It depends on the length of the pendulum and the acceleration due to gravity  &#40;g&#41;.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The period of a simple pendulum can be calculated using the equation:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      T = 2π√ &#40;L/g&#41;
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where:
              </p>
              <ul>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          L
                      </span>
                      is the length of the pendulum
                  </li>
                  <li>
                      <span className="text-2xl pr-3 font-semibold mb-2">
                          g
                      </span>
                      is the acceleration due to gravity
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Energy Transfer:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Similar to linear SHM, energy is transferred between different forms during the motion of a simple pendulum. At the extreme points of the motion  &#40;maximum displacement&#41;, the pendulum has maximum potential energy and zero kinetic energy. At the equilibrium position  &#40;zero displacement&#41;, the pendulum has maximum kinetic energy and zero potential energy.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  As the pendulum oscillates, it continues to interchange between potential and kinetic energy, but the total mechanical energy  &#40;sum of potential and kinetic energy&#41; remains constant throughout the motion.
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Applications:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The simple pendulum has various applications, including:
              </p>
              <ul>
                  <li>
                      Timekeeping devices, such as grandfather clocks and pendulum clocks
                  </li>
                  <li>
                      Sensors and accelerometers used in scientific instruments
                  </li>
                  <li>
                      Demonstration and experimentation in physics education
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  The simple pendulum is a classic example of angular SHM and provides a valuable model for understanding oscillatory motion and energy transfer in rotational systems.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Time Period of Simple Pendulum
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  To derive the expression for the time period of a simple pendulum, consider a mass  &#40;bob&#41; attached to a string or rod of length &lsquo;L&lsquo;. The pendulum is displaced from its equilibrium position by an angle &lsquo;θ&lsquo; and released. Here are the steps:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Step 1: Forces Acting on the Bob
                  </span>
              </p>
              <ul>
                  <li>
                      The gravitational force  &#40;mg&#41; acts downwards.
                  </li>
                  <li>
                      The tension  &#40;T&#41; in the string acts towards the equilibrium position.
                  </li>
                  <li>
                      Resolving the gravitational force into components, we have:
                  </li>
                  <ul>
                      <li>
                          Component along the string: mg * sin &#40;θ&#41;
                      </li>
                      <li>
                          Component perpendicular to the string: mg * cos &#40;θ&#41;
                      </li>
                  </ul>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Step 2: Restoring Force
                  </span>
              </p>
              <ul>
                  <li>
                      The restoring force responsible for bringing the pendulum back to its equilibrium position is provided by the component along the string  &#40;mg * sin &#40;θ&#41;&#41;.
                  </li>
                  <li>
                      According to Hooke&lsquo;s Law, the restoring force is directly proportional to the displacement. We can write:
                  </li>
                  <p className="text-sm lg:text-lg mb-4">
                      mg * sin &#40;θ&#41; = -k * θ
                  </p>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Step 3: Torque and Angular Acceleration
                  </span>
              </p>
              <ul>
                  <li>
                      The torque acting on the pendulum is given by τ = I * α, where τ is the torque, I is the moment of inertia of the bob, and α is the angular acceleration.
                  </li>
                  <li>
                      For a simple pendulum, the moment of inertia  &#40;I&#41; is given by I = m * L^2, where &lsquo;m&lsquo; is the mass of the bob.
                  </li>
                  <li>
                      The torque can be expressed as τ = -k * θ * L.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Step 4: Equating Torque and Angular Acceleration
                  </span>
              </p>
              <ul>
                  <li>
                      Equating the expressions for torque, we have -m * g * L * sin &#40;θ&#41; = -k * θ * L.
                  </li>
                  <li>
                      Dividing both sides by -m * L^2, we get  &#40;g / L&#41; * sin &#40;θ&#41; =  &#40;k / m&#41; * θ.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Step 5: Angular Acceleration and Time Period
                  </span>
              </p>
              <ul>
                  <li>
                      The term  &#40;g / L&#41; is equal to the angular acceleration  &#40;α&#41;, and  &#40;k / m&#41; is equal to the angular frequency squared  &#40;ω^2&#41;.
                  </li>
                  <li>
                      Thus, we have α = -ω^2 * θ.
                  </li>
                  <li>
                      The angular frequency  &#40;ω&#41; is related to the time period  &#40;T&#41; as ω = 2π / T.
                  </li>
                  <li>
                      Substituting this into the equation, we get α = - &#40;2π / T&#41;^2 * θ.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Step 6: Solution and Time Period
                  </span>
              </p>
              <ul>
                  <li>
                      Solving the differential equation, we obtain the solution θ &#40;t&#41; = A * cos &#40;ω * t + φ&#41;, where A is the amplitude, ω is the angular frequency, t is the time, and φ is the phase angle.
                  </li>
                  <li>
                      The time period  &#40;T&#41; is defined as the time taken for one complete oscillation, which is equal to 2π / ω.
                  </li>
                  <li>
                      Substituting ω = 2π / T, we get T = 2π * sqrt &#40;L / g&#41;.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  Therefore, the expression for the time period of a simple pendulum is T = 2π * sqrt &#40;L / g&#41;, where L is the length of the pendulum and g is the acceleration due to gravity.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Damped Oscillation
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  In damped oscillation, the amplitude of the oscillating system gradually decreases over time due to the presence of a damping force. This force opposes the motion and dissipates energy from the system. Here are some key points about damped oscillation:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Characteristics:
                  </span>
              </p>
              <ul>
                  <li>
                      The amplitude of the oscillations decreases exponentially with time.
                  </li>
                  <li>
                      The oscillating system experiences a damping force proportional to the velocity, which acts opposite to the direction of motion.
                  </li>
                  <li>
                      The presence of damping leads to a decrease in the total mechanical energy of the system over time.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Types of Damping:
                  </span>
              </p>
              <ul>
                  <li>
                      Underdamped Oscillation: In this case, the damping force is relatively small, and the system undergoes oscillations with gradually decreasing amplitude.
                  </li>
                  <li>
                      Overdamped Oscillation: Here, the damping force is large, causing the system to return to equilibrium without any oscillations.
                  </li>
                  <li>
                      Critically Damped Oscillation: The damping force is precisely balanced to minimize the time taken to return to equilibrium without oscillations.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Forced Oscillation
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  In forced oscillation, an external periodic force is applied to an oscillating system, driving it to oscillate with a frequency different from its natural frequency. Here are some key points about forced oscillation:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Resonance
                  </span>
              </p>
              <ul>
                  <li>
                      Resonance occurs when the frequency of the external force matches the natural frequency of the oscillating system.
                  </li>
                  <li>
                      At resonance, the amplitude of the oscillations is maximized, resulting in a significant increase in energy transfer to the system.
                  </li>
                  <li>
                      Resonance can lead to the amplification of vibrations and can have both beneficial and detrimental effects depending on the situation.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  Understanding damped oscillation, forced oscillation, and resonance is essential in various fields, including engineering, physics, and music, as they play a significant role in the behavior of mechanical and vibrational systems.
              </p>
          </section>
      </Slate>
  )
}

export default Chapter2
