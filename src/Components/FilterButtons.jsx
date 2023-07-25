import Button from "./Button";

const FilterButtons = () => {
  const filters = [
    "All",
    "Mixes",
    "Music",
    "Crickets",
    "Technology",
    "Computer Science",
    "GeoPolitics",
    "War",
    "Podcasts",
    "Javascript",
    "Tourism",
  ];

  return (
    <div className=" w-full my-2 mt-4 px-4 flex items-center gap-2 rounded overflow-scroll no-scrollbar select-none  ">
      {filters.map((filter, index) => (
        <Button title={filter} key={index} />
      ))}
    </div>
  );
};

export default FilterButtons;
