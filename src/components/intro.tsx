'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

const roles = [
  'Frontend Developer',
  'React Enthusiast',
  'Next.js Expert',
  'Cloud Computing Undergraduate',
];

const roleDescriptions: Record<string, string> = {
  'Frontend Developer': 'creating modern web apps.',
  'React Enthusiast': 'building interactive UI experiences.',
  'Next.js Expert': 'crafting fast server-rendered apps.',
  'Cloud Computing Undergraduate': 'Building scalable and resilient cloud solutions.',
};

const cloudTechnologies = ['AWS', 'Docker', 'Kubernetes'];

export const Intro = () => {
  const { ref } = useSectionInView('Home');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      <div className="flex items-center gap-3 rounded border px-3 py-1">
        <span className="relative flex size-2">
          <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative flex size-2 rounded-full bg-green-400"></span>
        </span>
        <span className="font-mono text-sm">Available for work!</span>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Hi I&#39;m a{' '}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={roles[currentIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent"
          >
            {roles[currentIndex]}
          </motion.span>
        </AnimatePresence>{' '}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={roleDescriptions[roles[currentIndex]]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            {roleDescriptions[roles[currentIndex]]}
          </motion.span>
        </AnimatePresence>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-xl"
      >
        A frontend developer based in Sri Lanka and a cloud computing undergraduate. I&#39;m passionate about
        building modern web applications using Next.js, React, and Tailwind CSS.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
        className="text-muted-foreground max-w-xl"
      >
        Familiar with cloud technologies like{' '}
        <span className="font-semibold">{cloudTechnologies.join(', ')}</span>.
      </motion.p>

      <div className="flex flex-row flex-wrap justify-center gap-2">
        <Button asChild size="lg">
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>

        <Button variant="outline" size="lg" className="hidden sm:flex" asChild>
          <a href="/Sandeepa_Vimukthi _WImalasiri_CV.pdf" download>
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://www.linkedin.com/in/sandeepa-vimukthi-92ab0a277/"
            aria-label="LinkedIn"
            target="_blank"
          >
            <Icons.linkedin className="size-5" />
          </Link>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://github.com/Sandeepa-git"
            aria-label="GitHub"
            target="_blank"
          >
            <Icons.github className="size-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
