import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-[300px] border p-2 flex flex-col gap-2 rounded-md">
        <h1 className="text-center font-bold">User Registration</h1>
        <Input type="text" name="name" placeholder="Enter your name" />
        <Input type="email" name="email" placeholder="Enter your email" />
        <Button className="w-fit self-end">Submit</Button>
      </form>
    </div>
  );
};

export default Home;
