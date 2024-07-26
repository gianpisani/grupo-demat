import { FaInstagram, FaMessage } from "react-icons/fa6"
import Link from "next/link"
import { MountainIcon } from "lucide-react"
export default function Footer(){
    return (
        <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 px-4 md:flex-row md:px-6">
          <div className="flex items-center">
            <MountainIcon className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">Grupo DEMAT</span>
            <span className="ml-2 text-sm">© 2024</span>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground" prefetch={false}>
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground" prefetch={false}>
              <FaMessage className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-fore" prefetch={false} />
          </div>
        </div>
      </footer>
    )
}