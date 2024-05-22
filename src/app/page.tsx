import Image from "next/image";

// Page Compnents
import Login from '@/components/pages/Login';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
     <Login/>
    </main>
  );
}
