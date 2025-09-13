import logo from "@/assets/logo2.png"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { Separator } from "./ui/separator"
import Link from "next/link"

const MainFooter = () => {
    return (
        <footer className="min-w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-10 px-5 border-t-1 border-t-white/20">
            <div className="container mx-auto px-4 flex flex-col justify-between items-center">
                <div className="flex flex-col items-center md:flex-row md:justify-between w-full">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <Image src={logo} alt="Logo" width={70} height={70} />
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text tracking-widest bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            BLOCKMETER
                        </h3>
                    </div>
                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <Link href="https://github.com/AnuragMunda" className="text-slate-300 hover:text-indigo-400 transition-colors p-2 bg-slate-800/50 rounded-full">
                            <Github size={20} />
                        </Link>
                        <Link href="https://x.com/0xShenigun" className="text-slate-300 hover:text-indigo-400 transition-colors p-2 bg-slate-800/50 rounded-full">
                            <Twitter size={20} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/anuragmunda/" className="text-slate-300 hover:text-indigo-400 transition-colors p-2 bg-slate-800/50 rounded-full">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </div>

                <Separator className="bg-white/20 my-6" />

                {/* Copyright Section */}
                <div className="text-sm text-gray-400 font-semibold flex flex-col items-center gap-3">
                    <span className="text-base">© {new Date().getFullYear()} Blockmeter. All rights reserved.</span>
                    {/* <span className="flex items-center gap-2">Made with <Heart size={14} className="text-red-500 fill-red-500" /></span> */}
                </div>
            </div>
        </footer>
    )
}

export default MainFooter