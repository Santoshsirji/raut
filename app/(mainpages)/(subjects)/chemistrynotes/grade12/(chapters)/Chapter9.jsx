import React from 'react';
import ChapterHeading from '@/components/subjects/ChapterHeading';
import Slate from '@/components/slate/Slate';
import Image from "next/image";
const Chapter9 = () => {
  return (
    <Slate>
      <section
        className='py-1'
        id='chapter9'
      >
        <div className="mt-20 p-3"></div>
        <ChapterHeading title={`
     Chapter 9: Amines`}
        />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">

          Aliphatic Amines

        </span>
        <p className="text-sm lg:text-lg mb-4">
          Aliphatic amines are organic compounds that contain one or more amino (-NH2) functional groups attached to aliphatic carbon chains. They are derivatives of ammonia (NH3) in which one or more hydrogen atoms are replaced by alkyl or aryl groups. Aliphatic amines play important roles in various biological, industrial, and synthetic applications.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Nomenclature:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The nomenclature of aliphatic amines follows a systematic naming scheme. The parent chain is determined based on the longest continuous carbon chain containing the amino group. The suffix &quot;-amine&quot; is added to the name of the corresponding alkane or alkene. The amino group is indicated by a prefix, such as &quot;amino-&quot; or &quot;N-&quot;. The carbon atoms in the parent chain are numbered starting from the end nearest to the amino group.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Classification:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Aliphatic amines can be classified into three main categories based on the number of attached alkyl or aryl groups:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          1. Primary amines: Primary amines have one alkyl or aryl group attached to the amino group. Their general formula is R-NH2, where R represents an alkyl or aryl group.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          2. Secondary amines: Secondary amines have two alkyl or aryl groups attached to the amino group. Their general formula is R-NH-R&lsquo;, where R and R&lsquo; represent different alkyl or aryl groups.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          3. Tertiary amines: Tertiary amines have three alkyl or aryl groups attached to the amino group. Their general formula is R-N(R&lsquo;)2, where R and R&lsquo; represent different alkyl or aryl groups.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Isomerism:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Aliphatic amines can exhibit different types of isomerism:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          1. Structural isomerism: Structural isomers have the same molecular formula but differ in the arrangement of atoms. Aliphatic amines can exhibit structural isomerism due to branching or different connectivity of carbon atoms in the carbon chain.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          2. Stereoisomerism: Stereoisomers have the same connectivity of atoms but differ in the spatial arrangement. Aliphatic amines can exhibit stereoisomerism when one or more carbon atoms are chiral, leading to the presence of enantiomers or diastereomers.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Aliphatic amines find wide applications in various fields, including pharmaceuticals, agriculture, rubber chemicals, and surfactants. Their diverse properties and reactivity make them valuable building blocks in organic synthesis and chemical transformations.
        </p>
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">

          Test of 1°, 2°, and 3° Amines with Nitrous Acid (H

        </span>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          When 1°, 2°, and 3° amines are treated with nitrous acid (HNO2), they undergo different reactions. Here are the chemical reactions for each type of amine:
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            1. Test with Nitrous Acid (HNO2)
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            - Primary Amine:
          </span>
          Primary amines react with nitrous acid to form diazonium salts. The reaction involves the conversion of the primary amine to a diazonium ion, which is highly reactive and can undergo various further reactions.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <code>
            R-NH2 + HNO2 <span className='text-xl text-bg-600'>→</span>R-N≡N+ + H2O
          </code>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            - Secondary Amine:
          </span>
          Secondary amines also react with nitrous acid, but the reaction is slower compared to primary amines. They form nitrosamines, which often have a distinct odor.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <code>
            R1R2NH + HNO2 <span className='text-xl text-bg-600'>→</span>R1R2N-NO + H2O
          </code>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            - Tertiary Amine:
          </span>
          Tertiary amines do not react with nitrous acid under normal conditions and do not show any significant reaction.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <code>
            R1R2R3N + HNO2 <span className='text-xl text-bg-600'>→</span>No reaction
          </code>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          It&lsquo;s important to note that the reaction of primary amines with nitrous acid is used to prepare diazonium salts, which can be further utilized in various synthetic reactions to introduce functional groups or prepare aromatic compounds.
        </p>
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">

          Preparation of Aniline

        </span>
        <p className="text-sm lg:text-lg mb-4">
          There are two common methods for the preparation of aniline:
        </p>
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          1. Ammonolysis of Phenols in the Presence of ZnCl2 at 300°C:
        </span>
        <p className="text-sm lg:text-lg mb-4">
          In this method, phenols are treated with ammonia (NH3) in the presence of zinc chloride (ZnCl2) at a high temperature of 300°C. The reaction involves the substitution of the hydroxyl group (-OH) in the phenol with an amino group (-NH2) from ammonia.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The overall reaction can be represented as follows:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <code>
            R-OH + NH3 <span className='text-xl text-bg-600'>→</span>R-NH2 + H2O
          </code>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          (where R represents the aromatic ring of the phenol)
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Zinc chloride acts as a catalyst to facilitate the reaction.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          This method is commonly used for the preparation of aniline from phenols.
        </p>
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          2. Reduction of Nitro Arenes in Acidic Medium (Sn/HCl):
        </span>
        <p className="text-sm lg:text-lg mb-4">
          In this method, nitroarenes (compounds containing a nitro group, -NO2, attached to an aromatic ring) are reduced to aniline in acidic medium using tin and hydrochloric acid.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The reaction proceeds as follows:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <code>
            C6H5NO2 + Sn + 2HCl <span className='text-xl text-bg-600'>→</span>C6H5NH2 + SnCl2 + H2O
          </code>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          (where C6H5 represents the aromatic ring)
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Tin (Sn) acts as the reducing agent, and hydrochloric acid (HCl) provides the acidic conditions necessary for the reaction.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          This method is specifically used for the preparation of aniline from nitroarenes.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          These two methods offer different routes for the synthesis of aniline, depending on the starting materials available.
        </p>
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">

          Aniline Alkylation

        </span>
        <p className="text-sm lg:text-lg mb-4">
          Aniline alkylation refers to the substitution of a hydrogen atom in aniline with an alkyl group. This reaction can be achieved through various methods. Here are three common reactions for the alkylation of aniline:
        </p>
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          1. Alkylation with Alkyl Halides:
        </span>
        <p className="text-sm lg:text-lg mb-4">
          In this method, an alkyl halide (such as methyl chloride, ethyl bromide, or propyl iodide) is used to alkylate aniline. The reaction is typically carried out in the presence of a base, such as sodium hydroxide (NaOH) or potassium carbonate (K2CO3), which facilitates the substitution of the hydrogen atom in aniline with the alkyl group from the alkyl halide.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The general reaction can be represented as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <code>
            R-X + C6H5NH2 <span className='text-xl text-bg-600'>→</span>R-C6H5-NH2 + X-
          </code>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          (where R represents the alkyl group and X represents the halide ion)
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Examples of alkyl halides commonly used in aniline alkylation include methyl chloride (CH3Cl), ethyl bromide (C2H5Br), and propyl iodide (C3H7I).
        </p>
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">

          Acylation of Aniline

        </span>
        <p className="text-sm lg:text-lg mb-4">
          Acylation of aniline involves the substitution of a hydrogen atom in aniline with an acyl group, typically derived from an acid chloride or an acid anhydride. This reaction allows for the introduction of various acyl groups into the aromatic ring of aniline.
        </p>
        <br />
        <br />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          1. Acylation with Acid Chlorides:
        </span>
        <p className="text-sm lg:text-lg mb-4">
          In this method, an acid chloride (such as acetyl chloride or benzoyl chloride) is used to acylate aniline. The reaction is typically carried out in the presence of a base, such as pyridine or triethylamine, which acts as a catalyst and helps in the formation of the acylated product.
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The general reaction can be represented as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <code>
            R-COCl + C6H5NH2 <span className='text-xl text-bg-600'>→</span>R-C6H5-NH-COCl + HCl
          </code>
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          (where R represents the acyl group)
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Examples of acid chlorides commonly used in aniline acylation include acetyl chloride (CH3COCl) and benzoyl chloride (C6H5COCl).
        </p>
        <br />
        <br />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          2. Acylation with Acid Anhydrides:
        </span>
        <p className="text-sm lg:text-lg mb-4">
          In this method, an acid anhydride (such as acetic anhydride or benzoyl anhydride) is used to acylate aniline. The reaction is typically carried out in the presence of a base, similar to the acylation with acid chlorides.
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The general reaction can be represented as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <code>
            (R-CO)2O + C6H5NH2 <span className='text-xl text-bg-600'>→</span>R-C6H5-NH-CO + R-COOH
          </code>
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          (where R represents the acyl group)
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Examples of acid anhydrides commonly used in aniline acylation include acetic anhydride (CH3CO)2O and benzoyl anhydride (C6H5CO)2O.
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          These acylation reactions allow for the synthesis of a wide range of acylated aniline derivatives, which find applications in various fields such as pharmaceuticals, dyes, and organic synthesis.
        </p>
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">

          Diazotization Reaction

        </span>
        <p className="text-sm lg:text-lg mb-4">
          Diazotization is a chemical reaction that involves the conversion of primary aromatic amines to their corresponding diazonium salts. This reaction is an important step in various organic syntheses and is widely used in the preparation of azo dyes, pharmaceuticals, and other organic compounds. The diazotization reaction typically proceeds in acidic conditions using sodium nitrite (NaNO2) as the diazotizing agent. Here is the general process of diazotization:
        </p>
        <br />
        <br />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          Step 1: Formation of Diazonium Salt:
        </span>
        <p className="text-sm lg:text-lg mb-4">
          The primary aromatic amine reacts with sodium nitrite (NaNO2) in the presence of an acidic solution, such as hydrochloric acid (HCl), to form the corresponding diazonium salt. The reaction involves the replacement of the amino group (-NH2) with a diazonium group (-N2+).
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The general reaction can be represented as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <code>
            R-NH2 + NaNO2 + HCl <span className='text-xl text-bg-600'>→</span>R-N≡N+Cl- + NaCl + H2O
          </code>
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          (where R represents the aromatic group)
        </p>
        <br />
        <br />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">

          Coupling Reactions with Phenols and Aniline

        </span>
        <p className="text-sm lg:text-lg mb-4">
          Coupling reactions involving diazonium salts and phenols or aniline are important processes in organic synthesis, particularly in the preparation of azo compounds and related products. These reactions are commonly referred to as diazo coupling reactions. Here are the coupling reactions of diazonium salts with phenols and aniline:
        </p>
        <br />
        <br />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          1. Coupling with Phenols:
        </span>
        <p className="text-sm lg:text-lg mb-4">
          When a diazonium salt reacts with a phenol compound in the presence of a suitable catalyst or coupling agent, an azo compound is formed. The reaction involves the substitution of the diazonium group (-N2+) with an aryl group from the phenol, resulting in the formation of an azo bond (-N=N-) between the two aromatic rings.
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The general reaction can be represented as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <code>
            Ar-N≡N+X- + R-OH <span className='text-xl text-bg-600'>→</span>Ar-N=N-Ar&lsquo; + XOH
          </code>
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          (where Ar represents the aryl group of the diazonium salt, Ar&lsquo; represents the aryl group of the phenol, and X represents the counterion)
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The reaction is typically carried out in an alkaline or mildly acidic medium, and the choice of coupling agent and reaction conditions can influence the selectivity and yield of the azo product.
        </p>
        <br />
        <br />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          2. Coupling with Aniline:
        </span>
        <p className="text-sm lg:text-lg mb-4">
          Similar to coupling with phenols, diazonium salts can react with aniline to form azo compounds. The reaction proceeds in a similar manner, where the diazonium group is replaced by an aryl group from aniline, resulting in the formation of an azo bond between the two aromatic rings.
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The general reaction can be represented as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <code>
            Ar-N≡N+X- + Ar&lsquo;-NH2 <span className='text-xl text-bg-600'>→</span>Ar-N=N-Ar&lsquo; + X- + H+
          </code>
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          (where Ar represents the aryl group of the diazonium salt and Ar&lsquo; represents the aryl group of aniline)
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The reaction is typically carried out in an acidic medium, and the presence of a suitable catalyst or coupling agent may be required to facilitate the reaction.
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          These coupling reactions with phenols and aniline allow for the synthesis of a wide range of azo compounds, which find applications in various fields such as dyes, pigments, and pharmaceuticals.
        </p>
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">

          Carbylamine Reaction

        </span>
        <p className="text-sm lg:text-lg mb-4">
          The Carbylamine reaction, also known as the Isocyanide test, is a chemical test used to distinguish primary amines from other amines. This reaction involves the reaction of primary amines with chloroform (CHCl3) and alcoholic potassium hydroxide (KOH) to form isocyanides or carbylamines, which are foul-smelling compounds.
        </p>
        <br />
        <br />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          Reaction:
        </span>
        <p className="text-sm lg:text-lg mb-4">
          The Carbylamine reaction can be represented as follows:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <code>
            R-NH2 + CHCl3 + 3 KOH <span className='text-xl text-bg-600'>→</span>R-N=C=O + 3 KCl + 3 H2O
          </code>
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          (where R represents an alkyl or aryl group)
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The reaction is typically carried out by adding a primary amine to a mixture of chloroform and alcoholic potassium hydroxide. Heat is applied, and the formation of a pungent-smelling isocyanide indicates the presence of a primary amine.
        </p>
        <br />
        <br />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          Significance:
        </span>
        <p className="text-sm lg:text-lg mb-4">
          The Carbylamine reaction is an important qualitative test used in organic chemistry to differentiate primary amines from secondary and tertiary amines. Primary amines are the only class of amines that give a positive Carbylamine test. Secondary and tertiary amines do not react with chloroform and alcoholic potassium hydroxide under the reaction conditions and, therefore, do not produce the characteristic foul-smelling isocyanides.
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          This test provides a quick and reliable method for identifying primary amines in a given sample and is often used in organic synthesis and analytical chemistry to confirm the presence of primary amines.
        </p>
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">

          Halogenation of Aniline

        </span>
        <p className="text-sm lg:text-lg mb-4">
          The halogenation of aniline, both with and without the use of a protecting group, can lead to the introduction of halogen atoms onto the aromatic ring. Here are examples of halogenation reactions with and without protection:
        </p>
        <br />
        <br />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          1. Halogenation without Protection:
        </span>
        <p className="text-sm lg:text-lg mb-4">
          Without the use of a protecting group, the amino group in aniline can undergo unwanted side reactions during halogenation. One common side reaction is the substitution of the amino group by the halogen, resulting in N-substituted derivatives. For example, when aniline is treated with chlorine, the following reaction can occur:
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <code>
            C6H5NH2 + Cl2 <span className='text-xl text-bg-600'>→</span>C6H5NHCl + HCl
          </code>
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Here, the chlorine atom substitutes one of the hydrogen atoms in the amino group, leading to the formation of N-chloroaniline.
        </p>
        <br />
        <br />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          2. Halogenation with Protection:
        </span>
        <p className="text-sm lg:text-lg mb-4">
          By using a protecting group, the reactivity of the amino group can be blocked, allowing for selective halogenation of the aromatic ring. One commonly used protecting group for aniline is the acetyl (CH3CO-) group. The protecting group can be introduced by treating aniline with acetic anhydride. After protection, the halogenation reaction can be carried out. For example, when protected aniline (acetanilide) is treated with bromine, the following reaction occurs:
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <code>
            C6H5NHCOCH3 + Br2 <span className='text-xl text-bg-600'>→</span>C6H5NHBrcOCH3 + HBr
          </code>
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Here, the bromine atom is selectively introduced onto the aromatic ring, resulting in the formation of bromoacetanilide. The protecting group helps to prevent substitution reactions at the amino group.
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          After obtaining the desired halogenated product, the protecting group can be removed to regenerate the original aniline. In the case of acetanilide, the acetyl group can be hydrolyzed to reveal the amino group by treating it with a base or an acid.
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The use of protecting groups in the halogenation of aniline allows for more controlled reactions, enabling the synthesis of specific halogenated derivatives while avoiding unwanted side reactions at the amino group.
        </p>
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">

          Nitration of Aniline

        </span>
        <p className="text-sm lg:text-lg mb-4">
          Nitration of aniline involves the introduction of a nitro (-NO2) group onto the aromatic ring of aniline. The reaction is typically carried out by treating aniline with a mixture of concentrated nitric acid (HNO3) and concentrated sulfuric acid (H2SO4), known as the nitration mixture. The nitration of aniline is an important synthetic pathway for the production of various aromatic compounds.
        </p>
        <br />
        <br />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          Reaction:
        </span>
        <p className="text-sm lg:text-lg mb-4">
          The nitration of aniline can be represented by the following equation:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <code>
            C6H5NH2 + HNO3 <span className='text-xl text-bg-600'>→</span>C6H5NO2 + H2O
          </code>
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          In this reaction, the nitro group (-NO2) is introduced onto the benzene ring, resulting in the formation of nitrobenzene. Water is produced as a byproduct.
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Nitration is an electrophilic aromatic substitution reaction, where the nitronium ion (NO2+) acts as the electrophile. The presence of the amino group in aniline activates the aromatic ring towards electrophilic attack, making it more susceptible to nitration.
        </p>
        <br />
        <br />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          Sulphonation of Aniline
        </span>
        <p className="text-sm lg:text-lg mb-4">
          Sulphonation of aniline involves the introduction of a sulfonic acid (-SO3H) group onto the aromatic ring of aniline. The reaction is carried out by treating aniline with concentrated sulfuric acid (H2SO4) at elevated temperatures. The sulphonation of aniline is an important reaction in the synthesis of various aromatic compounds and dyes.
        </p>
        <br />
        <br />
        <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
          Reaction:
        </span>
        <p className="text-sm lg:text-lg mb-4">
          The sulphonation of aniline can be represented by the following equation:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <code>
            C6H5NH2 + H2SO4 <span className='text-xl text-bg-600'>→</span>C6H5SO3H + H2O
          </code>
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          In this reaction, the sulfonic acid group (-SO3H) is introduced onto the benzene ring, resulting in the formation of benzenesulfonic acid. Water is produced as a byproduct.
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Sulphonation is also an electrophilic aromatic substitution reaction, where the sulfur trioxide (SO3) acts as the electrophile. The presence of the amino group in aniline activates the aromatic ring towards electrophilic attack, facilitating the sulphonation reaction.
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The nitration and sulphonation of aniline are important reactions that modify the chemical properties of aniline and allow for the synthesis of various aromatic compounds with different functional groups attached to the benzene ring.
        </p>
      </section>
    </Slate>
  )
}

export default Chapter9
