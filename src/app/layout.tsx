import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MailPickLogo from '@/image/Logo/MailPick_Logo.png'
import Image from "next/image";


export const metadata: Metadata = {
  title: "MailPick",
  description: "MailPick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <nav className="p-3 flex justify-between shadow-sm fixed w-full">
          <div className="flex items-center ml-20">
            <Image className="w-14 h-14" src={MailPickLogo} alt="MailinLogo"/>
            <span className="pt-2 text-3xl"><b>MailPick</b></span>
          </div>
          <div className="flex items-center mr-20">
            <a className="p-3"><b>시작하기</b></a>
            <a className="p-3"><b>플랜 및 가격</b></a>
            <a className="p-3"><b>고객지원</b></a>
            <svg className="mr-16" width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7212 2.43127L8.19735 8.95517C8.10643 9.0464 7.99841 9.11878 7.87946 9.16818C7.76051 9.21757 7.63298 9.24299 7.50418 9.24299C7.37539 9.24299 7.24786 9.21757 7.12891 9.16818C7.00996 9.11878 6.90193 9.0464 6.81102 8.95517L0.287118 2.43127C0.10328 2.24743 -2.73941e-09 1.99809 0 1.7381C2.73941e-09 1.47811 0.10328 1.22878 0.287118 1.04494C0.470957 0.861099 0.720296 0.757819 0.980283 0.757819C1.24027 0.757819 1.48961 0.861099 1.67345 1.04494L7.505 6.87649L13.3366 1.04412C13.5204 0.860284 13.7697 0.757004 14.0297 0.757004C14.2897 0.757004 14.539 0.860284 14.7229 1.04412C14.9067 1.22796 15.01 1.4773 15.01 1.73729C15.01 1.99727 14.9067 2.24661 14.7229 2.43045L14.7212 2.43127Z" fill="black"/>
            </svg>
            <button className="py-3 px-7 bg-main-color text-white rounded-full"><b>Download</b></button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
