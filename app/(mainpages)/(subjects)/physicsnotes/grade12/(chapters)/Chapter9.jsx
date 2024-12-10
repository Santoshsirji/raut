import React from 'react';
import ChapterHeading from '@/components/subjects/ChapterHeading';
import Slate from '@/components/slate/Slate';
const Chapter9 = () => {
  return (
    <Slate>
      <section
        className='py-1'
        id='chapter9'
      >
        <div className="mt-14 p-3"></div>
        <ChapterHeading title={`
     Chapter 9: Acoustic Phenomena`}
        />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Sound waves: Pressure Amplitude  &#40;with derivation&#41;
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The pressure amplitude of a sound wave, denoted by Δpmax, is the maximum change in pressure from the equilibrium pressure of the medium. It can be related to the displacement amplitude, a, using the equation:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Δpmax = Bak
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Where:
        </p>
        <ul>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              Δpmax
            </span>
            is the pressure amplitude in pascals  &#40;Pa&#41;
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              B
            </span>
            is the bulk modulus of the medium in pascals  &#40;Pa&#41;
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              a
            </span>
            is the displacement amplitude in meters  &#40;m&#41;
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              k
            </span>
            is the wavenumber in radians per meter  &#40;rad/m&#41;
          </li>
        </ul>
        <p className="text-sm lg:text-lg mb-4">
          The bulk modulus, B, is a measure of how much a material resists changes in pressure and is related to the speed of sound in the medium, v, by the equation:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          v = √ &#40;B/ρ&#41;
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Where:
        </p>
        <ul>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              v
            </span>
            is the speed of sound in meters per second  &#40;m/s&#41;
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              ρ
            </span>
            is the density of the medium in kilograms per cubic meter  &#40;kg/m³&#41;
          </li>
        </ul>
        <p className="text-sm lg:text-lg mb-4">
          The derivation of the equation for pressure amplitude is as follows:
        </p>
        <ol>
          <li>
            The pressure in a sound wave is given by the equation:
            <br />

            <span className='equation'>
              p = po + Δp * cos &#40;kx -   ωt&#41;
            </span>

            <br />
            where p is the pressure at a point in the medium, po is the equilibrium pressure of the medium, Δp is the pressure amplitude, k is the wavenumber, ω is the angular frequency, and t is time.
          </li>
          <li>
            The displacement of a particle in the medium is given by the equation:
            <br />

            <span className='equation'>
              y = a *   cos &#40;kx - ωt&#41;
            </span>

            <br />
            where y is the displacement of the particle and a is the displacement amplitude.
          </li>
          <li>
            Taking the derivative of the equation for pressure with respect to time, we get:
            <br />

            <span className='equation'>
              p&lsquo; = -Δp * sin &#40;kx - ωt&#41;
            </span>
          </li>
          <li>
            The pressure amplitude, Δpmax, is the maximum value of the pressure derivative:
            <br />

            <span className='equation'>
              Δpmax = |p&lsquo;|max
            </span>
          </li>
          <li>
            The maximum value of the pressure derivative is equal to the bulk modulus times the angular frequency times the displacement amplitude:
            <br />

            <span className='equation'>
              Δpmax = Bak
            </span>
          </li>
        </ol>
        <p className="text-sm lg:text-lg mb-4">
          Therefore, the pressure amplitude of a sound wave can be determined using the equation Δpmax = Bak, where B is the bulk modulus of the medium, a is the displacement amplitude, and k is the wavenumber.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Characteristics of Sound: Intensity, Loudness, Quality, and Pitch
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Intensity:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Intensity refers to the amount of energy carried by a sound wave per unit area. It is a measure of the power of the sound wave and is represented by the symbol I. The intensity of sound is directly proportional to the square of the amplitude of the wave. Mathematically, it can be expressed as:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          I =  &#40;P/A&#41;
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Where:
        </p>
        <ul>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              I
            </span>
            is the intensity of sound  &#40;in watts per square meter, W/m²&#41;
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              P
            </span>
            is the power of the sound wave  &#40;in watts, W&#41;
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              A
            </span>
            is the area through which the sound wave is passing  &#40;in square meters, m²&#41;
          </li>
        </ul>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Loudness:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Loudness is the subjective perception of the intensity of sound. It is influenced by the sensitivity of the human ear to different frequencies of sound waves. The loudness of sound is measured in units called decibels  &#40;dB&#41;. The relationship between loudness and intensity is not linear but follows a logarithmic scale. This is because the human ear has a logarithmic response to sound intensity. Therefore, a doubling of the intensity of a sound wave does not result in a doubling of the perceived loudness.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Quality  &#40;Timbre&#41;:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Quality, also known as timbre, refers to the characteristic tone or color of a sound. It distinguishes one sound from another, even if they have the same intensity and pitch. Quality is influenced by the presence of overtones or harmonics in a sound wave. These overtones give each sound its unique timbre. For example, a musical instrument and a human voice playing the same note will have different qualities or timbres, allowing us to distinguish between them.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Pitch:
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Pitch is the perceptual property of sound that allows us to classify sounds as high or low. It is determined by the frequency of the sound wave. A high-pitched sound has a high frequency, while a low-pitched sound has a low frequency. Pitch is measured in units called hertz  &#40;Hz&#41;, which represents the number of cycles or vibrations per second. The pitch of a sound is subjective and can vary between individuals based on their hearing capabilities.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          These characteristics of sound, including intensity, loudness, quality, and pitch, play a significant role in our perception and understanding of the auditory world around us.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Doppler&lsquo;s Effect
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The Doppler effect refers to the change in frequency or wavelength of a wave perceived by an observer when there is relative motion between the source of the wave and the observer. It explains the phenomenon of why the pitch of a sound seems to change when a moving object passes by.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          The Doppler effect can be described in different cases:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Case 1: Source moving towards the observer
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          In this case, the relative velocity between the source and the observer is positive. The frequency of the waves that the observer hears is given by the equation:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          f&lsquo; = f *  &#40;v + u&#41; / v
        </p>
        <p className="text-sm lg:text-lg mb-4">
          where:
        </p>
        <ul>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              f&lsquo;
            </span>
            is the observed frequency
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              f
            </span>
            is the source frequency
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              v
            </span>
            is the speed of the wave in the medium
          </li>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              u
            </span>
            is the relative velocity between the source and the observer
          </li>
        </ul>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Case 2: Source moving away from the observer
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          In this case, the relative velocity between the source and the observer is negative. The frequency of the waves that the observer hears is given by the equation:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          f&lsquo; = f *  &#40;v - u&#41; / v
        </p>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Case 3: Observer moving towards the source
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          In this case, the relative velocity between the observer and the source is positive. The frequency of the waves that the observer hears is given by the equation:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          f&lsquo; = f *  &#40;v + vo&#41; / v
        </p>
        <p className="text-sm lg:text-lg mb-4">
          where:
        </p>
        <ul>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              vo
            </span>
            is the observer velocity
          </li>
        </ul>
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Case 4: Observer moving away from the source
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          In this case, the relative velocity between the observer and the source is negative. The frequency of the waves that the observer hears is given by the equation:
        </p>
        <p className="text-sm lg:text-lg mb-4">
          f&lsquo; = f *  &#40;v - vo&#41; / v
        </p>
        <p className="text-sm lg:text-lg mb-4">
          where:
        </p>
        <ul>
          <li>
            <span className="text-2xl pr-3 font-semibold mb-2">
              vo
            </span>
            is the observer velocity
          </li>
        </ul>
        <p className="text-sm lg:text-lg mb-4">
          The Doppler effect has applications in various fields, such as astronomy, meteorology, and acoustics, and it helps explain the perceived changes in frequency and pitch when there is relative motion between a source and an observer.
        </p>
      </section>
    </Slate>
  )
}

export default Chapter9
