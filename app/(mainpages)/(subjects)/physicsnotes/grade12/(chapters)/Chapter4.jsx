import React from 'react';
import ChapterHeading from '@/components/subjects/ChapterHeading';
import Slate from '@/components/slate/Slate';
const Chapter4 = () => {
  return (
      <Slate>
          <section
              className='py-1'
              id='chapter4'
          >
              <div className="mt-14 p-3"></div>
              <ChapterHeading title={`
     Chapter 4: First Law of Thermodynamics`}
              />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Thermodynamic Systems
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  In thermodynamics, a system refers to a specific region or portion of space that is under study or analysis. It can be a physical object, substance, or a defined volume. The behavior and properties of a system are studied by observing the exchange of energy, matter, and other variables between the system and its surroundings. Here are the three main types of thermodynamic systems:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      1. Open System:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  An open system allows the transfer of both energy and matter across its boundaries with the surroundings. This means that substances can enter or leave the system, and energy can be exchanged in the form of heat or work. Examples of open systems include a pot of boiling water with vapor escaping, or a living organism exchanging heat and nutrients with its environment.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      2. Closed System:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  A closed system permits the transfer of energy across its boundaries but does not allow the exchange of matter. The system is isolated from its surroundings in terms of mass, but energy can still enter or leave in the form of heat or work. A sealed container with a fixed amount of gas undergoing temperature changes is an example of a closed system.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      3. Isolated System:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  An isolated system is completely sealed and does not interact with its surroundings in terms of energy or matter exchange. It is self-contained and isolated from any external influences. The total energy and mass within an isolated system remain constant. The universe is often considered as an isolated system since it is regarded as a closed and self-contained entity.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Thermodynamic systems serve as a basis for studying and analyzing various thermodynamic processes, including heat transfer, work interactions, and changes in energy and entropy. The choice of system type depends on the specific application and the nature of the phenomena being investigated.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Work Done during Volume Change  &#40;Formula Derivation&#41;
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  In thermodynamics, work is a form of energy transfer that occurs during a change in the volume of a system. The work done during a volume change can be derived using the following steps:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Step 1: Consider a System
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Start by considering a thermodynamic system, such as a gas enclosed in a cylinder with a movable piston. Assume that the gas undergoes a volume change from an initial volume V
                  <sub>
                      1
                  </sub>
                  to a final volume V
                  <sub>
                      2
                  </sub>
                  .
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Step 2: Define Pressure
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Let P be the pressure exerted by the gas on the movable piston. Since pressure is defined as the force per unit area, the force F exerted by the gas on the piston can be expressed as F = P * A, where A is the cross-sectional area of the piston.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Step 3: Calculate Differential Work
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Now, consider an infinitesimal change in volume dV. As the gas expands or contracts, the piston moves, causing a displacement dx. The differential work done dW can be calculated as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  dW = F * dx
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Substituting the expression for force F, we have:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  dW =  &#40;P * A&#41; * dx
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Step 4: Express dx in terms of dV
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Since dx represents the displacement of the piston, it can be expressed in terms of the change in volume dV. The cross-sectional area A multiplied by the change in displacement dx gives the change in volume dV:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  dV = A * dx
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  From this equation, we can express dx as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  dx = dV / A
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Step 5: Substitute dx in the Work Equation
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Substituting the expression for dx in the differential work equation, we have:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  dW =  &#40;P * A&#41; *  &#40;dV / A&#41;
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  dW = P * dV
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Step 6: Integrate for Total Work
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  To find the total work done during the volume change from V
                  <sub>
                      1
                  </sub>
                  to V
                  <sub>
                      2
                  </sub>
                  , integrate the differential work equation:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  W = ∫ &#40;P * dV&#41;
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  W = ∫P dV
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Step 7: Apply Appropriate Equation of State
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Depending on the gas and its behavior, an appropriate equation of state  &#40;such as the ideal gas law or a more specialized equation&#41; can be used to express the pressure P in terms of the volume V. This allows the integration to be carried out.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The resulting expression for the work done during the volume change depends on the specific conditions and equation of state applied.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  This derivation provides a general framework for calculating the work done during a volume change in a thermodynamic system. The actual expression for work may vary depending on the specific system and the equation of state used to relate pressure and volume.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Heat:
                  </span>
              </p>
              <ul>
                  <li>
                      Heat is a form of energy transfer between two objects or systems due to a temperature difference.
                  </li>
                  <li>
                      It occurs spontaneously from an object with higher temperature to an object with lower temperature until thermal equilibrium is reached.
                  </li>
                  <li>
                      Heat transfer can happen through conduction, convection, or radiation.
                  </li>
                  <li>
                      Heat is represented by the symbol Q and is measured in joules  &#40;J&#41; or calories  &#40;cal&#41;.
                  </li>
                  <li>
                      Heat is not a property of a system but rather a form of energy exchange.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Work:
                  </span>
              </p>
              <ul>
                  <li>
                      Work is also a form of energy transfer, but it involves the application of a force over a distance.
                  </li>
                  <li>
                      Work can change the energy state of a system by adding or removing mechanical energy.
                  </li>
                  <li>
                      Work can be positive  &#40;energy added to the system&#41; or negative  &#40;energy removed from the system&#41;.
                  </li>
                  <li>
                      Work is represented by the symbol W and is measured in joules  &#40;J&#41;.
                  </li>
                  <li>
                      Work is a path-dependent process and depends on the specific process or pathway followed.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Difference between Heat and Work:
                  </span>
              </p>
              <ul>
                  <li>
                      Heat and work are both forms of energy transfer, but they differ in their mechanisms and characteristics:
                  </li>
                  <li>
                      Heat is a transfer of energy due to temperature difference, while work is a transfer of energy due to the application of force over a distance.
                  </li>
                  <li>
                      Heat transfer is non-mechanical and can occur even without any physical contact between the objects, while work transfer involves mechanical forces acting on a system.
                  </li>
                  <li>
                      Heat is a spontaneous process driven by a temperature gradient, while work is a result of external forces applied deliberately.
                  </li>
                  <li>
                      Heat transfer is independent of the path followed, while work transfer depends on the specific process or pathway.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      First Law of Thermodynamics:
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The first law of thermodynamics states that the change in internal energy  &#40;ΔU&#41; of a system is equal to the heat transfer  &#40;Q&#41; into the system minus the work done  &#40;W&#41; by the system:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  ΔU = Q - W
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  This equation represents the conservation of energy principle in thermodynamics and relates the changes in internal energy, heat, and work for a given system.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Internal Energy
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  Internal energy refers to the total energy possessed by a thermodynamic system. It includes the kinetic energy and potential energy of the molecules or particles within the system. Here are some key points about internal energy:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Definition:
                  </span>
              </p>
              <ul>
                  <li>
                      Internal energy is the sum of the kinetic and potential energies of the particles within a system.
                  </li>
                  <li>
                      It is a state function, meaning it depends only on the current state of the system and not on the path taken to reach that state.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Forms of Internal Energy:
                  </span>
              </p>
              <ul>
                  <li>
                      Internal energy can exist in various forms, such as the translational, rotational, and vibrational energies of molecules, as well as the potential energy due to intermolecular forces.
                  </li>
                  <li>
                      It is influenced by factors such as temperature, pressure, and composition of the system.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Change in Internal Energy:
                  </span>
              </p>
              <ul>
                  <li>
                      The change in internal energy  &#40;ΔU&#41; of a system is determined by the heat transfer  &#40;Q&#41; into or out of the system and the work done  &#40;W&#41; by or on the system.
                  </li>
                  <li>
                      According to the first law of thermodynamics, the change in internal energy is given by the equation: ΔU = Q - W.
                  </li>
                  <li>
                      {`If heat is added to the system or work is done on the system, the internal energy increases  &#40;ΔU > 0&#41;. Conversely, if heat is transferred out of the system or work is done by the system, the internal energy decreases  &#40;ΔU < 0&#41;.`}
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Relationship with Temperature:
                  </span>
              </p>
              <ul>
                  <li>
                      Changes in internal energy are often associated with changes in temperature. When a system absorbs heat, its internal energy increases, leading to an increase in temperature. Conversely, when a system loses heat, its internal energy decreases, resulting in a decrease in temperature.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  Internal energy is a fundamental concept in thermodynamics, and understanding its behavior is crucial for analyzing and predicting the behavior of thermodynamic systems.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      First Law of Thermodynamics
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  The first law of thermodynamics, also known as the law of energy conservation, states that energy cannot be created or destroyed in an isolated system. It can only be transferred or converted from one form to another. Here are some key points about the first law of thermodynamics:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Energy Conservation:
                  </span>
              </p>
              <ul>
                  <li>
                      The total energy of an isolated system remains constant over time.
                  </li>
                  <li>
                      The energy within the system can change its form, such as from heat to work or vice versa, but the total amount of energy remains constant.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Internal Energy:
                  </span>
              </p>
              <ul>
                  <li>
                      The first law of thermodynamics is based on the concept of internal energy, which refers to the total energy possessed by a system.
                  </li>
                  <li>
                      Internal energy includes various forms of energy, such as kinetic energy, potential energy, and chemical energy, within the system.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Heat and Work:
                  </span>
              </p>
              <ul>
                  <li>
                      The first law relates heat transfer  &#40;Q&#41; and work done  &#40;W&#41; to changes in the internal energy  &#40;ΔU&#41; of a system.
                  </li>
                  <li>
                      The equation that represents the first law of thermodynamics is: ΔU = Q - W.
                  </li>
                  <li>
                      If heat is added to the system or work is done on the system, the internal energy increases. Conversely, if heat is transferred out of the system or work is done by the system, the internal energy decreases.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Conservation Principle:
                  </span>
              </p>
              <ul>
                  <li>
                      The first law of thermodynamics is a manifestation of the conservation of energy principle, which is a fundamental concept in physics.
                  </li>
                  <li>
                      It states that the total energy of a closed system remains constant, and energy can be neither created nor destroyed.
                  </li>
                  <li>
                      This principle applies to all types of energy, including thermal energy, mechanical energy, electrical energy, and chemical energy.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  The first law of thermodynamics provides a fundamental framework for understanding and analyzing energy transformations and exchanges in various thermodynamic processes.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Isothermal Process
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  An isothermal process is a thermodynamic process in which the temperature of a system remains constant throughout the process. Here are some key points about isothermal processes:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Characteristics:
                  </span>
              </p>
              <ul>
                  <li>
                      During an isothermal process, the system is in thermal equilibrium with its surroundings, and heat is continuously exchanged to maintain the constant temperature.
                  </li>
                  <li>
                      The temperature of the system is held constant by placing it in contact with a heat reservoir, such as a constant-temperature bath.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Work Done:
                  </span>
              </p>
              <ul>
                  <li>
                      The work done during an isothermal process can be calculated using the following equation: W = nRT ln &#40;V2/V1&#41;, where W is the work done, n is the number of moles of gas, R is the ideal gas constant, T is the temperature, V1 is the initial volume, and V2 is the final volume.
                  </li>
                  <li>
                      {`The negative sign in the equation indicates that work is done on the system during expansion  &#40;V2 > V1&#41; and work is done by the system during compression  &#40;V2 < V1&#41;.`}
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Isochoric Process  &#40;Constant Volume&#41;
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  An isochoric process is a thermodynamic process in which the volume of a system remains constant. Here are some key points about isochoric processes:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Characteristics:
                  </span>
              </p>
              <ul>
                  <li>
                      During an isochoric process, no work is done by or on the system because there is no change in volume.
                  </li>
                  <li>
                      The energy exchange occurs only in the form of heat.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Work Done:
                  </span>
              </p>
              <ul>
                  <li>
                      As the volume remains constant, the work done during an isochoric process is zero  &#40;W = 0&#41;.
                  </li>
                  <li>
                      The internal energy change  &#40;ΔU&#41; is equal to the heat added to the system  &#40;Q&#41;.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Isobaric Process  &#40;Constant Pressure&#41;
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  An isobaric process is a thermodynamic process in which the pressure of a system remains constant. Here are some key points about isobaric processes:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Characteristics:
                  </span>
              </p>
              <ul>
                  <li>
                      During an isobaric process, the system is in contact with a constant-pressure source or is surrounded by a medium with a constant pressure.
                  </li>
                  <li>
                      The volume of the system can change, and work is done in the process.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Work Done:
                  </span>
              </p>
              <ul>
                  <li>
                      The work done during an isobaric process can be calculated using the following equation: W = P &#40;V2 - V1&#41;, where W is the work done, P is the constant pressure, V1 is the initial volume, and V2 is the final volume.
                  </li>
                  <li>
                      {`The work done is positive when the system expands  &#40;V2 > V1&#41; and negative when the system is compressed  &#40;V2 <   V1&#41;.`}
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Adiabatic Process  &#40;No Heat Transfer&#41;
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  An adiabatic process is a thermodynamic process in which there is no heat exchange between the system and its surroundings. Here are some key points about adiabatic processes:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Characteristics:
                  </span>
              </p>
              <ul>
                  <li>
                      During an adiabatic process, the system is insulated, preventing any heat transfer.
                  </li>
                  <li>
                      The internal energy of the system changes due to work done or changes in the system&lsquo;s thermodynamic properties.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Work Done:
                  </span>
              </p>
              <ul>
                  <li>
                      The work done during an adiabatic process can be calculated using the following equation: W =  &#40;P2V2 - P1V1&#41;/ &#40;γ - 1&#41;, where W is the work done, P1 and P2 are the initial and final pressures, V1 and V2 are the initial and final volumes, and γ is the heat capacity ratio or adiabatic index.
                  </li>
                  <li>
                      The work done depends on the specific heat capacities and the change in pressure and volume.
                  </li>
              </ul>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  These different thermodynamic processes have specific characteristics and relationships between work done, heat transfer, and changes in thermodynamic properties, providing insights into the behavior of systems under different conditions.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Heat Capacities of an Ideal Gas
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  The heat capacities of an ideal gas represent the amount of heat energy required to change the temperature of the gas at constant pressure  &#40;Cp&#41; or constant volume  &#40;Cv&#41;. Here are the definitions and relationships between these heat capacities:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Specific Heat Capacity at Constant Pressure  &#40;Cp&#41;
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The specific heat capacity at constant pressure, Cp, is defined as the amount of heat energy required to raise the temperature of a unit mass of the gas by one degree Celsius  &#40;or one Kelvin&#41; while keeping the pressure constant.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Specific Heat Capacity at Constant Volume  &#40;Cv&#41;
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The specific heat capacity at constant volume, Cv, is defined as the amount of heat energy required to raise the temperature of a unit mass of the gas by one degree Celsius  &#40;or one Kelvin&#41; while keeping the volume constant.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Relation between Cp and Cv
                  </span>
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  For an ideal gas, the relationship between the specific heat capacities at constant pressure and constant volume is given by:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Cp - Cv = R
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where R is the specific gas constant.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  This relationship is a consequence of the First Law of Thermodynamics and is applicable to ideal gases under various conditions.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Mayer&lsquo;s Formula Derivation
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  Mayer&lsquo;s formula relates the specific heat capacity at constant pressure  &#40;Cp&#41; to the specific heat capacity at constant volume  &#40;Cv&#41; for an ideal gas. The derivation of Mayer&lsquo;s formula is as follows:
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  Let&lsquo;s consider a gas undergoing a process from state A to state B, with an increase in temperature  &#40;ΔT&#41; at constant pressure  &#40;P&#41;.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The change in internal energy  &#40;ΔU&#41; of the gas can be expressed as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  ΔU = Q - W
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where Q is the heat added to the gas and W is the work done by the gas.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  For a process at constant pressure, the work done by the gas can be written as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  W = PΔV
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where ΔV is the change in volume of the gas.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Using the ideal gas equation, PV = nRT, where n is the number of moles of the gas and R is the specific gas constant, we can rewrite the work expression as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  W = nRTΔV / V
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Since the process is at constant pressure, we can also write:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Q = CpΔT
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where Cp is the specific heat capacity at constant pressure.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Substituting the expressions for Q and W into the equation ΔU = Q - W, we have:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  ΔU = CpΔT - nRTΔV / V
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Since ΔU = CvΔT, where Cv is the specific heat capacity at constant volume, we can rewrite the equation as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  CvΔT = CpΔT - nRTΔV / V
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Dividing both sides of the equation by nΔT, we get:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Cv = Cp - RΔV / V
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Finally, using the ideal gas equation PV = nRT, we can express the change in volume as ΔV = V - Vo, where Vo is the initial volume of the gas. Substituting this expression into the equation, we obtain:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Cv = Cp - R &#40;V - Vo&#41; / V
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Simplifying further, we have:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Cv = Cp - R + RVo / V
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Mayer&lsquo;s formula is derived as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  Cp - Cv = R
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  This derivation shows the relationship between the specific heat capacities at constant pressure and constant volume for an ideal gas, which is known as Mayer&lsquo;s formula.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Isothermal Process for an Ideal Gas
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  In an isothermal process, the temperature of an ideal gas remains constant throughout the process. This means that the gas is in thermal equilibrium with its surroundings, and any heat added or removed from the gas is balanced by an equal amount of work done by or on the gas.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  During an isothermal expansion or compression of an ideal gas, the gas follows the ideal gas law:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  PV = nRT
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where P is the pressure, V is the volume, n is the number of moles of the gas, R is the specific gas constant, and T is the temperature.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  For an isothermal process, the equation can be rewritten as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  P1V1 = P2V2
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where P1 and V1 are the initial pressure and volume, and P2 and V2 are the final pressure and volume.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The work done  &#40;W&#41; during an isothermal process can be calculated using the equation:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  W = nRTln &#40;V2/V1&#41;
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  This equation indicates that work is done by or on the gas due to the change in volume, and the magnitude of the work depends on the logarithmic ratio of the initial and final volumes.
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  <span className="text-2xl pr-3 font-semibold mb-2">
                      Adiabatic Process for an Ideal Gas
                  </span>
              </p>
              <br />
              <p className="text-sm lg:text-lg mb-4">
                  In an adiabatic process, no heat is exchanged between the gas and its surroundings. This means that the change in internal energy of the gas is solely due to work done on or by the gas.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  For an adiabatic process, the ideal gas law can be expressed as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  PV^γ = constant
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where γ is the ratio of specific heats  &#40;Cp/Cv&#41; for the gas.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  During an adiabatic expansion or compression of an ideal gas, the equation can be rewritten as:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  P1V1^γ = P2V2^γ
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  where P1 and V1 are the initial pressure and volume, and P2 and V2 are the final pressure and volume.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  The work done  &#40;W&#41; during an adiabatic process can be calculated using the equation:
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  W =  &#40;P1V1 - P2V2&#41; /  &#40;γ - 1&#41;
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  This equation shows that work is done by or on the gas due to the change in pressure and volume, and the magnitude of the work depends on the difference between the initial and final pressures and volumes, as well as the specific heat ratio γ.
              </p>
              <p className="text-sm lg:text-lg mb-4">
                  An adiabatic process is characterized by a steeper pressure-volume curve compared to an isothermal process, indicating a more rapid change in pressure and volume.
              </p>
          </section>
      </Slate>
  )
}

export default Chapter4
