import { Input } from '@/components/ui/input';
import { components } from '@/globals';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [localComp, setLocalComp] = useState(components);

  const handleSearch = (search: string) => {
    setLocalComp(components.filter((component) => component.name.toLocaleLowerCase().includes(search)));
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <Input className="rounded-xl w-[200px]" placeholder="search" onChange={(e) => handleSearch(e.target.value)} />
      {localComp.map((component) => (
        <Link key={component.name} to={`/component/${component.link}`}>
          <div className="flex justify-center border rounded-xl px-4 py-4 w-[250px] hover:bg-primary-foreground">
            {component.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
