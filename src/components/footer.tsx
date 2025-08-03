import { Button } from '@/components/button';
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t pt-4 pb-6 px-4 text-muted-foreground text-sm flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-center md:text-left">
        © {currentYear}{' '}
        <Button variant="link" className="p-0 font-medium text-muted-foreground hover:underline">
          <a href="https://github.com/Sandeepa-git" target="_blank" rel="noopener noreferrer">
            Sandeepa Wimalasiri
          </a>
        </Button>
        . All rights reserved.
      </div>

      <div className="flex gap-4 justify-center">
        <a href="https://github.com/Sandeepa-git" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 hover:text-foreground transition" />
        </a>
        <a href="https://www.linkedin.com/in/sandeepa-wimalasiri/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 hover:text-foreground transition" />
        </a>
        <a href="https://web.facebook.com/sandeepa.vimukthi.12" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-5 h-5 hover:text-foreground transition" />
        </a>
        <a href="https://www.instagram.com/_p_a_t_h_f_i_n_d_e_r_/" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 hover:text-foreground transition" />
        </a>
      </div>
    </footer>
  );
};
