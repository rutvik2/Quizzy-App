"use client"

import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { LogOut } from 'lucide-react';
import { User } from 'next-auth'
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from './ui/dropdown-menu';
import UserAvatar from './UserAvatar';

type Props = {
    user: Pick<User, "name" | "image" | "email">;
}

const UserAccountNav = ({user}: Props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar user={user}/>
            {/* user avatar */}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white" align="end">
            <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                    {user.name && <p className='font-medium'>{user.name}</p>}
                    {user.email && (
                        <p className='w-[200px] truncate text-sm text-zinc-700'>
                            {user.email}
                        </p>
                    )}
                </div>
            </div>

            <DropdownMenuSeparator/>
            <DropdownMenuItem asChild>
                <Link href='/'>M</Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator/>
            <DropdownMenuItem onClick = {(e: { preventDefault: () => void; })=>{
                e.preventDefault();
                signOut().catch(console.error);
            }}
            className="text-red-600 cursor-pointer">
                Sign Out
                <LogOut className='w-4 h-4 ml-2'/>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
} 

export default UserAccountNav