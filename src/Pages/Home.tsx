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
    <div className="flex flex-col gap-3">
      <Input className="rounded-xl w-[200px]" placeholder="search" onChange={(e) => handleSearch(e.target.value)} />
      {localComp.map((component) => (
        <Link key={component.name} to={`/component/${component.link}`}>
          {component.name}
        </Link>
      ))}
    </div>
  );
};

export default Home;
