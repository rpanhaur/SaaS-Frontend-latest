
"use client"

import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../store/store"; // ✅ Make sure this path matches your structure
import "./globals.css";
import Navbar from "@/lib/components/nvabar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}

