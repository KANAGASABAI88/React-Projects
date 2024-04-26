




const HeartButton = () => {
  return (
    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l-1.106-.553C5.333 15.614 2 12.02 2 8c0-3.313 2.687-6 6-6 2.09 0 3.937 1.058 5.014 2.672C14.063 3.058 15.91 2 18 2c3.313 0 6 2.687 6 6 0 4.02-3.333 7.614-8.894 11.447L12 20z"></path>
      </svg>
      Like
    </button>
  );
};

export default HeartButton;
