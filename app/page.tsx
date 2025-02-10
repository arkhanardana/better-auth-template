import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button variant={"default"}>Save</Button>
      <Button variant={"destructive"}>Cancel</Button>
    </div>
  );
}
