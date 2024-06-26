import Logo from "@/components/custom/logo";
import { MobileNav } from "@/components/custom/mobile-sidebar";
import PatientNavbar from "@/components/custom/patient-navbar";
import SideBar from "@/components/custom/sidebar";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="md:grid h-screen overflow-x-hidden grid-cols-[auto_1fr] grid-rows-[auto_1fr] divide-x-[1px]">
            <div className="col-start-2 col-span-full md:border-l border-b flex items-center md:justify-end justify-between gap-4 md:py-5 md:px-14 p-4">
                <Logo href="/patient" className="md:hidden" />
                <div className="md:hidden">
                    <MobileNav />
                </div>
                <PatientNavbar />
            </div>

            <div className="col-start-1 col-end-2 row-start-1 row-span-full">
                <SideBar />
            </div>
            <div className="col-start-2 col-span-full md:px-11 md:py-8 p-4 overflow-y-auto">{children}</div>
        </div>
    );
}
