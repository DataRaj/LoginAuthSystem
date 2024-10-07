const FormTitle = ({ content }: { content: string }) => {
  return (
    <h2 className="h-10 text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
      {content}
    </h2>
  );
};

export default FormTitle;
