import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Loading wait a minute...`,
};

const Loading = () => {
  return <main className="flex h-screen w-full items-center justify-center gap-3">Loading...</main>;
};

export default Loading;
