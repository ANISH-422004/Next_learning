import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {

  const snippits = await prisma.snippet.findMany();
  console.log("snippits", snippits);

  return (
    <div className="flex flex-col items-center  min-h-screen p-4 ">
      <Link href={"/snippit/new"} className="flex flex-col items-center justify-center w-full h-full">
        <Button className="text-white">create</Button>
      </Link>

      {snippits.length === 0 ? <h1 className="font-mono text-lg">No Snippits Found</h1> :
        snippits.map((snippit) => (
          <div key={snippit.id} className="flex  items-center justify-between w-full h-full p-2 border-2">
            <h1 className="font-mono text-lg">{snippit.title}</h1>
            <Button className="text-white">
              <Link href={`/snippit/${snippit.id}`}>View</Link>
            </Button>
          </div>
        ))
      }

    </div>
  );
}
