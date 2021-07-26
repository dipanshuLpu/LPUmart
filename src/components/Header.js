import React from 'react'
import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"
import { signIn,  signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
    const [session] =  useSession();
    const router = useRouter();
    const items = useSelector(selectItems);



    return (
        <header>
            {/*Top */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0"> 
                    <Image
                    onClick={ ()  => router.push("/")}
                    src="https://www.lpu.in/images/logo/logo-dark.svg"
                    width={200}
                    height={80}
                    objectFit="contain"
                    className="cursor-pointer"
                    />
                </div>

 {/*search*/}
             <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-600 hover:bg-yellow-500">
            <input className="p-2 h-full w-6 flex-grow flex-shrink  rounded-l-md focus:outline-none  px-4" type="text" />
            <SearchIcon className="h-12 p-4" />

            </div>
            {/*right*/}
            <div  className="flex items-center text-xs text-white space-x-6 mx-6 whitespace-nowrap">
                <div 
                onClick={!session ? signIn : signOut}
                className="cursor-pointer link"
                >
                  <p className="hover:underline">
                   {session ? `Hello,  ${session.user.name}` : "Sign In"}
                </p>
                  
                   <p className='font-extrabold md:text-sm'>Account & Lists</p>
                </div>

                <div className="link"> 
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>

                <div onClick= {() => router.push("/checkout")}
                className="relative flex items-center cursor-pointer link"> 
                 <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-600 text-center rounded-full text-white font-bold">{items.length}</span>

                    <ShoppingCartIcon className="h-10" />
                    <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                </div>
            </div>
            </div>

    
 {/*Tbottotm */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white  text-size-sm">
                <p className="flex items-center">
                <MenuIcon className="h-6 mr-1" />
                All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Buisness</p>
                <p className="link">Today's deals</p>.
                <p className="link hidden lg:inline-flex">Electronic</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">health & Personal Care</p>

            
            </div>
        </header>
    )
}

export default Header
