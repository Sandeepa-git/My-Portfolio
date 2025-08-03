import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';

import { Button } from '@/components/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-muted-foreground flex w-full flex-col items-center justify-between gap-4 border-t px-4 pb-6 pt-4 text-sm md:flex-row">
      <div className="text-center md:text-left">
        © {currentYear}{' '}
        <Button
          variant="link"
          className="text-muted-foreground p-0 font-medium hover:underline"
        >
          <a
            href="https://github.com/Sandeepa-git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sandeepa Wimalasiri
          </a>
        </Button>
        . All rights reserved.
      </div>

      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/Sandeepa-git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="hover:text-foreground size-5 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/sandeepa-wimalasiri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="hover:text-foreground size-5 transition" />
        </a>
        <a
          href="https://web.facebook.com/sandeepa.vimukthi.12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="hover:text-foreground size-5 transition" />
        </a>
        <a
          href="https://www.instagram.com/_p_a_t_h_f_i_n_d_e_r_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="hover:text-foreground size-5 transition" />
        </a>
      </div>
    </footer>
  );
};
