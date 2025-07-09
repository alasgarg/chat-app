"use client";

import { Authenticated, AuthLoading, ConvexReactClient, Unauthenticated } from "convex/react";
import { useAuth } from '@clerk/nextjs';
import { ClerkProvider } from '@clerk/nextjs';
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from 'react';
import LoadingLogo from "@/components/ui/shared/LoadingLogo";

type Props = {
  children : React.ReactNode
};

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";

const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({children}: Props) => {
  return <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>

    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <Authenticated>{children}</Authenticated>
      <AuthLoading><LoadingLogo /></AuthLoading>
    </ConvexProviderWithClerk >

    </ClerkProvider>
  ;
}

export default ConvexClientProvider;

// pk_test_Y2xpbWJpbmcta2lkLTczLmNsZXJrLmFjY291bnRzLmRldiQ
