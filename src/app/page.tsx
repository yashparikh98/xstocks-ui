"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { HomeLoggedOut } from "@/components/home/HomeLoggedOut";
import { HomeLoggedIn } from "@/components/home/HomeLoggedIn";

export default function HomePage() {
  const { connected } = useWallet();

  return connected ? <HomeLoggedIn /> : <HomeLoggedOut />;
}
