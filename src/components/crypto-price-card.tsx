
const ethPrice = {
    symbol: 'ETH',
    price: 2000,
    logo: '💸'
}

const CryptoPriceCard = () => {

    return (
        <div className="bg-gradient-to-br from-indigo-500 to-purple-60 shadow-md rounded-lg min-w-2.5 px-4 py-1 flex items-center">
            <span className="text-base font-bold">{ethPrice.logo}</span>
            <div className="ml-2 flex flex-col justify-center">
                <div className="flex">
                    <span className="text-base font-semibold mr-1">{ethPrice.symbol}</span>
                    <div className="text-white text-base font-bold">
                        ${ethPrice.price}
                    </div>
                </div>
                <span className="text-xs">3.14%</span>
            </div>
        </div>
    )
}

export default CryptoPriceCard;