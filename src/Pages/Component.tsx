import CopyArea from '@/components/CopyArea';
import TextArea from '@/components/TextArea';
import { components } from '@/globals';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const Component = () => {
  const { name } = useParams();
  if (!name) return <NotFound />;

  const component = components.find((component) => component.link === name);
  if (!component) return <NotFound />;

  return (
    <div className="flex flex-col gap-5">
      <div className="text-3xl">{component.name}</div>
      <TextArea text={component.description} />
      {component.element}
      {!!component.needed.length && (
        <div className="flex flex-col gap-3">
          <p className="text-xl">Packages needed</p>
          <TextArea text={component.needed.join('\n')} />
        </div>
      )}
      <CopyArea text={component.text} />
    </div>
  );
};

export default Component;
