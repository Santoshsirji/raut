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
     Chapter 10: Nature and Propagation of Light`}
        />
        <p className="text-sm lg:text-lg mb-4">
          <span className="text-2xl pr-3 font-semibold mb-2">
            Huygen&lsquo;s Principle
          </span>
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Huygen&lsquo;s principle, formulated by Dutch physicist Christiaan Huygens in the 17th century, is a fundamental concept in wave theory. It states that every point on a wavefront can be considered as a source of secondary spherical wavelets that spread out in all directions. The envelope of these secondary wavelets at a later time represents the new position of the wavefront.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Key principles of Huygen&lsquo;s principle:
        </p>
        <ol>
          <li>
            Every point on a wavefront acts as a source of secondary wavelets.
          </li>
          <li>
            These secondary wavelets propagate in all directions with the speed of the wave.
          </li>
          <li>
            The new wavefront is formed by the envelope of all the secondary wavelets at a later time.
          </li>
        </ol>
        <p className="text-sm lg:text-lg mb-4">
          Huygen&lsquo;s principle provides a useful method for understanding the propagation of waves and explaining phenomena such as reflection, refraction, and diffraction. It helps to explain how waves interact with obstacles and how they bend around corners or edges.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          By considering each point on a wavefront as a source of secondary wavelets, Huygen&lsquo;s principle provides a simple and intuitive way to analyze the behavior of waves and understand various wave phenomena.
        </p>
        <span className="text-2xl pr-3 font-semibold mb-2">
          <p className="text-sm lg:text-lg mb-4">
            Reflection and Refraction in Wave Theory
          </p>
        </span>
        <p className="text-sm lg:text-lg mb-4">
          In wave theory, reflection and refraction are fundamental phenomena that occur when waves encounter boundaries or interfaces between different media. These phenomena can be explained using the principles of wave propagation and Huygens&lsquo; principle.
        </p>
        <span className="text-2xl pr-3 font-semibold mb-2">
          <p className="text-sm lg:text-lg mb-4">
            Reflection
          </p>
        </span>
        <p className="text-sm lg:text-lg mb-4">
          Reflection refers to the bouncing back of a wave when it encounters a boundary between two media. When a wavefront reaches a reflective surface, each point on the wavefront acts as a source of secondary wavelets according to Huygens&lsquo; principle. These secondary wavelets propagate in all directions, and the reflected wavefront is formed by the
          <span className="text-2xl pr-3 font-semibold mb-2">
            coherent
          </span>
          combination of these secondary wavelets. The angle of incidence
          <span className="text-2xl pr-3 font-semibold mb-2">
            &#40;θi&#41;
          </span>
          is equal to the angle of reflection
          <span className="text-2xl pr-3 font-semibold mb-2">
            &#40;θr&#41;
          </span>
          , measured with respect to the normal to the reflecting surface. The incident wave and the reflected wave are on opposite sides of the normal.
        </p>
        <span className="text-2xl pr-3 font-semibold mb-2">
          <p className="text-sm lg:text-lg mb-4">
            Refraction
          </p>
        </span>
        <p className="text-sm lg:text-lg mb-4">
          Refraction occurs when a wave passes from one medium to another and changes its direction due to the change in speed. According to wave theory, when a wavefront reaches the boundary between two media at an angle, each point on the wavefront acts as a source of secondary wavelets. These secondary wavelets propagate into the new medium with a different speed, causing the wavefront to change its direction. The angle of incidence
          <span className="text-2xl pr-3 font-semibold mb-2">
            &#40;θi&#41;
          </span>
          is not necessarily equal to the angle of refraction
          <span className="text-2xl pr-3 font-semibold mb-2">
            &#40;θr&#41;
          </span>
          , and the incident wave and the refracted wave are on the same side of the normal. The change in direction is determined by Snell&lsquo;s law, which states that the
          <span className="text-2xl pr-3 font-semibold mb-2">
            ratio
          </span>
          of the sines of the angles of incidence and refraction is equal to the ratio of the wave speeds in the two media.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Reflection and refraction are important phenomena in understanding the behavior of waves when they encounter boundaries or interfaces. They play a crucial role in various practical applications, such as optics, acoustics, and electromagnetic waves. The wave theory provides a comprehensive framework to analyze and explain these phenomena based on the principles of wave propagation and Huygens&lsquo; principle.
        </p>
        <br />
        <br />
        <p className="text-sm lg:text-lg mb-4">
          A
          <span className="text-2xl pr-3 font-semibold mb-2">
            coherent source
          </span>
          is a source of waves that emits waves that are all in phase with each other. This means that the peaks and troughs of the waves are all aligned, and the waves interfere constructively.
        </p>
        <p className="text-sm lg:text-lg mb-4">
          Coherent sources are important in many applications, such as lasers and interferometers. In a laser, the coherent light waves are emitted from a single atom or molecule, and they are amplified by passing through a gain medium. In an interferometer, two coherent light waves are superimposed, and the interference pattern is used to measure distances or to study the properties of light.
        </p>
        <span className="text-2xl pr-3 font-semibold mb-2">
          Refer to book for Derivations
        </span>
      </section>
    </Slate>
  )
}

export default Chapter10
