const MainSection = ({ breadcrumb, title }) => {
  return (
    <main className="py-5 bg-black text-white flex flex-col items-center justify-center">
      <span className="uppercase leading-[75.2px] text-center">
        {" "}
        <span className="text-gray-400">home</span> &gt;{breadcrumb}
      </span>
      <p className="text-[28px] uppercase font-bold leading-[75.2px] md:tracking-[35.6px] text-center">
        {title}
      </p>
    </main>
  );
};

export default MainSection;
