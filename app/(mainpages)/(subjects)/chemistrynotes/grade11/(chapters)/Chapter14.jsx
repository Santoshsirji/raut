import React from 'react';
import ChapterHeading from '@/components/subjects/ChapterHeading';
import Slate from '@/components/slate/Slate';
import Image from "next/image";
const Chapter14 = () => {
  return (
    <Slate>
      <section
        className='py-16'
        id='chapter14'
      >

        <ChapterHeading title={`
      Chapter 14: Hydrocarbons`}
        />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Alkanes:
          </span >
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkanes are a class of organic compounds that consist exclusively of carbon and hydrogen atoms and are        characterized by the presence of single covalent bonds between carbon atoms. They are also known as saturated        hydrocarbons because they contain the maximum number of hydrogen atoms possible, with each carbon atom bonded to        four other atoms.
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Here are some key characteristics and properties of alkanes:
        </p>
        <ul>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              General Formula:
            </span>
            The general formula for alkanes is C
            <sub>
              n
            </sub>
            H
            <sub>
              2n+2
            </sub>
            , where  &quot;n&quot; represents the number of carbon atoms in the molecule.
          </li>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Homologous Series:
            </span>
            Alkanes belong to a homologous series, which means that they have  similar chemical properties and exhibit a gradual change in physical properties as the number of carbon atoms  increases.
          </li>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Saturated Hydrocarbons:
            </span>
            Alkanes are saturated hydrocarbons since they contain only single  covalent bonds between carbon atoms and are therefore saturated with hydrogen atoms.
          </li>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Physical Properties:
            </span>
            Alkanes are generally colorless, odorless, and nonpolar compounds. As  the number of carbon atoms increases, the boiling point and melting point of alkanes also increase due to the  increase in intermolecular forces.
          </li>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Combustion:
            </span>
            Alkanes readily undergo combustion reactions, combining with oxygen to produce  carbon dioxide and water, releasing energy in the form of heat and light. The combustion of alkanes is an  important source of energy, such as in the burning of fossil fuels.
          </li>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Chemical Reactivity:
            </span>
            Alkanes are relatively unreactive compared to other classes of organic  compounds. They undergo limited reactions under normal conditions, such as halogenation, where they react with  halogens to form halogenated derivatives.
          </li>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Nomenclature:
            </span>
            Alkanes are named using the IUPAC (International Union of Pure and Applied  Chemistry) system, which involves identifying the longest carbon chain and adding the suffix &quot;-ane&quot; to  indicate that it is an alkane.
          </li>
        </ul>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkanes serve as important starting materials and solvents in various industrial processes and are also found        abundantly in petroleum and natural gas. They provide a foundation for the study of organic chemistry and serve        as building blocks for the synthesis of more complex organic compounds.
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Hydrogenation of Alkenes:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes can be hydrogenated to form alkanes by reacting them with hydrogen gas in the presence of a suitable        catalyst, such as palladium (Pd), platinum (Pt), or nickel (Ni). The reaction is commonly carried out under high        pressure and at elevated temperatures.
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Propene + Hydrogen <span className='text-xl text-bg-600'>→</span>Propane
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          C3H6 + H2 <span className='text-xl text-bg-600'>→</span>C3H8
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Reduction of Alkyl Halides:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkyl halides, such as alkyl chlorides or alkyl bromides, can be reduced to alkanes by using reducing agents        like zinc (Zn) and hydrochloric acid (HCl) or lithium aluminum hydride (LiAlH4).
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Ethyl chloride + Zinc/HCl <span className='text-xl text-bg-600'>→</span>Ethane
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          C2H5Cl + Zn/HCl <span className='text-xl text-bg-600'>→</span>C2H6
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Wurtz Reaction:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          The Wurtz reaction is a coupling reaction between alkyl halides and alkyl halides in the presence of sodium        (Na) or potassium (K) metal. It leads to the formation of higher alkanes with an even number of carbon atoms.
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          2-Methylpropane + Ethyl chloride + Sodium <span className='text-xl text-bg-600'>→</span>Pentane
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          C4H10 + C2H5Cl + 2Na <span className='text-xl text-bg-600'>→</span>C5H12
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Decarboxylation of Carboxylic Acids:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Carboxylic acids can undergo decarboxylation, where the carboxyl group (-COOH) is removed as carbon dioxide        (CO2), resulting in the formation of an alkane. This reaction is usually achieved by heating the carboxylic acid        with soda lime (a mixture of sodium hydroxide and calcium oxide).
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Butanoic Acid (Butyric Acid) <span className='text-xl text-bg-600'>→</span>Butane
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          C4H8O2 <span className='text-xl text-bg-600'>→</span>C4H10 + CO2
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Catalytic Hydrogenation of Unsaturated Hydrocarbons:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Unsaturated hydrocarbons, such as alkenes or alkynes, can be hydrogenated to form alkanes using a suitable        catalyst, such as palladium (Pd), platinum (Pt), or nickel (Ni).
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Ethene + Hydrogen <span className='text-xl text-bg-600'>→</span>Ethane
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          C2H4 + H2 <span className='text-xl text-bg-600'>→</span>C2H6
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Halogenation of Alkanes:
          </span>
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkanes can undergo halogenation reactions, where they react with halogens (chlorine, bromine, or iodine) in        the presence of heat or light to form alkyl halides.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Example:
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Methane + Chlorine <span className='text-xl text-bg-600'>→</span>Chloromethane + Hydrogen Chloride
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          CH4 + Cl2 <span className='text-xl text-bg-600'>→</span>CH3Cl + HCl
        </p>
        <br />
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Nitration of Alkanes:
          </span>
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkanes are generally unreactive towards nitration reactions, which involve the addition of a nitro group        (-NO2). Alkanes do not readily undergo direct nitration under normal conditions.
        </p>
        <br />
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Sulfonation of Alkanes:
          </span>
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkanes do not undergo direct sulfonation reactions under normal conditions. Sulfonation usually involves the        introduction of a sulfonic acid group (-SO3H) into an organic compound.
        </p>
        <br />
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Oxidation of Alkanes:
          </span>
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkanes are relatively unreactive towards oxidation reactions, as they are highly saturated hydrocarbons. They        do not readily undergo direct oxidation under normal conditions.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Example:
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Methane + Oxygen <span className='text-xl text-bg-600'>→</span>Carbon Dioxide + Water
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          CH4 + 2O2 <span className='text-xl text-bg-600'>→</span>CO2 + 2H2O
        </p>
        <br />
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Applications of Alkanes:
          </span>
        </p>
        <br />
        <ol>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Fuel:
            </span>
            Alkanes, particularly longer-chain alkanes such as gasoline, diesel, and kerosene,  are used as fuels for vehicles, heating, and power generation. They provide energy through combustion  reactions.
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Lubricants:
            </span>
            Alkanes, especially higher molecular weight alkanes, are used as lubricants in  machinery and engines to reduce friction and wear. They help in smooth movement and protection of mechanical  parts.
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Solvents:
            </span>
            Certain alkanes, such as hexane and heptane, are used as solvents in various  industrial processes, including extraction, cleaning, and degreasing. They dissolve nonpolar compounds  effectively.
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Chemical Feedstock:
            </span>
            Alkanes serve as important feedstock in the production of various  chemicals. They are used as starting materials for the synthesis of polymers, plastics, detergents, synthetic  fibers, and many other organic compounds.
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Refrigerants:
            </span>
            Some halogenated alkanes, known as chlorofluorocarbons (CFCs) and  hydrochlorofluorocarbons (HCFCs), were historically used as refrigerants and propellants in aerosol products.  However, due to their harmful impact on the ozone layer, they have been phased out and replaced with more  environmentally friendly alternatives.
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Wax and Candle Making:
            </span>
            Alkanes with higher molecular weights, such as paraffin wax, are  used in the production of candles, coatings, and wax-based products. They provide a solid and stable material  that can be easily melted and molded.
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Cosmetics and Personal Care Products:
            </span>
            Some alkanes, like mineral oil and petroleum jelly,  are used in the formulation of cosmetics, skincare products, and ointments. They provide emollient and  moisturizing properties.
          </li>
          <br />
        </ol>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Alkenes:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes are unsaturated hydrocarbons that contain at least one carbon-carbon double bond. They are        characterized by their reactivity and ability to undergo addition reactions. Alkenes play a crucial role in        organic chemistry as versatile building blocks for the synthesis of various organic compounds.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            General Methods of Preparation of Alkenes:
          </span>
        </p>
        <ol>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Dehydration of Alcohols:
            </span>
            <h3 />
            <p className="sm:text-sm lg:text-lg text-sm mb-4">
              Alkenes can be prepared by dehydrating alcohols, which involves the removal of water molecule from the alcohol molecule. This can be achieved by heating the alcohol in the presence of a strong acid catalyst, such as concentrated sulfuric acid (H
              <sub>
                2
              </sub>
              SO
              <sub>
                4
              </sub>
              ) or phosphoric acid (H
              <sub>
                3
              </sub>
              PO
              <sub>
                4
              </sub>
              ). The reaction is an example of an elimination reaction, where water is eliminated from the alcohol, leading to the formation of an alkene.
            </p>
          </li>
          <br />
          <p className="sm:text-sm lg:text-lg text-sm mb-4">
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Example:
            </span>
          </p>
          <p className="sm:text-sm lg:text-lg text-sm mb-4">
            CH
            <sub>
              3
            </sub>
            CH
            <sub>
              2
            </sub>
            OH <span className='text-xl text-bg-600'>→</span>H
            <sub>
              2
            </sub>
            SO
            <sub>
              4
            </sub>
            (heat) <span className='text-xl text-bg-600'>→</span>CH
            <sub>
              2
            </sub>
            =CH
            <sub>
              2
            </sub>
            +  H
            <sub>
              2
            </sub>
            O
          </p>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Dehalogenation of Alkyl Halides:
            </span>
            <h3 />
            <p className="sm:text-sm lg:text-lg text-sm mb-4">
              Alkenes can be prepared by the dehalogenation of alkyl halides. This process involves the removal of a halogen atom (such as chlorine or bromine) from an alkyl halide, typically through the use of a reducing agent, such as zinc (Zn) or sodium (Na). The reaction is an example of an elimination reaction, similar to the dehydration of alcohols.
            </p>
          </li>
          <br />
          <p className="sm:text-sm lg:text-lg text-sm mb-4">
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Example:
            </span>
          </p>
          <p className="sm:text-sm lg:text-lg text-sm mb-4">
            CH
            <sub>
              3
            </sub>
            CH
            <sub>
              2
            </sub>
            Br + Zn <span className='text-xl text-bg-600'>→</span>CH
            <sub>
              2
            </sub>
            =CH
            <sub>
              2
            </sub>
            + ZnBr
            <sub>
              2
            </sub>
          </p>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Controlled Hydrogenation of Alkynes:
            </span>
            <h3 />
            <p className="sm:text-sm lg:text-lg text-sm mb-4">
              Alkenes can be prepared by the controlled hydrogenation of alkynes. Alkynes are first converted to alkene intermediates through the addition of hydrogen gas (H
              <sub>
                2
              </sub>
              ) in the presence of a metal catalyst, such as palladium (Pd) or platinum (Pt). The alkene intermediate can then be further hydrogenated to an alkane or isolated as the desired alkene product.
            </p>
          </li>
          <br />
          <p className="sm:text-sm lg:text-lg text-sm mb-4">
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Example:
            </span>
          </p>
          <p className="sm:text-sm lg:text-lg text-sm mb-4">
            CH≡CH + H
            <sub>
              2
            </sub>
            (Pd/C) <span className='text-xl text-bg-600'>→</span>CH
            <sub>
              2
            </sub>
            =CH
            <sub>
              2
            </sub>
          </p>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Dehalogenation of Vicinal Dihalides:
            </span>
            <h3 />
            <p className="sm:text-sm lg:text-lg text-sm mb-4">
              Alkenes can be prepared by the dehalogenation of vicinal dihalides, which are compounds with halogen atoms bonded to adjacent carbon atoms. This reaction, known as dehalogenation or dehydrohalogenation, can be achieved by treating the vicinal dihalide with a strong base, such as sodium hydroxide (NaOH) or potassium hydroxide (KOH). The base abstracts a hydrogen atom adjacent to the halogen atoms, resulting in the formation of an alkene.
            </p>
          </li>
          <br />
          <p className="sm:text-sm lg:text-lg text-sm mb-4">
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Example:
            </span>
          </p>
          <p className="sm:text-sm lg:text-lg text-sm mb-4">
            CH
            <sub>
              2
            </sub>
            Br-CH
            <sub>
              2
            </sub>
            Br + KOH <span className='text-xl text-bg-600'>→</span>CH
            <sub>
              2
            </sub>
            =CH
            <sub>
              2
            </sub>
            + KBr + H
            <sub>
              2
            </sub>
            O
          </p>
          <br />
        </ol>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Chemical Properties of Alkenes:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes exhibit various chemical properties due to the presence of the carbon-carbon double bond. One of the        notable characteristics of alkenes is their reactivity towards addition reactions, where atoms or groups are        added to the carbon-carbon double bond, resulting in the formation of new compounds.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Addition of Hydrogen Halides (Markovnikov&lsquo;s Rule):
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes undergo addition reactions with hydrogen halides, such as hydrogen chloride (HCl) or hydrogen bromide        (HBr). According to Markovnikov&lsquo;s rule, the hydrogen atom of the hydrogen halide adds to the carbon atom of the        double bond that already has more hydrogen atoms. This results in the formation of an alkyl halide.
        </p>
        <h3 />
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Example:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          CH
          <sub>
            2
          </sub>
          =CH
          <sub>
            2
          </sub>
          + HCl <span className='text-xl text-bg-600'>→</span>CH
          <sub>
            3
          </sub>
          CH
          <sub>
            2
          </sub>
          Cl
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Peroxide Effect:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes can react differently with hydrogen halides in the presence of peroxides, such as benzoyl peroxide        (C
          <sub>
            6
          </sub>
          H
          <sub>
            5
          </sub>
          C(O)OOC(O)C
          <sub>
            6
          </sub>
          H
          <sub>
            5
          </sub>
          ). In this case, the hydrogen atom adds to the        carbon atom of the double bond that already has fewer hydrogen atoms, leading to the formation of a different        alkyl halide.
        </p>
        <h3 />
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Example:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          CH
          <sub>
            3
          </sub>
          CH=CH
          <sub>
            2
          </sub>
          + HBr (peroxides) <span className='text-xl text-bg-600'>→</span>CH
          <sub>
            3
          </sub>
          CHBrCH
          <sub>
            3
          </sub>
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Addition of Water (Hydration):
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes can undergo hydration reactions, where water adds across the carbon-carbon double bond, resulting in        the formation of alcohols. This reaction typically occurs in the presence of a strong acid catalyst, such as        concentrated sulfuric acid (H
          <sub>
            2
          </sub>
          SO
          <sub>
            4
          </sub>
          ).
        </p>
        <h3 />
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Example:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          CH
          <sub>
            2
          </sub>
          =CH
          <sub>
            2
          </sub>
          + H
          <sub>
            2
          </sub>
          O (H
          <sub>
            2
          </sub>
          SO
          <sub>
            4
          </sub>
          ) <span className='text-xl text-bg-600'>→</span>CH
          <sub>
            3
          </sub>
          CH
          <sub>
            2
          </sub>
          OH
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Addition of Ozone (Ozonolysis):
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Ozonolysis is a reaction in which alkenes react with ozone (O
          <sub>
            3
          </sub>
          ) to form ozonides. These unstable        ozonides are then treated with a reducing agent, such as zinc (Zn) or dimethyl sulfide        (CH
          <sub>
            3
          </sub>
          )
          <sub>
            2
          </sub>
          S, to yield a mixture of aldehydes or ketones, depending on the alkene structure.
        </p>
        <h3 />
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Example:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          CH
          <sub>
            3
          </sub>
          CH=CH
          <sub>
            2
          </sub>
          + O
          <sub>
            3
          </sub>
          <span className='text-xl text-bg-600'>→</span>CH
          <sub>
            3
          </sub>
          COCH
          <sub>
            2
          </sub>
          CHO + CH
          <sub>
            3
          </sub>
          CHO
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Addition of Sulfuric Acid (Sulfonation):
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes can react with concentrated sulfuric acid (H
          <sub>
            2
          </sub>
          SO
          <sub>
            4
          </sub>
          ) to form alkyl hydrogen        sulfates. This reaction is called sulfonation and introduces a sulfonic acid group (-SO
          <sub>
            3
          </sub>
          H) to the        alkene molecule.
        </p>
        <h3 />
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Example:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          CH
          <sub>
            2
          </sub>
          =CH
          <sub>
            2
          </sub>
          + H
          <sub>
            2
          </sub>
          SO
          <sub>
            4
          </sub>
          <span className='text-xl text-bg-600'>→</span>CH
          <sub>
            3
          </sub>
          CH
          <sub>
            2
          </sub>
          OSO
          <sub>
            3
          </sub>
          H
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Applications of Alkenes:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes, with their unique chemical properties and reactivity, find various applications in different fields.        Some of the notable applications of alkenes are:
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            1. Polymer Production:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes are extensively used in the production of polymers, such as polyethylene and polypropylene. These        polymers have a wide range of applications in industries including packaging, textiles, automotive,        construction, and more. The ability of alkenes to undergo polymerization reactions enables the formation of        long-chain polymers with desirable properties.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            2. Solvent Production:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Certain alkenes, such as ethene (ethylene) and propene (propylene), are used as solvents in various industrial        processes. These alkenes serve as excellent solvents for dissolving and extracting substances in chemical        reactions, cleaning, and degreasing operations.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            3. Fuel and Energy:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes are crucial in the fuel and energy sector. Ethene and propene are used as feedstocks for the production        of gasoline, diesel, and other fuels through processes like cracking and reforming. Additionally, alkenes can be        converted into biofuels through bioconversion techniques, contributing to sustainable energy sources.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            4. Chemical Synthesis:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes serve as versatile building blocks in chemical synthesis. They undergo a wide range of reactions, such        as addition, oxidation, and reduction, allowing the synthesis of various organic compounds. Alkenes are utilized        in the synthesis of pharmaceuticals, agrochemicals, fragrances, dyes, and many other specialty chemicals.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            5. Manufacturing of Plastics and Fibers:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes play a vital role in the manufacturing of plastics and synthetic fibers. Polyethylene and        polypropylene, derived from alkenes, are widely used in the production of bottles, containers, pipes, films, and        fibers for textiles. These materials offer durability, flexibility, and resistance to chemicals.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            6. Adhesive and Sealant Production:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Some alkenes, like ethylene and propylene, are used in the production of adhesives and sealants. These        materials provide strong bonding and sealing properties and are utilized in industries such as construction,        automotive, and packaging.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            7. Agricultural Applications:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes find applications in agriculture as plant growth regulators and in the production of herbicides and        pesticides. Ethene is used to control fruit ripening and promote uniform flowering in plants, while certain        alkenes are incorporated into herbicides to control weed growth effectively.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            8. Research and Development:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkenes are of significant interest in research and development, particularly in the field of organic        chemistry. Their reactivity and ability to undergo various transformations make them valuable tools for studying        reaction mechanisms, designing new catalysts, and developing novel organic compounds.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          These are just a few examples of the applications of alkenes. Their versatility and importance extend across        numerous industries, contributing to advancements in materials, energy, pharmaceuticals, and many other areas.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Alkynes:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes are a class of unsaturated hydrocarbons that contain a carbon-carbon triple bond. They are        characterized by their reactivity and unique chemical properties. Alkynes play a crucial role in organic        synthesis and have various applications in different industries.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            General Methods of Preparation of Alkynes:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          There are several methods for the preparation of alkynes. Here are some commonly used methods:
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          1.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Direct Combination of Elements:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes can be prepared by the direct combination of carbon and hydrogen atoms. This method is commonly used in        the laboratory for the synthesis of simple alkynes. For example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          2C(s) + H
          <sub>
            2
          </sub>
          (g) <span className='text-xl text-bg-600'>→</span>HC≡CH(g) (Ethyne)
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          2.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Dehydrohalogenation of Vicinal Dihalides:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes can be synthesized by the dehydrohalogenation of vicinal dihalides (compounds with two halogen atoms on        adjacent carbon atoms) using a strong base. The elimination of two halogen atoms results in the formation of a        triple bond. For example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          CH
          <sub>
            3
          </sub>
          CHClCH
          <sub>
            2
          </sub>
          Cl + 2KOH(aq) <span className='text-xl text-bg-600'>→</span>CH≡CCH + 2KCl + 2H
          <sub>
            2
          </sub>
          O
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          3.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Heating Trihalogen Derivatives with Silver Powder:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes can be prepared by heating trihalogen derivatives (compounds with three halogen atoms) with silver        powder. The silver powder acts as a reducing agent, removing the halogen atoms and forming a triple bond. For        example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          CH
          <sub>
            3
          </sub>
          CCl
          <sub>
            3
          </sub>
          + 6Ag <span className='text-xl text-bg-600'>→</span>HC≡CH + 3AgCl + 2AgCl
          <sub>
            2
          </sub>
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          These methods provide a general overview of how alkynes can be prepared. Each method offers advantages and may        be suitable for specific applications or desired products.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Chemical Properties of Alkynes:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes exhibit various chemical reactions due to the presence of a carbon-carbon triple bond. Here are some        important chemical properties of alkynes:
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          1.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Addition of Hydrogen:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes can undergo addition reactions with hydrogen (H
          <sub>
            2
          </sub>
          ) in the presence of a catalyst such as        palladium (Pd) or platinum (Pt) to form alkanes. This reaction is known as hydrogenation. For example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          HC≡CH + H
          <sub>
            2
          </sub>
          <span className='text-xl text-bg-600'>→</span>CH
          <sub>
            2
          </sub>
          =CH
          <sub>
            2
          </sub>
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          2.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Addition of HX (Hydrogen Halides):
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes react with hydrogen halides (HX) such as hydrochloric acid (HCl) or hydrobromic acid (HBr) to form        vinyl halides. The addition follows Markovnikov&lsquo;s rule, where the halogen atom attaches to the carbon atom with        fewer hydrogen atoms. For example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          HC≡CH + HBr <span className='text-xl text-bg-600'>→</span>CH
          <sub>
            2
          </sub>
          =CHBr
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          3.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Addition of Water (Hydration):
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes can undergo hydration, where water (H
          <sub>
            2
          </sub>
          O) adds across the triple bond in the presence of an        acid catalyst to form ketones. For example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          HC≡CH + H
          <sub>
            2
          </sub>
          O <span className='text-xl text-bg-600'>→</span>CH
          <sub>
            3
          </sub>
          C=O
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          4.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Action with Sodium:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes react with sodium (Na) to form sodium alkynides. This reaction involves the replacement of a hydrogen        atom in the alkyne by a sodium atom. For example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          2 HC≡CH + 2Na <span className='text-xl text-bg-600'>→</span>2NaC≡CNa + H
          <sub>
            2
          </sub>
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          5.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Action with Ammonical Silver Nitrate Solution:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes react with ammonical silver nitrate (AgNO
          <sub>
            3
          </sub>
          + NH
          <sub>
            3
          </sub>
          ) to form a silver acetylide        precipitate, which is explosive and highly sensitive to shock. This reaction can be used for the detection of        alkynes. For example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          2 HC≡CH + 2AgNO
          <sub>
            3
          </sub>
          + 2NH
          <sub>
            3
          </sub>
          <span className='text-xl text-bg-600'>→</span>2AgC≡CAg + 2NH
          <sub>
            4
          </sub>
          NO
          <sub>
            3
          </sub>
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          6.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Action with Ammonical Cuprous Chloride (Fehling&lsquo;s Solution):
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes react with ammonical cuprous chloride (CuCl
          <sub>
            2
          </sub>
          + NH
          <sub>
            3
          </sub>
          ) to form a red precipitate of        copper acetylide. This reaction is used for the detection of alkynes. For example:
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          2 HC≡CH + 2CuCl
          <sub>
            2
          </sub>
          + 2NH
          <sub>
            3
          </sub>
          <span className='text-xl text-bg-600'>→</span>2CuC≡CCu + 2NH
          <sub>
            4
          </sub>
          Cl
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          These are some of the important chemical reactions exhibited by alkynes. These reactions demonstrate the        versatility of alkynes and their ability to undergo diverse transformations.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Acidity of Alkynes:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes are weakly acidic due to the presence of a sp hybridized carbon atom in the triple bond. The acidity of        alkynes is attributed to the polarizability of the carbon-hydrogen (C-H) bond, which allows for the        stabilization of the resulting carbanion after deprotonation. The acidity of alkynes increases with the presence        of electron-withdrawing groups (EWG) or increased alkyl substitution on the carbon atom bearing the acidic        hydrogen.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Applications of Alkynes:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes find applications in various fields due to their unique chemical properties and reactivity. Here are        some notable applications:
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          1.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Chemical Synthesis:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes serve as versatile building blocks in organic synthesis. They can undergo various reactions such as        addition, oxidation, reduction, and coupling reactions to produce a wide range of organic compounds. The ability        of alkynes to form carbon-carbon triple bonds provides synthetic chemists with opportunities to create complex        molecular structures.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          2.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Industrial Processes:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes are used in industrial processes such as polymerization and manufacturing of specialty chemicals. For        example, acetylene (ethyne) is an important feedstock in the production of plastics, synthetic fibers, and        rubber. It is also used as a fuel gas for welding and cutting.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          3.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Pharmaceuticals:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes play a crucial role in pharmaceutical research and development. They serve as key intermediates in the        synthesis of pharmaceutical drugs and bioactive compounds. The presence of a triple bond in alkynes allows for        the introduction of specific functional groups and structural modifications to enhance the biological activity        of molecules.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          4.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Organometallic Chemistry:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes are widely used in organometallic chemistry as ligands to form transition metal complexes. These        complexes exhibit unique catalytic properties and are employed in various catalytic processes, including        cross-coupling reactions, hydrogenation, and carbonylation reactions.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          5.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Research and Development:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Alkynes continue to be of great interest in scientific research and development. Their reactivity and ability        to form complex molecular architectures make them valuable tools in exploring new reaction pathways, developing        novel materials, and advancing our understanding of chemical bonding and reactivity.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          These are just a few examples of the applications of alkynes. The versatility and reactivity of alkynes make        them valuable compounds in various industries and scientific endeavors.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Kolbe&lsquo;s Electrolytic Methods:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Kolbe&lsquo;s electrolytic methods are used for the preparation of alkane, alkene, and alkyne compounds by the        electrolysis of sodium or potassium salts of carboxylic acids. These methods involve the use of an electrolytic        cell and specific conditions to achieve the desired product. Here are the details of each method:
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          1.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Preparation of Alkane:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          In Kolbe&lsquo;s electrolytic method, alkane compounds can be prepared by the electrolysis of the sodium or potassium        salts of carboxylic acids. The process involves the following steps:
        </p>
        <ol>
          <li>
            The sodium or potassium salt of a carboxylic acid, such as sodium acetate or potassium butyrate, is  dissolved in water to form a solution.
          </li>
          <li>
            The solution is then subjected to electrolysis using an electrolytic cell.
          </li>
          <li>
            At the anode (positive electrode), oxidation occurs, resulting in the formation of carbon dioxide gas and a  carbocation intermediate:
          </li>
        </ol>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          2CH
          <sub>
            3
          </sub>
          COO
          <sup>
            -
          </sup>
          (aq) - 2e
          <sup>
            -
          </sup>
          {` -> 2CH`}
          <sub>
            3
          </sub>
          COOH (aq) + CO
          <sub>
            2
          </sub>
          (g)
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          CH
          <sub>
            3
          </sub>
          {`COOH (aq) -> CH`}
          <sub>
            3
          </sub>
          COO
          <sup>
            +
          </sup>
          (aq) + H
          <sup>
            +
          </sup>
          (aq)
        </p>
        <ol>
          < li >
            The carbocation intermediate reacts with water in the solution, leading to the formation of an alkane  compound through a protonation reaction:
          </li >
        </ol >
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          CH
          <sub>
            3
          </sub>
          COO
          <sup>
            +
          </sup>
          (aq) + H
          <sub>
            2
          </sub>
          {`O (l) -> CH`}
          <sub>
            3
          </sub>
          CH
          <sub>
            3
          </sub>
          (g) +        H
          <sub>
            3
          </sub>
          O
          <sup>
            +
          </sup>
          (aq)
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          This method allows for the preparation of various alkanes by choosing different carboxylic acids as starting        materials.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          2.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Preparation of Alkene:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Kolbe&lsquo;s electrolytic method can also be used for the preparation of alkene compounds. The process is similar to        the preparation of alkanes but involves an additional step:
        </p>
        <ol>
          <li>
            The sodium or potassium salt of a carboxylic acid, such as sodium acetate or potassium butyrate, is  electrolyzed as described earlier.
          </li>
          <li>
            After the formation of the carbocation intermediate, a subsequent elimination reaction takes place,  resulting in the formation of an alkene compound:
          </li>
        </ol>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          CH
          <sub>
            3
          </sub>
          COO
          <sup>
            +
          </sup>
          {` (aq) -> CH`}
          <sub>
            2
          </sub>
          =CH
          <sub>
            2
          </sub>
          (g) + CO
          <sub>
            2
          </sub>
          (g) + H
          <sup>
            +
          </sup>
          (aq)
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          This method provides a way to selectively prepare specific alkene compounds by using appropriate carboxylic        acids.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          3.
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Preparation of Alkyne:
          </span>
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Similarly, Kolbe&lsquo;s electrolytic method can be employed for the preparation of alkyne compounds by incorporating        an additional step:
        </p>
        <ol>
          <li>
            The sodium or potassium salt of a carboxylic acid, such as sodium acetate or potassium butyrate, is  electrolyzed as mentioned above.
          </li>
          <li>
            After the formation of the carbocation intermediate, an additional elimination reaction occurs, leading to  the formation of an alkyne compound:
          </li>
        </ol>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          CH
          <sub>
            3
          </sub>
          COO
          <sup>
            +
          </sup>
          {` (aq) -> HC≡CH (g) + CO`}
          <sub>
            2
          </sub>
          (g) + H
          <sup>
            +
          </sup>
          (aq)
        </p>
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          This method allows for the synthesis of various alkyne compounds by selecting appropriate carboxylic acids as        starting materials.
        </p>
        <br />
        <p className="sm:text-sm lg:text-lg text-sm mb-4">
          Kolbe&lsquo;s electrolytic methods provide useful routes for the preparation of alkane, alkene, and alkyne compounds        from carboxylic acids. These methods offer a convenient and efficient way to access a wide range of hydrocarbon        compounds.
        </p>
        <br />
      </section>
    </Slate>
  )
}

export default Chapter14
