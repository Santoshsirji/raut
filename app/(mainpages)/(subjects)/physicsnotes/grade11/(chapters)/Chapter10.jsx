import React from 'react';
import ChapterHeading from '@/components/subjects/ChapterHeading';
import Slate from '@/components/slate/Slate';

const Chapter10 = () => {
  return (
    <Slate>
      <section
        className='py-1'
        id='chapter10'
      >
        <div className="mt-14 p-3"></div>
        <ChapterHeading title={`
    Chapter 10: Thermal Expansion`}
        />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Expansion and Linear Expansion
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Expansion refers to the increase in size or volume of a substance when subjected to an increase in  temperature. Different materials exhibit varying degrees of expansion, and this property is important in  various practical applications.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Linear expansion is a specific type of expansion that occurs in one dimension, typically length. When a solid  material undergoes linear expansion, its length increases in proportion to the temperature change.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The linear expansion of a solid is determined by its coefficient of linear expansion &#40;
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            α
          </span>
          &#41;,  which is a material-specific constant. The coefficient of linear expansion represents the fractional change in  length per degree Celsius &#40;or Kelvin&#41; temperature change.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The change in length &#40;
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            ΔL
          </span>
          &#41; of a solid material can be calculated using the formula:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            ΔL = α * L * ΔT
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Where:
        </p>
        <br />
        <ul>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              ΔL
            </span>
            is the change in length,
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              α
            </span>
            is the coefficient of linear expansion,
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              L
            </span>
            is the original length of the material, and
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              ΔT
            </span>
            is the change in temperature.
          </li>
          <br />
        </ul>
        <p className="text-sm lg:text-lg mb-4">
          Measurement of linear expansion is commonly done using instruments such as a micrometer, vernier caliper, or  a linear expansion apparatus. These instruments allow for precise measurement of the change in length and  determination of the coefficient of linear expansion for a given material.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The coefficient of linear expansion can also be used to calculate the change in other physical quantities,  such as the area or volume of an object, when subjected to a temperature change.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Cubical and Superficial Expansion
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          In addition to linear expansion, solids also undergo cubical and superficial expansion when subjected to  temperature changes. These types of expansion describe the increase in volume and surface area of a solid,  respectively.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Cubical expansion occurs in all three dimensions &#40;length, width, and height&#41; of a solid, resulting in a  change in its volume. The coefficient of cubical expansion &#40;
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            γ
          </span>
          &#41; represents the fractional  change in volume per degree Celsius &#40;or Kelvin&#41; temperature change. The formula for calculating the change in  volume &#40;
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            ΔV
          </span>
          &#41; due to cubical expansion is:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            ΔV = γ * V * ΔT
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Where:
        </p>
        <br />
        <ul>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              ΔV
            </span>
            is the change in volume,
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              γ
            </span>
            is the coefficient of cubical expansion,
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              V
            </span>
            is the original volume of the solid, and
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              ΔT
            </span>
            is the change in temperature.
          </li>
          <br />
        </ul>
        <p className="text-sm lg:text-lg mb-4">
          Superficial expansion, on the other hand, refers to the change in surface area of a solid due to temperature  variations. The coefficient of superficial expansion &#40;
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            β
          </span>
          &#41; represents the fractional change in  surface area per degree Celsius &#40;or Kelvin&#41; temperature change. The formula for calculating the change in  surface area &#40;
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            ΔA
          </span>
          &#41; caused by superficial expansion is:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            ΔA = β * A * ΔT
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Where:
        </p>
        <br />
        <ul>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              ΔA
            </span>
            is the change in surface area,
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              β
            </span>
            is the coefficient of superficial expansion, and
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              A
            </span>
            is the original surface area of the solid.
          </li>
          <br />
        </ul>
        <p className="text-sm lg:text-lg mb-4">
          Relation with Linear Expansion:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The coefficients of cubical and superficial expansion can be related to the coefficient of linear expansion  &#40;
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            α
          </span>
          &#41; using the following equations:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            γ = 3α
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            β = 2α
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          These relations show that the coefficient of cubical expansion is three times the coefficient of linear  expansion, while the coefficient of superficial expansion is twice the coefficient of linear expansion.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          By understanding the concepts of linear, cubical, and superficial expansion, we can better analyze and  predict the dimensional changes that occur in solids due to temperature variations.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Liquid Expansion: Absolute and Apparent
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Liquid expansion refers to the increase in volume of a liquid when its temperature rises. It is characterized  by two concepts: absolute expansion and apparent expansion.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Absolute Expansion:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Absolute expansion is the actual increase in volume experienced by a liquid when its temperature changes. The  coefficient of absolute expansion &#40;
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            β
          </span>
          &#41; represents the fractional change in volume per degree  Celsius &#40;or Kelvin&#41; temperature change for a liquid. The formula for calculating the change in volume  &#40;
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            ΔV
          </span>
          &#41; due to absolute expansion is:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            ΔV = β * V * ΔT
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Where:
        </p>
        <br />
        <ul>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              ΔV
            </span>
            is the change in volume,
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              β
            </span>
            is the coefficient of absolute expansion,
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              V
            </span>
            is the original volume of the liquid, and
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              ΔT
            </span>
            is the change in temperature.
          </li>
          <br />
        </ul>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Apparent Expansion:
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Apparent expansion is the observed change in level or height of a liquid in a container due to temperature  changes. It takes into account the expansion of both the liquid and the container. The apparent expansion is  influenced by the coefficient of apparent expansion &#40;
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            γ
          </span>
          &#41;, which represents the fractional  change in apparent volume per degree Celsius &#40;or Kelvin&#41; temperature change. The formula for calculating the  change in apparent volume &#40;
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            ΔV
            <sub>
              app
            </sub>
          </span>
          &#41; is:
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            ΔV
            <sub>
              app
            </sub>
            = γ * V * ΔT
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          Where:
        </p>
        <br />
        <ul>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              ΔV
              <sub>
                app
              </sub>
            </span>
            is the change in apparent volume,
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              γ
            </span>
            is the coefficient of apparent expansion, and
          </li>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              V
            </span>
            is the original volume of the liquid.
          </li>
          <br />
        </ul>
        <p className="text-sm lg:text-lg mb-4">
          It is important to note that the coefficient of absolute expansion and the coefficient of apparent expansion  may not be the same for a given liquid.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The difference between absolute and apparent expansion lies in considering the expansion of the container in  the case of apparent expansion. Absolute expansion focuses solely on the change in volume of the liquid  itself, while apparent expansion takes into account the overall change in volume of the liquid and the  container combined.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          By understanding these concepts, we can accurately measure and account for the changes in volume and level of  liquids as their temperatures change.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
            Dulong and Petit Method of Determining Expansivity of Liquids
          </span>
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The Dulong and Petit method is a technique used to determine the expansivity or coefficient of volume  expansion of liquids. It is based on the principle of using a glass bulb or capillary tube filled with the  liquid of interest and measuring the change in volume as the temperature is varied.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          The procedure involves the following steps:
        </p>
        <br />
        <ol>
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Apparatus Setup:
            </span>
          </li>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            Set up a glass bulb or capillary tube filled with the liquid whose expansivity is to be determined. The    bulb or tube should be connected to a manometer or other volume measuring device.
          </p>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Initial Measurement:
            </span>
          </li>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            Measure the initial volume of the liquid in the bulb or capillary tube at a reference temperature.
          </p>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Temperature Variation:
            </span>
          </li>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            Expose the liquid-filled bulb or capillary tube to different temperatures by immersing it in a    temperature-controlled bath or subjecting it to a controlled heating or cooling process. Ensure that the    temperature range covers a sufficient range for accurate measurements.
          </p>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Volume Measurement:
            </span>
          </li>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            Measure the change in volume of the liquid as the temperature is varied. This can be done by observing the    displacement of a liquid column in a manometer or by using other volume measuring techniques.
          </p>
          <br />
          <li>
            <span className="text-2xl saturate-150 font-semibold text-orange-600 mb-2">
              Data Analysis:
            </span>
          </li>
          <br />
          <p className="text-sm lg:text-lg mb-4">
            Plot a graph of the change in volume of the liquid versus the corresponding temperature variation. The    slope of the graph represents the expansivity or coefficient of volume expansion of the liquid.
          </p>
          <br />
        </ol>
        <p className="text-sm lg:text-lg mb-4">
          The Dulong and Petit method assumes that the expansivity of the liquid is linearly proportional to the  temperature change within the range of measurement. However, it is essential to consider the limitations and  potential sources of error in the experiment, such as thermal expansion of the glass apparatus and other  factors that may affect the accuracy of the measurements.
        </p>
        <br />
        <p className="text-sm lg:text-lg mb-4">
          By following the Dulong and Petit method, scientists and researchers can determine the expansivity of liquids  and gain insights into their thermal properties and behavior.
        </p>
        <br />
      </section>
    </Slate>
  )
}

export default Chapter10
