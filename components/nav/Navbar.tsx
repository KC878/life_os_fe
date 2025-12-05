"use client"

import Link from 'next/link'
import React from 'react'
import { LogOut, Moon, Settings, Sidebar, Sun, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button'
import { useTheme } from "next-themes"
import { SidebarTrigger } from '../ui/sidebar'

const DEFAULT_ITEM_STYLE = "h-[1.2rem] w-[1.2rem] m4-2";

const Navbar = () => {

  const { setTheme } = useTheme();
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* LEFT */}
      <SidebarTrigger className='hover:cursor-pointer' />

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href='/'>Dashboard</Link>

        {/* THEME MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* USER MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://share.google/aQmKhlNYauPnw8vQs" />
              <AvatarFallback>LF</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className={DEFAULT_ITEM_STYLE} />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className={DEFAULT_ITEM_STYLE} />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant='destructive'>
              <LogOut className={DEFAULT_ITEM_STYLE} />
              Logout
            </DropdownMenuItem>


          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default Navbar