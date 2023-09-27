import homeimg from "../Images/explore.jpg";

const Home = () => {
  return (
    <div className="bg-slate-600 flex h-screen items-center justify-center ">
      <h1 className=" text-white  text-center  text-2xl font-bold pt-4 mb-5">
        Welcome 🤝 Please Login to Explore!!
      </h1>
      <div className=" justify-center h-1/2 items-start ">
        {/* <img src={homeimg} className=" h-2/3 w-1/2   " /> */}
      </div>
    </div>
  );
};

export default Home;
