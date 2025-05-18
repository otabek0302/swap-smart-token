'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import { logo } from '@/assets';

export function MobileMenu() {
  return (
    <div className="block md:hidden">
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon" className="cursor-pointer">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader className="flex flex-col items-center gap-2 border-b px-4 py-0">
            <DrawerTitle className="flex items-center gap-2">
              <Image src={logo} alt="logo" width={70} height={70} />
            </DrawerTitle>
          </DrawerHeader>

          {/* Add your menu items here */}
          <div className="px-4 py-4 space-y-4">
            <Button variant="ghost" className="w-full border cursor-pointer" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" className="w-full border cursor-pointer" asChild>
              <Link href="/swap">Swap</Link>
            </Button>
            <Button variant="ghost" className="w-full border cursor-pointer" asChild>
              <Link href="/developers">Developers</Link>
            </Button>
            <Button variant="ghost" className="w-full border cursor-pointer" asChild>
              <Link href="/features">Features</Link>
            </Button>
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="ghost" className="border cursor-pointer">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
