import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userContext } from "@/store/userContext";
import { useContext, useState } from "react";
import { toast } from "sonner";

const Home = () => {
  const { users, setUsers } = useContext(userContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      toast.error("Please enter your name and email.");
      return;
    }

    setUsers([...users, { name, email }]);
    setName("");
    setEmail("");
    toast.success("User registered successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-[300px] border p-2 flex flex-col gap-2 rounded-md">
        <h1 className="text-center text-2xl font-bold mb-5">User Registration</h1>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="name"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button
          className="w-fit self-end"
          // disabled={!name || !email}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Home;
