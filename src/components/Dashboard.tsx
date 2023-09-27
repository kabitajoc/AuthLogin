import img1 from "../Images/dashboard.jpg";

const Dashboard = () => {
  return (
    <div className=" p-8  justify-center flex gap-10 items-center bg-slate-600">
      <img className=" w-1/2 h-3/2   opacity-50" src={img1} />
      <h1 className=" font-mono  text-white text-4xl  h-3/2  tracking-widest leading-10 font-extrabold">
        We are now connected ❤️
        <br />
        <span>Welcome to our Dashboard</span>
      </h1>
    </div>
  );
};

export default Dashboard;
