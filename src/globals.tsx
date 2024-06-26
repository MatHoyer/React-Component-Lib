import CopyArea from './components/CopyArea';
import { NavBar } from './components/Navbar';
import TextArea from './components/TextArea';

export const components = [
  {
    name: 'Copy Area',
    link: 'copy-area',
    description: `A bordered div that take text as parameter, with a clipboard logo at the top left to copy the content`,
    needed: [],
    element: <CopyArea text={'Exemple'} />,
    text: `import { Clipboard } from 'lucide-react';
import { useState } from 'react';

type TCopyAreaParams = {
  text: string;
};

const CopyArea: React.FC<TCopyAreaParams> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    setCopied(true);
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setTimeout(() => setCopied(false), 500);
  };

  return (
    <div className="relative rounded-xl border bg-gray-800 px-4 py-4">
      <pre className="break-words whitespace-pre-wrap">{text}</pre>
      <div className="absolute top-0 right-0 p-4">
        <Clipboard
          className="cursor-pointer"
          color={(copied && 'green') || 'white'}
          size={20}
          onClick={copyToClipboard}
        />
      </div>
    </div>
  );
};

export default CopyArea;`,
  },
  {
    name: 'Text Area',
    link: 'text-area',
    description: `A bordered div that take text as parameter`,
    needed: [],
    element: <TextArea text={'Exemple'} />,
    text: `type TCopyAreaParams = {
  text: string;
};

const TextArea: React.FC<TCopyAreaParams> = ({ text }) => {
  return (
    <div className="rounded-xl border bg-gray-800 px-4 py-4">
      <pre className="break-words whitespace-pre-wrap">{text}</pre>
    </div>
  );
};

export default TextArea;`,
  },
  {
    name: 'Navbar',
    link: 'navbar',
    description: `A navbar that take a routes tab like:
routes = [
  {
    name: string,
    path: string,
    element: JSX.Element,
  },
];`,
    needed: ['react-router-dom'],
    element: <NavBar />,
    text: `import { routes } from '...';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex sticky items-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full h-14 container">
        <div className="mr-4 flex items-center">
          <nav className="flex items-end space-x-6 text-md font-medium">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) =>
                  cn('transition-colors hover:text-foreground/80 text-foreground/60', isActive && 'text-foreground')
                }
              >
                {route.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;`,
  },
];
