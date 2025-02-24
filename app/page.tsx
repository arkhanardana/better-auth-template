import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex mx-32 justify-center items-center flex-col h-screen">
      <h1 className="text-7xl font-bold mb-8">Hello World</h1>
      <Button variant={"default"} className="max-w-20">
        Hello!
      </Button>
    </div>
  );
}
