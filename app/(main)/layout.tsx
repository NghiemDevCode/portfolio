"use client"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ThemeProvider>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </ThemeProvider>
        </>
    );
}
