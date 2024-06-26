import { components } from '@/globals';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col gap-3">
      {components.map((component) => (
        <Link key={component.name} to={`/component/${component.link}`}>
          {component.name}
        </Link>
      ))}
    </div>
  );
};

export default Home;
