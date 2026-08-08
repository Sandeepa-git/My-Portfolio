import './globals.css';
import Sidebar from '@/components/Sidebar';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata = {
  title: 'Sandeepa Wimalasiri | Portfolio',
  description: 'Portfolio of Sandeepa Wimalasiri, Cloud Computing Undergraduate and Associate Microsoft Student Ambassador.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Sidebar />
          <main className="main-content">
            {children}
          </main>
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}
