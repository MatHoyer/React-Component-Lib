type TCopyAreaParams = {
  text: string;
};

const TextArea: React.FC<TCopyAreaParams> = ({ text }) => {
  return (
    <div className="rounded-xl border bg-gray-800 px-4 py-4">
      <pre className="break-words whitespace-pre-wrap">{text}</pre>
    </div>
  );
};

export default TextArea;
