import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Loading wait a minute...`,
};

const Loading = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center gap-3">
      Loading...
    </main>
  );
};

export default Loading;
