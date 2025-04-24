"use client";

import Link from "next/link";
import styles from "@/styles/Nav.module.css";
import NavClient from "./NavClient";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  const dash =
    pathname.startsWith("/admin") || pathname.startsWith("/dashboard");
  return (
    <nav className="w-full lg:px-6">
      {/* <AuthProvider> */}
      {/* <div className={styles.height}></div> */}
      <div className={styles.navbarItems}>
        <span className={styles.navbarLogo}>
          <Link
            href="/"
            className={`${
              !!dash && "lg:hidden"
            } logo px-2 font-semibold flex justify-center flex-col items-center gap-0`}
          >
            <div className="h-4">Capital</div>
            <div>Springs Bank</div>
          </Link>
        </span>
        {/* TODO */}
        <NavClient />
      </div>
      {/* </AuthProvider> */}
    </nav>
  );
};

export default Nav;
