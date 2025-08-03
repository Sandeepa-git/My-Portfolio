import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/Chatbot.png',
    title: 'Chat bot Powered by Gemini AI',
    description:
      'Developed using essential web technologies like HTML, CSS, and JavaScript, and integrating with the powerful Gemini API.',
    technologies: ['HTML', 'CSS', 'Gemini API', 'Javascript'],
    links: {
      preview: 'https://sandeepa-git.github.io/Chatbot-powered-by-Gemini-AI/',
      github: 'https://github.com/Sandeepa-git/Chatbot-powered-by-Gemini-AI',
    },
  },
  {
    image: '/images/ML.png',
    title: 'Introvert vs. Extrovert Classifier using Machine Learning',
    description:
      'A machine learning app that predicts personality types based on user input.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'Javascript'],
    links: {
      preview: 'https://socialhub-ms.vercel.app/',
      github: 'https://github.com/Sandeepa-git/Introvert-vs.-Extrovert-Classifier-using-ML',
    },
  },
  {
    image: '/images/CS.png',
    title: 'CloudSpace Event Website',
    description:
      'A modern event website for CloudSpace, built with Next.js, TypeScript, Tailwind CSS, and Supabase.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    links: {
      preview: 'https://vercel.com/sandeepas-projects-4167a1da/cloud-space-event-website-5eod/CS8j1EQz6tvMTtV4McUrRzTc5QL4',
      github: 'https://github.com/Sandeepa-git/cloudspace-event-website',
    },
  },
] as const;


export const experiencesData = [
  {
    title: 'Bachelor of Science (Honours) — Cloud Computing',
    company: 'Sri Lanka Technology Campus',
    description:
      'Currently completing a B.Sc. Honours in Cloud Computing with emphasis on cloud technologies, DevOps practices, and cybersecurity. Actively developing skills through practical projects and collaborative teamwork.',
    period: '2024-2028',
    technologies: ['AWS', 'Docker', 'Kubernets', 'Python', 'Git', 'CI/CD'],
  },
  {
    title: 'Sub Committee Head - Logistics',
    company: 'IEEE Computer Society, Sri Lanka Technology Campus',
    description:
      'Led the subcommittee for the IEEE Computer Society chapter, organizing events, workshops, and promoting member engagement within the university community.',
    period: '2025 - Present',
    technologies: ['Leadership', 'Event Management', 'Team Coordination'],
  },
  {
    title: 'Frontend developer',
    company: 'IEEE Computer Society of SLTC',
    description: (
      <>
        Build{' '}
        <Link
          className={cn(
            buttonVariants({ variant: 'link' }),
            'm-0 h-fit p-0 text-base'
          )}
          href="https://vercel.com/sandeepas-projects-4167a1da/cloud-space-event-website-5eod/CS8j1EQz6tvMTtV4McUrRzTc5QL4"
          target="_blank"
        >
          cloudspacev1.0
        </Link>{' '}
        website This opportunity advanced my skills in Next.js, React, TypeScript, and Tailwind while sharpening my leadership and project management capabilities.
      </>
    ),
    period: '2024 - present',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Leaflet'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
