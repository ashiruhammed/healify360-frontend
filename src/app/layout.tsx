import type { Metadata } from "next";
import { Inter as FontSans, Caveat_Brush as CaveatSans, Chakra_Petch as Petch } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/provider/theme-provider";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontCaveatSans = CaveatSans({
    subsets: ["latin"],
    variable: "--font-caveat-sans",
    weight: "400",
});
const fontPetch = Petch({
    subsets: ["latin"],
    variable: "--font-petch",
    weight: "600",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("font-sans", fontSans.variable, fontCaveatSans.variable, fontPetch.variable)}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
