'use client';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className = "bg-neutral-200/30 py-2 flex flex-row-reverse justify-around items-center">
                <div>
                    <Link href = '/'>
                        <img src = "/logoBrandTrans.png" width = '150px' alt = "teccctt | exclusive brand of sadra nafe" />
                    </Link>
                </div>

                <div className = "flex gap-5">
                    <Link href = "/" className = "p-2 px-3 border-b border-transparent hover:border-blue-500 transition-all">خانه</Link>
                    <Link href = "/products" className = "p-2 px-3 border-b border-transparent hover:border-blue-500 transition-all">محصولات</Link>
                    <Link href = "/about-us" className = "p-2 px-3 border-b border-transparent hover:border-blue-500 transition-all">درباره ما</Link>
                </div>
                
                <div className = "flex flex-row-reverse gap-3 items-center">
                    <Link href = '/auth/register' className = "px-3 p-1.5 backdrop-blur-md bg-white/30 hover:bg-white/60 border border-white/65 rounded-lg">ثبت نام</Link>
                    <Link href = '/auth/login' className = "bg-blue-500 px-4 p-1.5 rounded-md text-white hover:bg-blue-900 transition-all">ورود</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;