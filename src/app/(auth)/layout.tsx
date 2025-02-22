"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";


interface AuthLayoutProps {
    children: React.ReactNode;
};

const AuthLayout = ({ children}:AuthLayoutProps) => {
    const pathname = usePathname();

    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <Image src = "/Stojeft Image.png" alt="logo" width={152} height={56} />
                        <Button variant="secondary">
                            {pathname === "/sign-in"? "Sign Up" : "Login"}
                        </Button>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
        );
}   

export default AuthLayout;