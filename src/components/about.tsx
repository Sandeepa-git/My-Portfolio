'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />

      {/* Container for image and text */}
      <div className="mt-6 flex w-full max-w-4xl flex-col items-center gap-8 px-4 md:flex-row md:items-start">
        {/* Profile Image */}
        <div className="flex-shrink-0 w-[200px] h-[200px] overflow-hidden rounded-full shadow-md">
          <Image
            src="/images/Sandeepa.jpg" // <- change to your actual image filename
            alt="My Profile Picture"
            width={200}
            height={200}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left leading-7">
          <p className="mb-4">
            I’m an undergraduate majoring in Cloud Computing at Sri Lanka Technology Campus, passionate about cloud infrastructure, security, and automation. With foundational skills in programming and web development, I’m continuously building practical experience through projects.
          </p>
          <p className="mb-4">
            I value adaptability, creativity, and teamwork, and I’m eager to contribute to innovative cloud-based solutions while staying ahead in this fast-evolving field.
          </p>
          <p>
            I&apos;m open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, then don&apos;t hesitate to contact me.
          </p>
        </div>
      </div>

      <Skills />
    </motion.section>
  );
};
