"use client";

import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link, usePathname } from "@/i18n/navigation";
import { MdGTranslate } from "react-icons/md";
import { Button } from "./ui/button";

export default function LanguageToggle() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <MdGTranslate />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href={pathname} locale="pt">
          <DropdownMenuItem>
            <Image
              src="flags/br.svg"
              alt="Portuguese flag"
              width={20}
              height={15}
              style={{ marginRight: "8px" }}
            />
            Portuguese
          </DropdownMenuItem>
        </Link>
        <Link href={pathname} locale="en">
          <DropdownMenuItem>
            <Image
              src="flags/gb.svg"
              alt="English flag"
              width={20}
              height={15}
              style={{ marginRight: "8px" }}
            />
            English
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
