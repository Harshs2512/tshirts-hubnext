import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Categories = () => {
  const scrollLeft = () => {
    document.getElementById('img').scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    document.getElementById('img').scrollBy({ left: 200, behavior: 'smooth' });
  };

  const categories = [
    { imgSrc: "https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?size=626&ext=jpg&ga=GA1.2.1812261131.1679748520&semt=ais", name: "Category 1" },
    { imgSrc: "https://img.freepik.com/premium-vector/online-cv-application-job-search-concept-with-people-applying-resume-flat-vector_125133-1603.jpg?size=626&ext=jpg&ga=GA1.2.1812261131.1679748520&semt=ais", name: "Category 2" },
    { imgSrc: "https://img.freepik.com/premium-vector/job-interview-online-service-platform-candidate-hr-manager-business-man-woman-table-vector-illustration-conversation-career-human-resource-concept_2175-919.jpg?size=626&ext=jpg&ga=GA1.2.1812261131.1679748520&semt=ais", name: "Category 3" },
    { imgSrc: "https://img.freepik.com/free-vector/choice-worker-concept_23-2148626348.jpg?size=626&ext=jpg&ga=GA1.2.1812261131.1679748520&semt=ais", name: "Category 4" },
    { imgSrc: "https://img.freepik.com/free-vector/recruitment-agency-searching-job-applicants_1262-19873.jpg?size=626&ext=jpg&ga=GA1.2.1812261131.1679748520&semt=ais", name: "Category 5" },
    { imgSrc: "https://img.freepik.com/free-vector/personal-site-concept-illustration_114360-2577.jpg?size=626&ext=jpg&ga=GA1.1.1812261131.1679748520&semt=ais", name: "Category 6" }
  ];

  return (
    <div className='mt-4 md:mt-10 lg:mt-20 max-w-[1800px] px-2 md:px-5 lg:px-10'>
      <h1 className='text-3xl font-bold tracking-widest text-center py-10 text-[#7570ff] mt-9 uppercase'>Categories</h1>
      <div className="flex items-center justify-center">
        <button onClick={scrollLeft} className="m-2 bg-slate-400 text-white font-bold p-4 rounded-full">
          <FiChevronLeft />
        </button>
        <div id="img" className="flex gap-[350px] overflow-x-scroll scroll-smooth scrollbar-hide">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center min-w-[10px]">
              <div className="bg-black p-2 rounded-full overflow-hidden h-80 w-80 flex items-center justify-center">
                <img src={category.imgSrc} alt={category.name} className="h-full w-full object-cover" />
              </div>
              <span className="mt-2 text-black text-center">{category.name}</span>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="m-2 bg-slate-400 text-white font-bold p-4 rounded-full">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Categories;
