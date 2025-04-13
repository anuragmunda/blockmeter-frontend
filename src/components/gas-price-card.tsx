import { Speed } from "@/lib/types";
import { Separator } from "./ui/separator";
import { formatSmartFloat, getSpeedColor, getTransactionSpeed } from "@/lib/utils";

const GasPriceCard = ({ speed, index }: { speed: Speed | null, index: number }) => {
    return (
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 border rounded-lg px-4 py-6 min-w-full shadow-xs text-white text-center">
            <h2 className="text-lg font-semibold mb-3 tracking-wide">{getTransactionSpeed(index)}</h2>
            <Separator className="mb-4" />
            <div>
                <div className="flex justify-center items-center gap-2">
                    <h2 className={`text-3xl font-bold ${getSpeedColor(getTransactionSpeed(index))}`}>{formatSmartFloat(speed?.maxFeePerGas ?? 0)}</h2>
                    <span className="text-lg tracking-wider font-semibold">GWEI</span>
                </div>
                <p className="mb-4 text-sm">{`$ ${1.2}`}</p>

                <div className="h-5 flex space-x-4 justify-center font-semibold text-sm">
                    <p className="flex-1">{`Base: ${formatSmartFloat(speed?.baseFee ?? 0)} gwei`}</p>
                    <Separator orientation="vertical" />
                    <p className="flex-1">{`Tip: ${formatSmartFloat(speed?.maxPriorityFeePerGas ?? 0)} gwei`}</p>
                </div>
            </div>
        </div>
    );
}

export default GasPriceCard;