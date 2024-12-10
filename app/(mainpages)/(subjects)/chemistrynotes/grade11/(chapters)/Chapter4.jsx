import React from 'react';
import ChapterHeading from '@/components/subjects/ChapterHeading';
import Slate from '@/components/slate/Slate';
import Image from "next/image";
const Chapter4 = () => {
    return (
        <Slate>
            <section
                className='py-16'
                id='chapter4'
            >

                <ChapterHeading title={`
      Chapter 4: Classification of Elements and Periodic Table`}
                /><h2 className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
                    Proust&lsquo;s Classification:
                </h2><p className="sm:text-sm lg:text-lg text-sm mb-4">
                    Joseph Louis Proust contributed to the development of chemical classification with his Law of Definite        Proportions. This law states that chemical compounds always contain the same elements in the same fixed        proportions by mass. In other words, the ratio of elements in a compound is constant regardless of the amount of        the compound present.
                </p>

                <h2 className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
                    Dobereiner&lsquo;s Classification:
                </h2>

                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    Johann Wolfgang Döbereiner proposed the concept of triads, where he grouped elements into sets of three based        on their similar chemical properties. He observed that the atomic weight of the middle element in a triad was        approximately the average of the other two elements. For example, the triad of lithium, sodium, and potassium        exhibited similar chemical behavior, and the atomic weight of sodium was the average of lithium and potassium.
                </p>

                <h2 className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
                    Newlands&lsquo; Classification:
                </h2>

                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    John Newlands arranged the known elements in order of increasing atomic weight and noticed that properties        repeated every eighth element, similar to the musical octave. This periodicity led to the Law of Octaves, which        stated that every eighth element had similar chemical properties. Newlands&lsquo; classification was significant as it        was the first attempt to organize elements based on periodicity.
                </p>

                <h2 className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
                    Mendeleev&lsquo;s Classification:
                </h2>

                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    Dmitri Mendeleev is widely credited for developing the modern periodic table. He arranged the elements in order        of increasing atomic weight and observed that elements with similar properties occurred at regular intervals.        Mendeleev left gaps in his periodic table for undiscovered elements and accurately predicted their properties.        He also emphasized the periodicity of elements and proposed the concept of periodic law, stating that the        properties of elements are a periodic function of their atomic weights.
                </p>

                <h2 className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
                    Modern Periodic Law:
                </h2>

                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    The Modern Periodic Law states that the physical and chemical properties of elements are periodic functions of        their atomic numbers. This means that when elements are arranged in order of increasing atomic number, their        properties repeat in a regular pattern. The modern periodic law builds upon Mendeleev&lsquo;s periodic law and takes        into account the concept of atomic numbers rather than atomic weights.
                </p>
                <br />

                <h2 className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
                    Modern Periodic Table:
                </h2>

                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    The modern periodic table is a tabular arrangement of elements based on their atomic numbers, electronic        configurations, and chemical properties. It is divided into periods (horizontal rows) and groups (vertical        columns). Each element is represented by its atomic symbol, atomic number, and atomic mass. The elements in the        periodic table are arranged in such a way that elements with similar properties are placed in the same group.
                </p>
                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    The modern periodic table consists of blocks, including the s-block, p-block, d-block, and f-block, based on        the electron configuration of elements. The table provides valuable information about the properties and        characteristics of elements, including their reactivity, atomic size, ionization energy, and electronegativity.
                </p>
                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    The modern periodic table has been expanded to include the discovery of new elements beyond atomic number 118.        It has undergone revisions and refinements over time to accommodate the understanding of the properties and        behaviors of elements.
                </p>
                <br />
                <table className='bg-zinc-900 text-white border-[2px] border-neutral-500 w-full px-2 my-5'>
                    <tbody className="border border-neutral-400">
                        <tr className="border border-neutral-300 text-center">
                            <th colSpan='18'>
                                Periodic Table
                            </th>
                        </tr>
                        <tr className="border border-neutral-300 text-center">
                            <td

                            >
                                H
                                <br />
                                1
                                <br />
                                1.0079
                            </td>
                            <td

                            >
                                He
                                <br />
                                2
                                <br />
                                4.0026
                            </td>
                            <td

                            >
                                Li
                                <br />
                                3
                                <br />
                                6.941
                            </td>
                            <td

                            >
                                Be
                                <br />
                                4
                                <br />
                                9.0122
                            </td>
                            <td

                            >
                                B
                                <br />
                                5
                                <br />
                                10.81
                            </td>
                            <td

                            >
                                C
                                <br />
                                6
                                <br />
                                12.011
                            </td>
                            <td

                            >
                                N
                                <br />
                                7
                                <br />
                                14.007
                            </td>
                            <td

                            >
                                O
                                <br />
                                8
                                <br />
                                15.999
                            </td>
                            <td

                            >
                                F
                                <br />
                                9
                                <br />
                                18.998
                            </td>
                            <td

                            >
                                Ne
                                <br />
                                10
                                <br />
                                20.18
                            </td>
                            <td

                            >
                                Na
                                <br />
                                11
                                <br />
                                22.99
                            </td>
                            <td

                            >
                                Mg
                                <br />
                                12
                                <br />
                                24.305
                            </td>
                            <td

                            >
                                Al
                                <br />
                                13
                                <br />
                                26.982
                            </td>
                            <td

                            >
                                Si
                                <br />
                                14
                                <br />
                                28.085
                            </td>
                            <td

                            >
                                P
                                <br />
                                15
                                <br />
                                30.974
                            </td>
                            <td

                            >
                                S
                                <br />
                                16
                                <br />
                                32.06
                            </td>
                            <td

                            >
                                Cl
                                <br />
                                17
                                <br />
                                35.45
                            </td>
                            <td

                            >
                                Ar
                                <br />
                                18
                                <br />
                                39.948
                            </td>
                        </tr>
                        <tr className="border border-neutral-300 text-center">
                            <td

                            >
                                K
                                <br />
                                19
                                <br />
                                39.098
                            </td>
                            <td

                            >
                                Ca
                                <br />
                                20
                                <br />
                                40.078
                            </td>
                            <td

                            >
                                Sc
                                <br />
                                21
                                <br />
                                44.956
                            </td>
                            <td

                            >
                                Ti
                                <br />
                                22
                                <br />
                                47.867
                            </td>
                            <td

                            >
                                V
                                <br />
                                23
                                <br />
                                50.942
                            </td>
                            <td

                            >
                                Cr
                                <br />
                                24
                                <br />
                                51.996
                            </td>
                            <td

                            >
                                Mn
                                <br />
                                25
                                <br />
                                54.938
                            </td>
                            <td

                            >
                                Fe
                                <br />
                                26
                                <br />
                                55.845
                            </td>
                            <td

                            >
                                Co
                                <br />
                                27
                                <br />
                                58.933
                            </td>
                            <td

                            >
                                Ni
                                <br />
                                28
                                <br />
                                58.693
                            </td>
                            <td

                            >
                                Cu
                                <br />
                                29
                                <br />
                                63.546
                            </td>
                            <td

                            >
                                Zn
                                <br />
                                30
                                <br />
                                65.38
                            </td>
                            <td

                            >
                                Ga
                                <br />
                                31
                                <br />
                                69.723
                            </td>
                            <td

                            >
                                Ge
                                <br />
                                32
                                <br />
                                72.63
                            </td>
                            <td

                            >
                                As
                                <br />
                                33
                                <br />
                                74.922
                            </td>
                            <td

                            >
                                Se
                                <br />
                                34
                                <br />
                                78.96
                            </td>
                            <td

                            >
                                Br
                                <br />
                                35
                                <br />
                                79.904
                            </td>
                            <td

                            >
                                Kr
                                <br />
                                36
                                <br />
                                83.798
                            </td>
                        </tr>
                        <tr className="border border-neutral-300 text-center">
                            <td

                            >
                                Rb
                                <br />
                                37
                                <br />
                                85.468
                            </td>
                            <td

                            >
                                Sr
                                <br />
                                38
                                <br />
                                87.62
                            </td>
                            <td

                            >
                                Y
                                <br />
                                39
                                <br />
                                88.906
                            </td>
                            <td

                            >
                                Zr
                                <br />
                                40
                                <br />
                                91.224
                            </td>
                            <td

                            >
                                Nb
                                <br />
                                41
                                <br />
                                92.906
                            </td>
                            <td

                            >
                                Mo
                                <br />
                                42
                                <br />
                                95.95
                            </td>
                            <td

                            >
                                Tc
                                <br />
                                43
                                <br />
                                (98)
                            </td>
                            <td

                            >
                                Ru
                                <br />
                                44
                                <br />
                                101.07
                            </td>
                            <td

                            >
                                Rh
                                <br />
                                45
                                <br />
                                102.91
                            </td>
                            <td

                            >
                                Pd
                                <br />
                                46
                                <br />
                                106.42
                            </td>
                            <td

                            >
                                Ag
                                <br />
                                47
                                <br />
                                107.87
                            </td>
                            <td

                            >
                                Cd
                                <br />
                                48
                                <br />
                                112.41
                            </td>
                            <td

                            >
                                In
                                <br />
                                49
                                <br />
                                114.82
                            </td>
                            <td

                            >
                                Sn
                                <br />
                                50
                                <br />
                                118.71
                            </td>
                            <td

                            >
                                Sb
                                <br />
                                51
                                <br />
                                121.76
                            </td>
                            <td

                            >
                                Te
                                <br />
                                52
                                <br />
                                127.6
                            </td>
                            <td

                            >
                                I
                                <br />
                                53
                                <br />
                                126.9
                            </td>
                            <td

                            >
                                Xe
                                <br />
                                54
                                <br />
                                131.29
                            </td>
                        </tr>
                        <tr className="border border-neutral-300 text-center">
                            <td

                            >
                                Cs
                                <br />
                                55
                                <br />
                                132.91
                            </td>
                            <td

                            >
                                Ba
                                <br />
                                56
                                <br />
                                137.33
                            </td>
                            <td

                            >
                                La-Lu
                            </td>
                            <td

                            >
                                Hf
                                <br />
                                72
                                <br />
                                178.49
                            </td>
                            <td

                            >
                                Ta
                                <br />
                                73
                                <br />
                                180.95
                            </td>
                            <td

                            >
                                W
                                <br />
                                74
                                <br />
                                183.84
                            </td>
                            <td

                            >
                                Re
                                <br />
                                75
                                <br />
                                186.21
                            </td>
                            <td

                            >
                                Os
                                <br />
                                76
                                <br />
                                190.23
                            </td>
                            <td

                            >
                                Ir
                                <br />
                                77
                                <br />
                                192.22
                            </td>
                            <td

                            >
                                Pt
                                <br />
                                78
                                <br />
                                195.08
                            </td>
                            <td

                            >
                                Au
                                <br />
                                79
                                <br />
                                196.97
                            </td>
                            <td

                            >
                                Hg
                                <br />
                                80
                                <br />
                                200.59
                            </td>
                            <td

                            >
                                Tl
                                <br />
                                81
                                <br />
                                204.38
                            </td>
                            <td

                            >
                                Pb
                                <br />
                                82
                                <br />
                                207.2
                            </td>
                            <td

                            >
                                Bi
                                <br />
                                83
                                <br />
                                208.98
                            </td>
                            <td

                            >
                                Po
                                <br />
                                84
                                <br />
                                (209)
                            </td>
                            <td

                            >
                                At
                                <br />
                                85
                                <br />
                                (210)
                            </td>
                            <td

                            >
                                Rn
                                <br />
                                86
                                <br />
                                (222)
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* <title>
                        Modern Periodic Tables
                    </title> */}
                ...
                <table>
                    <thead>
                        <tr className="border border-neutral-300 text-center">
                            <th className="border">
                                Period
                            </th>
                            <th className="border">
                                Group
                            </th>
                            <th className="border">
                                Element
                            </th>
                            <th className="border">
                                Symbol
                            </th>
                            <th className="border">
                                Atomic Number
                            </th>
                            <th className="border">
                                Atomic Mass
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border border-neutral-400">
                        <tr className="border border-neutral-300 text-center">
                            <td className="border-neutral-300 border">
                                1
                            </td>
                            <td className="border-neutral-300 border">
                                1
                            </td>
                            <td className="border-neutral-300 border">
                                Hydrogen
                            </td>
                            <td className="border-neutral-300 border">
                                H
                            </td>
                            <td className="border-neutral-300 border">
                                1
                            </td>
                            <td className="border-neutral-300 border">
                                1.008
                            </td>
                        </tr>
                        <tr className="border border-neutral-300 text-center">
                            <td className="border-neutral-300 border">
                                1
                            </td>
                            <td className="border-neutral-300 border">
                                2
                            </td>
                            <td className="border-neutral-300 border">
                                Helium
                            </td>
                            <td className="border-neutral-300 border">
                                He
                            </td>
                            <td className="border-neutral-300 border">
                                2
                            </td>
                            <td className="border-neutral-300 border">
                                4.0026
                            </td>
                        </tr>
                        <tr className="border border-neutral-300 text-center">
                            <td className="border-neutral-300 border">
                                2
                            </td>
                            <td className="border-neutral-300 border">
                                1
                            </td>
                            <td className="border-neutral-300 border">
                                Lithium
                            </td>
                            <td className="border-neutral-300 border">
                                Li
                            </td>
                            <td className="border-neutral-300 border">
                                3
                            </td>
                            <td className="border-neutral-300 border">
                                6.941
                            </td>
                        </tr>
                        <tr className="border border-neutral-300 text-center">
                            <td className="border-neutral-300 border">
                                2
                            </td>
                            <td className="border-neutral-300 border">
                                2
                            </td>
                            <td className="border-neutral-300 border">
                                Beryllium
                            </td>
                            <td className="border-neutral-300 border">
                                Be
                            </td>
                            <td className="border-neutral-300 border">
                                4
                            </td>
                            <td className="border-neutral-300 border">
                                9.0122
                            </td>
                        </tr>
                        <tr className="border border-neutral-300 text-center">
                            <td className="border-neutral-300 border">
                                2
                            </td>
                            <td className="border-neutral-300 border">
                                3
                            </td>
                            <td className="border-neutral-300 border">
                                Boron
                            </td>
                            <td className="border-neutral-300 border">
                                B
                            </td>
                            <td className="border-neutral-300 border">
                                5
                            </td>
                            <td className="border-neutral-300 border">
                                10.811
                            </td>
                        </tr>
                        <tr className="border border-neutral-300 text-center">
                            <td className="border-neutral-300 border">
                                2
                            </td>
                            <td className="border-neutral-300 border">
                                4
                            </td>
                            <td className="border-neutral-300 border">
                                Carbon
                            </td>
                            <td className="border-neutral-300 border">
                                C
                            </td>
                            <td className="border-neutral-300 border">
                                6
                            </td>
                            <td className="border-neutral-300 border">
                                12.011
                            </td>
                        </tr>
                        <tr className="border border-neutral-300 text-center">
                            <td className="border-neutral-300 border">
                                2
                            </td>
                            <td className="border-neutral-300 border">
                                5
                            </td>
                            <td className="border-neutral-300 border">
                                Nitrogen
                            </td>
                            <td className="border-neutral-300 border">
                                N
                            </td>
                            <td className="border-neutral-300 border">
                                7
                            </td>
                            <td className="border-neutral-300 border">
                                14.007
                            </td>
                        </tr>
                        <tr className="border border-neutral-300 text-center">
                            <td className="border-neutral-300 border">
                                2
                            </td>
                            <td className="border-neutral-300 border">
                                6
                            </td>
                            <td className="border-neutral-300 border">
                                Oxygen
                            </td>
                            <td className="border-neutral-300 border">
                                O
                            </td>
                            <td className="border-neutral-300 border">
                                8
                            </td>
                            <td className="border-neutral-300 border">
                                15.999
                            </td>
                        </tr>
                        <tr className="border border-neutral-300 text-center">
                            <td className="border-neutral-300 border">
                                2
                            </td>
                            <td className="border-neutral-300 border">
                                7
                            </td>
                            <td className="border-neutral-300 border">
                                Fluorine
                            </td>
                            <td className="border-neutral-300 border">
                                F
                            </td>
                            <td className="border-neutral-300 border">
                                9
                            </td>
                            <td className="border-neutral-300 border">
                                18.998
                            </td>
                        </tr>
                        <tr className="border border-neutral-300 text-center">
                            <td className="border-neutral-300 border">
                                2
                            </td>
                            <td className="border-neutral-300 border">
                                8
                            </td>
                            <td className="border-neutral-300 border">
                                Neon
                            </td>
                            <td className="border-neutral-300 border">
                                Ne
                            </td>
                            <td className="border-neutral-300 border">
                                10
                            </td>
                            <td className="border-neutral-300 border">
                                20.180
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
                    Ionization Energy (Ionization Potential):
                </h2>

                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    Ionization energy refers to the energy required to remove an electron from a neutral atom or ion in its gaseous        state. It is a measure of the atom&lsquo;s or ion&lsquo;s ability to hold onto its electrons and resist losing them.
                </p>
                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    Key Points:
                </p>
                <ul>
                    <li>
                        Ionization energy is typically expressed in kilojoules per mole (kJ/mol) or electron volts (eV).
                    </li>
                    <li>
                        The first ionization energy refers to the energy required to remove the first electron from a neutral atom,  forming a positive ion.
                    </li>
                    <li>
                        Subsequent ionization energies refer to the energy required to remove subsequent electrons from the positive  ion, resulting in the formation of higher charged ions.
                    </li>
                    <li>
                        Ionization energy generally increases from left to right across a period in the periodic table due to  increasing nuclear charge and decreasing atomic radius.
                    </li>
                    <li>
                        Ionization energy tends to decrease down a group in the periodic table due to increasing atomic size and  shielding effects.
                    </li>
                    <li>
                        The noble gases have the highest ionization energies since they have complete valence electron  configurations and are highly stable.
                    </li>
                    <li>
                        Transition metals have relatively low ionization energies compared to main group elements due to their  partially filled d and f orbitals.
                    </li>
                </ul>
                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    It&lsquo;s important to note that ionization energy values can vary depending on the specific element or ion and the        experimental conditions.
                </p>
                <br />

                <h2 className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
                    Atomic and Ionic Radii:
                </h2>

                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    Atomic and ionic radii refer to the size of atoms and ions, respectively. The radii are typically measured as        the distance from the nucleus to the outermost electron shell or the outermost electron in an ion.
                </p>
                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    Key Points:
                </p>
                <ul>
                    <li>
                        Atomic radius is the size of an atom, usually defined as half the distance between the nuclei of two bonded  atoms of the same element.
                    </li>
                    <li>
                        Ionic radius is the size of an ion, which can be larger or smaller than the corresponding atom depending on  whether it is a cation or an anion.
                    </li>
                    <li>
                        Atomic and ionic radii generally decrease from left to right across a period in the periodic table due to  increasing nuclear charge and stronger attraction to the electrons.
                    </li>
                    <li>
                        Atomic and ionic radii tend to increase down a group in the periodic table due to the addition of new energy  levels and increasing electron shielding.
                    </li>
                    <li>
                        Cations (positively charged ions) are smaller than their parent atoms due to the loss of one or more  electron shells.
                    </li>
                    <li>
                        Anions (negatively charged ions) are larger than their parent atoms due to the addition of extra electrons  and increased electron-electron repulsion.
                    </li>
                    <li>
                        The noble gases have the largest atomic and ionic radii within a period as they have complete valence  electron configurations and are highly stable.
                    </li>
                </ul>
                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    It&lsquo;s important to note that atomic and ionic radii can vary depending on the specific element, its oxidation        state, and the coordination number in ionic compounds.
                </p>
                <br />

                <h2 className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
                    Electronegativity:
                </h2>

                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    Electronegativity is a measure of an atom&lsquo;s tendency to attract electrons towards itself when participating in        a chemical bond. It helps determine the polarity of bonds and molecules. Electronegativity is typically        represented on the Pauling scale, which assigns arbitrary values ranging from 0.7 to 4.0 to elements.
                </p>
                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    Key Points:
                </p>
                <ul>
                    <li>
                        Electronegativity increases from left to right across a period in the periodic table due to increasing  nuclear charge and decreasing atomic radius.
                    </li>
                    <li>
                        Electronegativity generally decreases down a group in the periodic table due to increasing atomic size and  shielding effects.
                    </li>
                    <li>
                        Fluorine (F) is the most electronegative element with a value of 3.98, while cesium (Cs) is the least  electronegative with a value of 0.79.
                    </li>
                    <li>
                        The difference in electronegativity between atoms in a bond determines the bond type: ionic or covalent.
                    </li>
                    <li>
                        Electronegativity influences the polarity of molecules and affects their physical and chemical properties.
                    </li>
                </ul>
                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    It&lsquo;s important to note that electronegativity values are approximate and can vary slightly depending on the        scale used.
                </p>
                <br />

                <h2 className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
                    Electron Affinity:
                </h2>

                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    Electron affinity refers to the energy change that occurs when an atom or ion gains an electron to form a        negative ion. It is a measure of the atom&lsquo;s or ion&lsquo;s tendency to attract and bind an additional electron.
                </p>
                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    Key Points:
                </p>
                <ul>
                    <li>
                        Electron affinity is typically expressed in kilojoules per mole (kJ/mol) or electron volts (eV).
                    </li>
                    <li>
                        A positive electron affinity indicates that energy is released when an atom gains an electron, making the  process favorable.
                    </li>
                    <li>
                        A negative electron affinity indicates that energy must be supplied for an atom to accept an electron,  making the process unfavorable.
                    </li>
                    <li>
                        The halogens, such as chlorine and fluorine, have high electron affinities as they strongly attract  additional electrons to complete their valence electron configuration.
                    </li>
                    <li>
                        Noble gases have low or zero electron affinities since their electron configurations are already stable.
                    </li>
                    <li>
                        Electron affinity values generally increase from left to right across a period in the periodic table.
                    </li>
                    <li>
                        Electron affinity tends to decrease down a group in the periodic table due to increasing atomic size and  shielding effects.
                    </li>
                </ul>
                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    It&lsquo;s important to note that electron affinity values can vary depending on the specific element or ion and the        experimental conditions.
                </p>
                <br />

                <h2 className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
                    Metallic Character and its Periodic Trend:
                </h2>

                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    Metallic character refers to the extent to which an element exhibits the properties characteristic of metals.        These properties include high electrical and thermal conductivity, luster, malleability, ductility, and the        tendency to form positive ions (cations) in chemical reactions.
                </p>
                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    Key Points:
                </p>
                <ul>
                    <li>
                        Metallic character generally increases from right to left across a period in the periodic table.
                    </li>
                    <li>
                        Metallic character generally increases down a group in the periodic table.
                    </li>
                    <li>
                        Elements on the left side of the periodic table, especially the alkali metals and alkaline earth metals,  exhibit strong metallic character.
                    </li>
                    <li>
                        Transition metals also exhibit metallic character, although it may vary depending on the specific element  and its position in the transition series.
                    </li>
                    <li>
                        Nonmetals, particularly those on the right side of the periodic table, exhibit nonmetallic character due to  their higher electronegativity and tendency to gain electrons in chemical reactions.
                    </li>
                    <li>
                        Metalloids, which are located along the staircase line between metals and nonmetals, exhibit properties  intermediate between metals and nonmetals.
                    </li>
                    <li>
                        Metallic character is associated with the ability of elements to lose electrons easily and form positive  ions, as well as their conductivity and malleability.
                    </li>
                    <li>
                        The periodic trend in metallic character is primarily influenced by the effective nuclear charge, atomic  size, and the ease of electron release or delocalization.
                    </li>
                </ul>
                <br />
                <p className="sm:text-sm lg:text-lg text-sm mb-4">
                    It&lsquo;s important to note that metallic character is a relative concept and can vary depending on the specific        element and the context in which it is considered.
                </p>
                <br />
            </section>
        </Slate>
    )
}

export default Chapter4
