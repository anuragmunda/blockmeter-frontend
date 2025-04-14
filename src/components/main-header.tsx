import logo from '@/assets/logo.png';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import ChainSelector from './chain-selector';

const MainHeader = () => {

    return (
        <header className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white min-h-screen min-w-full px-4 py-1">
            <div className='flex justify-between items-center'>
                <Image src={logo} alt="Logo" width={90} height={90} />
                {/* <CryptoPriceCard /> */}
            </div>

            {/* Header Content */}
            <div className='mt-12 flex flex-col items-center min-w-full'>
                <div className='flex flex-col items-center'>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-4 mb-2 tracking-widest opacity-65 shadow-2xl">BLOCKMETER</h1>
                    <h2 className='text-xl font-extralight text-center opacity-65 shadow-2xl'>Gas Price Analyzer Tool</h2>
                    <p className="text-lg text-center mt-5 opacity-90 md: max-w-[65%]">Track real-time gas prices and historical trends across multiple ethereum-based blockchains</p>
                </div>

                {/* Chain selection menu */}
                <div className='flex w-full justify-center items-center mt-12 text-white'>
                    <ChainSelector />
                </div>

                {/* Scroll down button */}
                <div
                    className="mt-20 flex items-center gap-2 px-4 py-2 text-white rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all animate-bounce"
                >
                    <span>View Gas Prices</span>
                    <ArrowDown className="h-4 w-4" />
                </div>
            </div>
        </header>
    )
}

export default MainHeader;