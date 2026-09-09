import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/Button";
import { db } from "@/server/db/db";

export default async function Home() {
  const users = db.query.usersTable.findMany();


  return (
    <div className="h-screen flex justify-center items-center ">
      <form className="flex flex-col gap-4">
        <h1 className='text-center'>create app</h1>
        <Input placeholder="App name" />
        <Textarea name="description" placeholder="Description" />
        <Button type="submit">Click me</Button>
        <div>
          {(await users).map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
