import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <form className="flex flex-col gap-4">
        <h1 className='text-center'>create app</h1>
        <Input placeholder="App name" />
        <Textarea name="description" placeholder="Description" />
        <Button type="submit">Click me</Button>
      </form>
    </div>
  );
}
