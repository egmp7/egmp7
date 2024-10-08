interface LoadingProps {
  width?: string;  // Optional width prop
  height?: string; // Optional height prop
}

const Loading: React.FC<LoadingProps> = ({ width = 'w-12', height = 'h-12' }) => {
  return (
    <div className={`flex items-center justify-center ${width} ${height}`}>
      <div className={`border-8 border-t-8 border-gray-300 border-t-blue-500 rounded-full animate-spin ${width} ${height}`}></div>
    </div>
  );
};

export default Loading;