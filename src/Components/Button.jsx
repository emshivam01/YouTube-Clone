const Button = ({ title }) => {
  return (
    <div>
      <button className="px-4 py-1 bg-gray-200 hover:bg-gray-300 transition duration-200 text-black rounded-lg whitespace-nowrap">
        {title}
      </button>
    </div>
  );
};

export default Button;
