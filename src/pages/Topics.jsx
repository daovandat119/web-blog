import { useState } from "react";
import { ChevronRight } from "lucide-react"; 

const Topics = () => {
  const blogPosts = [
    {
      id: 1,
      category: "PDF Tools",
      subCategory: "Software Reviews",
      title: "I Tested +30 PDF editors for Windows | Here Are The 8 Best",
      author: "Aron Kantor",
      date: "February 6, 2025",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project...",
      image: "/src/assets/anh1.webp",
    },
    {
      id: 2,
      category: "PDF Tools",
      subCategory: "Software Reviews",
      title: "I Tested +30 PDF editors for Windows | Here Are The 8 Best",
      author: "Aron Kantor",
      date: "February 6, 2025",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project...",
      image: "/src/assets/anh1.webp",
    },
    {
      id: 3,
      category: "PDF Tools",
      subCategory: "Software Reviews",
      title: "I Tested +32 PDF editors for Windows | Here Are The 8 Best",
      author: "Aron Kantor",
      date: "February 6, 2025",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project...",
      image: "/src/assets/anh1.webp",
    },
    {
      id: 4,
      category: "PDF Tools",
      subCategory: "Software Reviews",
      title: "I Tested +30 PDF editors for Windows | Here Are The 8 Best",
      author: "Aron Kantor",
      date: "February 6, 2025",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project...",
      image: "/src/assets/anh1.webp",
    },
    {
      id: 4,
      category: "PDF Tools",
      subCategory: "Software Reviews",
      title: "I Tested +30 PDF editors for Windows | Here Are The 8 Best",
      author: "Aron Kantor",
      date: "February 6, 2025",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project...",
      image: "/src/assets/anh1.webp",
    },
    {
      id: 4,
      category: "PDF Tools",
      subCategory: "Software Reviews",
      title: "I Tested +30 PDF editors for Windows | Here Are The 8 Best",
      author: "Aron Kantor",
      date: "February 6, 2025",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project...",
      image: "/src/assets/anh1.webp",
    },
    {
      id: 4,
      category: "PDF Tools",
      subCategory: "Software Reviews",
      title: "I Tested +30 PDF editors for Windows | Here Are The 8 Best",
      author: "Aron Kantor",
      date: "February 6, 2025",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project...",
      image: "/src/assets/anh1.webp",
    },
    {
      id: 4,
      category: "PDF Tools",
      subCategory: "Software Reviews",
      title: "I Tested +30 PDF editors for Windows | Here Are The 8 Best",
      author: "Aron Kantor",
      date: "February 6, 2025",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project...",
      image: "/src/assets/anh1.webp",
    },
  ];
  
  const POSTS_PER_PAGE = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const displayedPosts = blogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="container mx-auto ">
      <div className="w-full bg-[#edf2f7]">
        <h1 className="text-[40px] font-bold py-15 lg:py-10 pl-5 lg:pl-20">Blog</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 lg:mt-15 mx-5 lg:mx-20">
        {displayedPosts.map((post) => (
          <div key={post.id} className="shadow-lg rounded-lg pb-10 bg-white">
            <img
              src={post.image}
              alt="featured"
              className="w-full h-[250px] object-cover rounded-t-lg"
            />
            <div className="px-6 py-4">
              <h5 className="text-xs text-[#3182ce] font-bold uppercase">
                {post.category} | {post.subCategory}
              </h5>
              <h2 className="text-xl font-bold my-2 hover:text-[#3182ce]">
                {post.title}
              </h2>
              <h5 className="text-sm text-gray-500">
                By {post.author} - {post.date}
              </h5>
              <p className="text-gray-700 mt-2">{post.content}</p>
              <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                READ MORE →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2 my-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1 bg-gray-300 rounded disabled:opacity-50"
        >
          <ChevronRight size={24} className="text-gray-600 rotate-180 w-5 h-5" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (page, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 mx-1 rounded ${
                currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1 bg-gray-300 rounded disabled:opacity-50"
        >
          <ChevronRight size={24} className="text-gray-600 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Topics;
