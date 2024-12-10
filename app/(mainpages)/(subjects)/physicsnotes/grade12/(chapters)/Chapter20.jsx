import React from 'react';
import ChapterHeading from '@/components/subjects/ChapterHeading';
import Slate from '@/components/slate/Slate';
import Image from "next/image";
const Chapter20 = () => {
  return (
    <Slate>
      <section
        className='py-1'
        id='chapter20'
      >
        <div className="mt-14 p-3"></div>
        <ChapterHeading title={`
     Chapter 20: Electrons`}
        />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Milikan&lsquo;s Oil Drop Experiment
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Milikan&lsquo;s Oil Drop Experiment, conducted by Robert A. Millikan in 1909, determined the charge of an electron and provided evidence for the quantization of electric charge. The experiment involved suspending charged oil droplets in an electric field and observing their motion. Here is an overview of the experiment and its derivations:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Experimental Setup:
          </span>
        </p>
        <Image height={500} width={2000} className='h-[40vh]  w-auto'
          alt='Milikan&lsquo;s Oil Drop figure'
          src="https://www.researchgate.net/profile/Edgar-Pick/publication/42806379/figure/fig1/AS:601692164874245@1520465999366/The-apparatus-used-by-Robert-A-Millikan-for-performing-the-oil-drop-experiment-A-closed.png"
        />
        <p className="text-sm lg:text-lg mb-4">
          In the Milikan&lsquo;s Oil Drop Experiment, a chamber is set up with two parallel metal plates. A fine mist of oil droplets is introduced into the chamber, and some of these droplets acquire a negative charge through ionization.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The upper plate is connected to a high voltage source, creating an electric field between the plates. By adjusting the voltage, the electric field strength can be controlled.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          A microscope is used to observe the motion of the oil droplets, and their speed and direction are analyzed.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Derivation 1: Equating Electric Force and Gravitational Force
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The oil droplets in the chamber experience two forces: the gravitational force  &#40;F
          <sub>
            g
          </sub>
          &#41; and the electric force  &#40;F
          <sub>
            e
          </sub>
          &#41; due to the electric field. By equating these forces, we can determine the charge  &#40;q&#41; on the droplets.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          For a stationary droplet, the electric force is given by F
          <sub>
            e
          </sub>
          = Eq, where E is the electric field strength.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The gravitational force on the droplet is given by F
          <sub>
            g
          </sub>
          = mg, where m is the mass of the droplet and g is the acceleration due to gravity.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Equating the electric force and gravitational force, Eq = mg.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          From this equation, the charge on the droplet  &#40;q&#41; can be determined.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Derivation 2: Determining the Charge of an Electron
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Milikan&lsquo;s experiment involved observing the motion of the oil droplets under the influence of the electric field. By carefully measuring the droplets&lsquo; velocities and analyzing their motion, Millikan observed that the charges on the droplets were quantized and determined the charge of an electron  &#40;e&#41;.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          He found that the charges on the oil droplets were always integral multiples of a fundamental charge. By measuring the velocities and applying the equations of motion, Millikan was able to determine the charge on each droplet and establish the charge of an electron as e = 1.602 × 10
          <sup>
            -19
          </sup>
          C.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Significance of the Experiment:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Milikan&lsquo;s Oil Drop Experiment provided direct evidence for the quantization of electric charge and determined the charge of an electron. This experiment played a crucial role in advancing our understanding of the nature of electric charge and contributed to the development of modern atomic theory.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Motion of Electron Beam in Electric and Magnetic Fields
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The motion of an electron beam in the presence of electric and magnetic fields can be analyzed using the principles of electromagnetism. Here, we will derive the equations of motion for an electron beam under the influence of these fields:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Electric Field:
          </span>
        </p>
        <Image height={500} width={2000} className='h-[40vh]  w-auto'
          alt='Motion of electron Beam'
          src='https://onlinenotesnepal.com/storage/images/gQVYAupw9o4GulxHeP7ZrrAroW5mhtD2TiRHaTFL.jpg'
        />
        <p className="text-sm lg:text-lg mb-4">
          When an electron beam passes through an electric field, it experiences a force due to the electric field. The force on an electron with charge q in an electric field E is given by F
          <sub>
            E
          </sub>
          = qE. This force causes the electron to accelerate or decelerate depending on the direction of the electric field.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Magnetic Field:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          When an electron beam passes through a magnetic field, it experiences a force due to the magnetic field. The force on an electron with charge q moving with velocity v in a magnetic field B is given by F
          <sub>
            B
          </sub>
          = qvB sin &#40;θ&#41;, where θ is the angle between the velocity vector and the magnetic field vector. This force acts perpendicular to both the velocity and the magnetic field, resulting in a circular or helical motion.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Combined Electric and Magnetic Fields:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          When an electron beam is subjected to both electric and magnetic fields simultaneously, the resulting motion is a combination of the effects of these fields. The force experienced by the electron due to the combined fields is given by F = F
          <sub>
            E
          </sub>
          + F
          <sub>
            B
          </sub>
          .
        </p>
        <p className="text-sm lg:text-lg mb-4">
          By applying Newton&lsquo;s second law, F = ma, where m is the mass of the electron and a is its acceleration, we can derive the equations of motion for the electron beam:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          For the electric field component: qE = ma
        </p>
        <p className="text-sm lg:text-lg mb-4">
          For the magnetic field component: qvB sin &#40;θ&#41; = ma
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Since a = v/t  &#40;acceleration is the rate of change of velocity&#41;, we can rewrite the equations as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          For the electric field component: qE = mv/t
        </p>
        <p className="text-sm lg:text-lg mb-4">
          For the magnetic field component: qvB sin &#40;θ&#41; = mv/t
        </p>
        <p className="text-sm lg:text-lg mb-4">
          By rearranging these equations, we obtain:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          For the electric field component: qE = m &#40;v/t&#41;
        </p>
        <p className="text-sm lg:text-lg mb-4">
          For the magnetic field component: qvB sin &#40;θ&#41; = mv²/t
        </p>
        <p className="text-sm lg:text-lg mb-4">
          By canceling the mass  &#40;m&#41; from both equations, we can simplify them further:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          For the electric field component: qE = v/t
        </p>
        <p className="text-sm lg:text-lg mb-4">
          For the magnetic field component: qvB sin &#40;θ&#41; = v²/t
        </p>
        <p className="text-sm lg:text-lg mb-4">
          These equations describe the motion of an electron beam in the presence of electric and magnetic fields. They relate the electric field, magnetic field, velocity of the electrons, and the time taken for the motion.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          By solving these equations, we can determine the trajectory and behavior of the electron beam as it interacts with the electric and magnetic fields.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Thomson&lsquo;s Experiment to Determine the Specific Charge of Electrons
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Thomson&lsquo;s experiment, also known as the cathode ray tube experiment, was conducted to determine the specific charge  &#40;e/m&#41; of electrons. Here is a derivation of Thomson&lsquo;s experiment:
        </p>
        <br />
        <Image height={500} width={2000} className='h-[40vh]  w-auto'
          alt='cathode Ray Tube Experiment'
          src='https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/cathode%20ray%20experiment.png?YwmqLHp0eT33xGG84Yo55CO8sOTbVFQHwidth='
        />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Setup:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The experiment involves a cathode ray tube, which consists of a vacuum-sealed glass tube with two metal electrodes: a cathode  &#40;negatively charged&#41; and an anode  &#40;positively charged&#41;. The cathode is a source of electrons, while the anode attracts the electrons.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Derivation:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          1. Electric Field: When a high voltage is applied across the cathode and anode, an electric field is established in the tube. The electric field accelerates the electrons emitted from the cathode toward the anode.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          2. Motion of Electrons: The electrons, being negatively charged, experience a force due to the electric field. The force on an electron with charge q in an electric field E is given by F
          <sub>
            E
          </sub>
          = qE. This force causes the electrons to accelerate as they move towards the anode.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          3. Deflection of Electrons: Inside the cathode ray tube, perpendicular to the electric field, there is a perpendicular magnetic field created by applying an external magnetic field. The magnetic field exerts a force on the moving electrons, causing them to deflect from their straight-line path.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          4. Deflection Analysis: By adjusting the strength of the magnetic field and observing the amount of deflection of the electron beam, Thomson was able to determine the specific charge  &#40;e/m&#41; of the electrons.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          5. Applying Lorentz Force: The force experienced by an electron moving with velocity v in a magnetic field B is given by F
          <sub>
            B
          </sub>
          = qvB sin &#40;θ&#41;, where θ is the angle between the velocity vector and the magnetic field vector.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          6. Balancing Forces: Thomson adjusted the magnetic field strength until the magnetic force F
          <sub>
            B
          </sub>
          equaled the electric force F
          <sub>
            E
          </sub>
          &#40;F
          <sub>
            B
          </sub>
          = F
          <sub>
            E
          </sub>
          &#41;.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          7. Equating Forces: Equating the electric and magnetic forces, we have qE = qvB sin &#40;θ&#41;.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          8. Canceling Charge  &#40;q&#41;: Since the charge  &#40;q&#41; is common on both sides, it cancels out, giving us E = vB sin &#40;θ&#41;.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          9. Velocity Analysis: By knowing the values of the electric field  &#40;E&#41;, magnetic field  &#40;B&#41;, and the angle of deflection  &#40;θ&#41;, Thomson was able to calculate the velocity  &#40;v&#41; of the electrons.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          10. Specific Charge Calculation: Finally, by dividing the known value of the charge  &#40;e&#41; by the calculated velocity  &#40;v&#41;, Thomson obtained the specific charge  &#40;e/m&#41; of the electrons.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Thomson&lsquo;s experiment provided significant evidence for the existence of electrons and their properties. It played a crucial role in the development of modern atomic theory and solidified the understanding of electrons as fundamental particles with a specific charge.
        </p>
      </section>
    </Slate>
  )
}

export default Chapter20
