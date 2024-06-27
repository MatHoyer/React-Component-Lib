import { Clipboard } from 'lucide-react';
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
    <div className="relative rounded-xl border bg-primary-foreground px-4 py-4">
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

export default CopyArea;
