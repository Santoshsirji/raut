import React from 'react';
import ChapterHeading from '@/components/subjects/ChapterHeading';
import Slate from '@/components/slate/Slate';
const Chapter16 = () => {
  return (
    <Slate>
      <section
        className='py-1'
        id='chapter16'
      >
        <div className="mt-14 p-3"></div>
        <ChapterHeading title={`
     Chapter 16: Magnetic Field`}
        />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Magnetic Field Lines and Magnetic Flux
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Magnetic field lines are visual representations used to illustrate the direction and strength of magnetic fields. They provide a way to visualize the magnetic field around a magnet or a current-carrying conductor. Here are some key points about magnetic field lines and magnetic flux:
        </p>
        <br />
        <ul>
          <li>
            Magnetic field lines are drawn as continuous curves or loops that indicate the direction in which a north magnetic pole would move if placed in the field.
          </li>
          <li>
            The density of magnetic field lines represents the strength of the magnetic field, with a higher density indicating a stronger field.
          </li>
          <li>
            Magnetic field lines never intersect, which means that at any given point, the magnetic field has a unique direction.
          </li>
          <li>
            The magnetic field lines form closed loops, either within a magnet or from the north pole to the south pole.
          </li>
          <li>
            Magnetic flux is a measure of the total number of magnetic field lines passing through a given area.
          </li>
          <li>
            The magnetic flux through a surface is proportional to the number of field lines passing through the surface.
          </li>
          <li>
            The unit of magnetic flux is the Weber  &#40;Wb&#41;, where 1 Wb represents one magnetic field line passing through an area of 1 square meter perpendicular to the field.
          </li>
        </ul>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Oersted&lsquo;s Experiment
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Oersted&lsquo;s experiment, conducted by Hans Christian Oersted in 1820, provided one of the earliest demonstrations of the relationship between electric current and magnetic fields. The experiment showed that a current-carrying conductor can deflect a nearby magnetic compass needle. Here are the key details of Oersted&lsquo;s experiment:
        </p>
        <br />
        <ul>
          <li>
            Oersted observed that when an electric current flows through a wire, a magnetic field is produced around the wire.
          </li>
          <li>
            To demonstrate this, he placed a compass needle near a wire conducting an electric current.
          </li>
          <li>
            When the current was turned on, the compass needle deflected from its original position, aligning itself perpendicular to the wire.
          </li>
          <li>
            When the current was turned off, the compass needle returned to its original position.
          </li>
          <li>
            This experiment indicated that electric currents generate magnetic fields, providing a crucial insight into the relationship between electricity and magnetism.
          </li>
        </ul>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Oersted&lsquo;s experiment laid the foundation for the development of electromagnetism and contributed to the understanding of the fundamental interplay between electricity and magnetism.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Force of Moving Charge
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          When a charged particle, such as an electron or a proton, moves in a magnetic field, it experiences a force known as the magnetic force. The magnetic force on a moving charge is perpendicular to both the velocity of the charge and the magnetic field direction. Here are some key points about the force of a moving charge:
        </p>
        <br />
        <ul>
          <li>
            The force on a moving charge is given by the equation:
            <em className="font-semibold text-sm lg:text-lg pr-2">
              F
            </em>
            =
            <em className="font-semibold text-sm lg:text-lg pr-2">
              q
            </em>
            &#40;
            <em className="font-semibold text-sm lg:text-lg pr-2">
              v
            </em>
            ×
            <em className="font-semibold text-sm lg:text-lg pr-2">
              B
            </em>
            &#41;, where
            <em className="font-semibold text-sm lg:text-lg pr-2">
              F
            </em>
            is the magnetic force,
            <em className="font-semibold text-sm lg:text-lg pr-2">
              q
            </em>
            is the charge,
            <em className="font-semibold text-sm lg:text-lg pr-2">
              v
            </em>
            is the velocity of the charge, and
            <em className="font-semibold text-sm lg:text-lg pr-2">
              B
            </em>
            is the magnetic field.
          </li>
          <li>
            The direction of the force is determined by the right-hand rule. If the thumb of the right hand points in the direction of the charge&lsquo;s velocity and the fingers point in the direction of the magnetic field, the palm represents the direction of the magnetic force.
          </li>
          <li>
            The magnetic force on a positive charge is in the opposite direction to that on a negative charge with the same velocity.
          </li>
          <li>
            If the velocity of the charge is parallel or antiparallel to the magnetic field, the magnetic force is zero.
          </li>
          <li>
            The magnitude of the magnetic force depends on the charge of the particle, its velocity, and the strength of the magnetic field.
          </li>
        </ul>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Force on a Conductor
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          When an electric current flows through a conductor placed in a magnetic field, the conductor experiences a force known as the magnetic force. The force on a current-carrying conductor is perpendicular to both the current direction and the magnetic field direction. Here are some key points about the force on a conductor:
        </p>
        <br />
        <ul>
          <li>
            The force on a current-carrying conductor is given by the equation:
            <em className="font-semibold text-sm lg:text-lg pr-2">
              F
            </em>
            =
            <em className="font-semibold text-sm lg:text-lg pr-2">
              I
            </em>
            &#40;
            <em className="font-semibold text-sm lg:text-lg pr-2">
              L
            </em>
            ×
            <em className="font-semibold text-sm lg:text-lg pr-2">
              B
            </em>
            &#41;, where
            <em className="font-semibold text-sm lg:text-lg pr-2">
              F
            </em>
            is the magnetic force,
            <em className="font-semibold text-sm lg:text-lg pr-2">
              I
            </em>
            is the current,
            <em className="font-semibold text-sm lg:text-lg pr-2">
              L
            </em>
            is the length of the conductor, and
            <em className="font-semibold text-sm lg:text-lg pr-2">
              B
            </em>
            is the magnetic field.
          </li>
          <li>
            The direction of the force is determined by the right-hand rule. If the thumb of the right hand points in the direction of the current, and the fingers point in the direction of the magnetic field, the palm represents the direction of the force on the conductor.
          </li>
          <li>
            The force on a current-carrying conductor can cause it to move or experience a torque depending on its orientation with respect to the magnetic field.
          </li>
          <li>
            The magnitude of the force depends on the current flowing through the conductor, the length of the conductor in the magnetic field, and the strength of the magnetic field.
          </li>
        </ul>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The force of a moving charge and the force on a conductor in a magnetic field are fundamental concepts in electromagnetism and have various applications in electrical devices and technologies.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Force and Torque on a Rectangular Coil
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          When a rectangular coil carrying a current is placed in a magnetic field, it experiences both a force and a torque. The force and torque on the coil are crucial in understanding the working principle of a moving coil galvanometer. Here is a detailed explanation of the force and torque on a rectangular coil:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Force on a Rectangular Coil:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          When a current-carrying rectangular coil is placed in a magnetic field, each side of the coil experiences a force due to the interaction between the current and the magnetic field. The force on each side of the coil can be calculated using the formula:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          F = BIL
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Where F is the force on each side of the coil, B is the magnetic field strength, I is the current flowing through the coil, and L is the length of each side of the coil.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The direction of the force on each side of the coil can be determined using the right-hand rule. If the fingers of the right hand are curled in the direction of the current, the thumb points in the direction of the force on the side of the coil.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The net force on the rectangular coil is the vector sum of the forces on each side. The forces on opposite sides of the coil are equal in magnitude and opposite in direction, resulting in a net force of zero in a uniform magnetic field.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Torque on a Rectangular Coil:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          When a current-carrying rectangular coil is placed in a magnetic field, it experiences a torque that tends to rotate the coil. The torque can be calculated using the formula:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          T = NIABsinθ
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Where T is the torque on the coil, N is the number of turns in the coil, I is the current flowing through the coil, A is the area of the coil, B is the magnetic field strength, and θ is the angle between the magnetic field and the normal to the plane of the coil.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The direction of the torque can be determined using the right-hand rule. If the fingers of the right hand are curled in the direction of the current, and the thumb points in the direction of the magnetic field, the palm represents the direction of the torque on the coil.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Moving Coil Galvanometer:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          A moving coil galvanometer is an instrument that measures small electric currents. It consists of a rectangular coil suspended in a uniform magnetic field. When a current flows through the coil, the torque exerted on the coil causes it to rotate. The rotation of the coil is proportional to the current passing through it, allowing for current measurement.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The torque exerted on the coil can be balanced by a restoring torque, typically provided by a spring. The deflection of the coil is indicated by a pointer attached to the coil, allowing for reading the current value from a calibrated scale.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The sensitivity of a moving coil galvanometer can be increased by increasing the number of turns in the coil, using a stronger magnetic field, or decreasing the moment of inertia of the coil.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The force and torque on a rectangular coil and their applications in a moving coil galvanometer provide a basis for measuring electrical currents accurately.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Hall Effect
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The Hall effect is a phenomenon in physics that describes the generation of a voltage across a conductor when it is placed in a magnetic field and a current flows through it. The Hall effect is widely used to measure the strength and direction of magnetic fields, as well as to determine the properties of conductive materials. Here is a detailed explanation of the Hall effect, including its derivation:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Derivation of the Hall Effect:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Consider a rectangular conductor of width &lsquo;w&lsquo;, height &lsquo;h&lsquo;, and length &lsquo;l&lsquo; placed in a magnetic field &lsquo;B&lsquo; directed perpendicular to the plane of the conductor.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          When a current &lsquo;I&lsquo; flows through the conductor in the positive x-direction, the Lorentz force experienced by the moving charges is given by:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          F = qvB
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Where F is the force, q is the charge of the moving particles, v is the drift velocity, and B is the magnetic field strength.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Since the current is flowing in the x-direction, the electrons experience a force in the negative y-direction due to the negative charge of the electrons.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The force causes the charges to accumulate on one side of the conductor, resulting in an electric field &lsquo;E&lsquo; in the y-direction.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The electric field creates a potential difference across the conductor, causing a voltage &lsquo;V&lsquo; to develop across the width of the conductor.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The magnitude of the electric field is given by:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          E = V/w
        </p>
        <p className="text-sm lg:text-lg mb-4">
          By equating the electric and magnetic forces, we have:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          qvB = qE
        </p>
        <p className="text-sm lg:text-lg mb-4">
          vB = E
        </p>
        <p className="text-sm lg:text-lg mb-4">
          v = E/B
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The drift velocity &lsquo;v&lsquo; of the charges is directly proportional to the electric field &lsquo;E&lsquo; and inversely proportional to the magnetic field strength &lsquo;B&lsquo;.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The Hall coefficient &lsquo;R_H&lsquo; is defined as the ratio of the electric field &lsquo;E&lsquo; to the product of the current density &lsquo;J&lsquo; and the magnetic field &lsquo;B&lsquo;:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          R_H = E/ &#40;J x B&#41;
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Substituting the expression for the electric field &lsquo;E&lsquo; and the current density &lsquo;J&lsquo;  &#40;J = I/ &#40;w x h&#41;&#41;, we have:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          R_H = V/ &#40;I x B x h&#41;
        </p>
        <p className="text-sm lg:text-lg mb-4">
          R_H is a material-dependent quantity and is known as the Hall coefficient.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The Hall coefficient &lsquo;R_H&lsquo; can be positive or negative, depending on the type of charge carriers  &#40;electrons or holes&#41; and the direction of the magnetic field.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The sign of &lsquo;R_H&lsquo; can be used to determine the type of charge carriers and the dominant charge carrier in a conductor.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The Hall effect can be used to measure the magnetic field strength, as the voltage &lsquo;V&lsquo; across the conductor is directly proportional to the magnetic field &lsquo;B&lsquo;.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The Hall effect also provides information about the properties of conductive materials, such as the density and mobility of charge carriers.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The Hall effect is a fundamental principle that finds applications in various fields, including magnetic field measurement, semiconductor characterization, and current sensing.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Magnetic Field of Moving Charge
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The magnetic field produced by a moving charge is a fundamental concept in electromagnetism. When a charged particle moves with a velocity &lsquo;v&lsquo;, it creates a magnetic field in its surrounding space. The magnetic field can be calculated using Ampere&lsquo;s law and the Biot-Savart law. Here is a derivation of the magnetic field produced by a moving charge:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Derivation:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Consider a point charge &lsquo;q&lsquo; moving with a velocity &lsquo;v&lsquo;. We want to determine the magnetic field at a point &lsquo;P&lsquo; located at a distance &lsquo;r&lsquo; from the moving charge.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          According to the Biot-Savart law, the magnetic field &lsquo;B&lsquo; at point &lsquo;P&lsquo; is given by:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          B =  &#40;μ₀ / 4π&#41; *  &#40;q * v x r&#41; / r³
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Where μ₀ is the permeability of free space, &lsquo;x&lsquo; represents the cross product, and &lsquo;r&lsquo; is the distance from the charge to the point at which the magnetic field is being calculated.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The cross product &lsquo;v x r&lsquo; gives a vector that is perpendicular to both the velocity &lsquo;v&lsquo; and the position vector &lsquo;r&lsquo;.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Since the velocity &lsquo;v&lsquo; is perpendicular to the magnetic field &lsquo;B&lsquo;, the magnitude of &lsquo;v x r&lsquo; is equal to the product of the magnitudes of &lsquo;v&lsquo; and &lsquo;r&lsquo;.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The magnetic field can be simplified as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          B =  &#40;μ₀ / 4π&#41; *  &#40;q * v * sinθ&#41; / r²
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Where θ is the angle between the velocity vector &lsquo;v&lsquo; and the position vector &lsquo;r&lsquo;.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          From the above expression, we can observe that the magnitude of the magnetic field decreases with the square of the distance &lsquo;r&lsquo; from the moving charge.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The direction of the magnetic field is determined by the right-hand rule, where the thumb points in the direction of the velocity &lsquo;v&lsquo;, and the curled fingers indicate the direction of the magnetic field.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          It is important to note that the magnetic field produced by a moving charge is different from that produced by a current-carrying wire. The magnetic field of a moving charge spreads out in a spherical pattern.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The magnetic field produced by a moving charge has various applications in physics and engineering, such as particle accelerators, mass spectrometers, and the study of charged particle motion in magnetic fields.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Biot-Savart Law
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The Biot-Savart law is a fundamental principle in electromagnetism that describes the magnetic field generated by a steady current in a wire. It provides a quantitative relationship between the current-carrying element, the magnetic field it produces, and the distance from the element. The law is named after Jean-Baptiste Biot and Félix Savart, who formulated it in the early 19th century.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The Biot-Savart law states that the magnetic field at a point in space due to a small current-carrying element is directly proportional to the magnitude of the current, the length of the element, the sine of the angle between the element and the line connecting the element to the point, and inversely proportional to the square of the distance between the element and the point.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The mathematical expression of the Biot-Savart law is given as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          B =  &#40;μ₀ / 4π&#41; *  &#40;I * dl x r&#41; / r³
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Where B is the magnetic field at the point of interest, I is the current flowing through the element, dl is the infinitesimal length element, r is the displacement vector from the element to the point, μ₀ is the permeability of free space  &#40;a constant&#41;, and x represents the cross product.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The Biot-Savart law is used to calculate the magnetic field produced by various current-carrying geometries, such as straight wires, circular loops, and solenoids. By integrating the contributions of all the current-carrying elements along a path, the total magnetic field at a point can be determined.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The Biot-Savart law is a key principle in the study of electromagnetism and finds applications in various fields, including electrical engineering, physics, and magnetism. It provides a fundamental tool for understanding and analyzing the behavior of magnetic fields generated by electric currents.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Application of Biot-Savart Law on a Circular Coil
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          To calculate the magnetic field at the center of a circular coil using the Biot-Savart law, consider a circular coil of radius R carrying a current I. Let P be the point at the center of the coil. Let dl be a small element of the coil, and r be the distance between dl and P. The magnetic field dB due to dl at P is given by the Biot-Savart law:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          dB =  &#40;μ₀ / 4π&#41; *  &#40;I * dl × r̂&#41; / r²
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The total magnetic field at P is obtained by integrating the contributions of all the current-carrying elements of the coil:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          B = ∫dB =  &#40;μ₀ / 4π&#41; * I * ∫ &#40;dl × r̂&#41; / r²
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The resulting expression for the magnetic field B at the center of the circular coil is:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          B =  &#40;μ₀ * I * R²&#41; /  &#40;2 *  &#40;R² + z²&#41;^ &#40;3/2&#41;&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          where z is the distance from the center of the coil along its axis.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Application of Biot-Savart Law on a Long Straight Conductor
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          To calculate the magnetic field due to a long straight conductor using the Biot-Savart law, consider a conductor carrying a current I. Let P be a point at a distance r from the conductor. The magnetic field dB due to the conductor at P is given by the Biot-Savart law:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          dB =  &#40;μ₀ / 4π&#41; *  &#40;I * dl × r̂&#41; / r²
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Integrating the contributions of all the current-carrying elements of the conductor, the magnetic field B due to a long straight conductor is:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          B =  &#40;μ₀ * I&#41; /  &#40;2π * r&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Application of Biot-Savart Law on a Long Solenoid
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          To calculate the magnetic field inside a long solenoid using the Biot-Savart law, consider a solenoid of length L, radius R, and carrying a current I. Let P be a point inside the solenoid. Let dl be a small element of the solenoid, and r be the distance between dl and P. The magnetic field dB due to dl at P is given by the Biot-Savart law:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          dB =  &#40;μ₀ / 4π&#41; *  &#40;I * dl × r̂&#41; / r²
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The total magnetic field inside the solenoid is obtained by integrating the contributions of all the current-carrying elements of the solenoid:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          B = ∫dB =  &#40;μ₀ / 4π&#41; * I * ∫ &#40;dl × r̂&#41; / r²
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The resulting expression for the magnetic field B inside a long solenoid is:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          B = μ₀ * n * I / L
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          where n is the number of turns per unit length of the solenoid.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Ampere&lsquo;s Law
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Ampere&lsquo;s Law is a fundamental law in electromagnetism that relates the magnetic field around a closed loop to the electric current passing through the loop. It states that the line integral of the magnetic field around a closed path is equal to the product of the permeability of free space  &#40;μ₀&#41; and the total current passing through the surface bounded by the loop:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          ∮B · dl = μ₀ * I_total
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          where B is the magnetic field, dl is a small element of the path, and I_total is the total current passing through the surface bounded by the loop.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Application of Ampere&lsquo;s Law on a Long Straight Conductor
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          When applying Ampere&lsquo;s Law to a long straight conductor carrying a current I, we consider a closed loop around the conductor. The magnetic field B is constant in magnitude along the loop and perpendicular to it. The path of integration is chosen as a circular loop with radius r centered on the conductor.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Using Ampere&lsquo;s Law, we have:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          ∮B · dl = μ₀ * I_total
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          B * 2πr = μ₀ * I
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          B =  &#40;μ₀ * I&#41; /  &#40;2πr&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          This is the expression for the magnetic field B at a distance r from a long straight conductor.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Application of Ampere&lsquo;s Law on a Straight Solenoid
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          When applying Ampere&lsquo;s Law to a straight solenoid, we consider a closed loop that encircles the solenoid. The magnetic field B inside the solenoid is constant in magnitude and direction.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Using Ampere&lsquo;s Law, we have:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          ∮B · dl = μ₀ * I_total
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          B * 2πr = μ₀ *  &#40;N * I&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          B =  &#40;μ₀ * N * I&#41; /  &#40;2πr&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          This is the expression for the magnetic field B inside a straight solenoid, where N is the number of turns per unit length.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Application of Ampere&lsquo;s Law on a Toroidal Solenoid
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          When applying Ampere&lsquo;s Law to a toroidal solenoid, we consider a closed loop that encircles the toroidal solenoid. The magnetic field B inside the toroid is constant in magnitude and direction.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Using Ampere&lsquo;s Law, we have:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          ∮B · dl = μ₀ * I_total
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          B * 2πr = μ₀ *  &#40;N * I&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          B =  &#40;μ₀ * N * I&#41; /  &#40;2πr&#41;
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          This is the expression for the magnetic field B inside a toroidal solenoid, where N is the number of turns per unit length.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Ampere&lsquo;s Law and its Applications
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Ampere&lsquo;s Law:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Ampere&lsquo;s law relates the magnetic field around a closed loop to the electric current passing through the loop. It states that the magnetic field line integral around a closed loop is equal to the product of the permeability of free space  &#40;μ₀&#41; and the total current passing through the loop.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Application of Ampere&lsquo;s Law:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          i. Force between Two Parallel Conductors Carrying Current:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The force between two parallel conductors carrying current can be calculated using Ampere&lsquo;s law. The force  &#40;F&#41; is given by the formula:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          F =  &#40;μ₀ * I₁ * I₂ * L&#41; /  &#40;2π * d&#41;
        </p>
        <p className="text-sm lg:text-lg mb-4">
          where F is the force between the conductors, I₁ and I₂ are the currents in the conductors, L is the length of the conductors, d is the distance between the conductors, and μ₀ is the permeability of free space.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          ii. Magnetic Field of a Long Straight Conductor:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The magnetic field  &#40;B&#41; around a long straight conductor can be determined using Ampere&lsquo;s law. For an infinite conductor, the magnetic field is given by:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          B =  &#40;μ₀ * I&#41; /  &#40;2π * r&#41;
        </p>
        <p className="text-sm lg:text-lg mb-4">
          where B is the magnetic field, I is the current in the conductor, r is the distance from the conductor, and μ₀ is the permeability of free space.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          iii. Magnetic Field of a Straight Solenoid:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Ampere&lsquo;s law can be applied to determine the magnetic field inside a straight solenoid. The magnetic field  &#40;B&#41; inside an ideal solenoid with n turns per unit length and carrying a current I is given by:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          B = μ₀ * n * I
        </p>
        <p className="text-sm lg:text-lg mb-4">
          where B is the magnetic field, n is the number of turns per unit length, I is the current in the solenoid, and μ₀ is the permeability of free space.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          iv. Magnetic Field of a Toroidal Solenoid:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          A toroidal solenoid is a coil wound in the shape of a torus. The magnetic field inside the toroidal solenoid is given by Ampere&lsquo;s law as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          B = μ₀ * n * I
        </p>
        <p className="text-sm lg:text-lg mb-4">
          where B is the magnetic field, n is the number of turns per unit length, I is the current in the solenoid, and μ₀ is the permeability of free space.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          In summary, Ampere&lsquo;s law is a fundamental principle in electromagnetism, and it has various applications such as calculating the force between parallel conductors, determining the magnetic field of a long straight conductor, a straight solenoid, and a toroidal solenoid.
        </p>
      </section>
    </Slate>
  )
}

export default Chapter16
