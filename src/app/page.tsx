import Image from "next/image";
import { Search } from "@/components/component/search";
import { Chat } from "@/components/component/chat";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Search />
    </main>
  );
}
