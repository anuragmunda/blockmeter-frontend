import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const FAQ = () => {

    const faqContent = [
        {
            id: 1,
            question: "❓ What is this tool for?",
            answer: "Gas Analyzer helps you monitor, analyze, and predict gas fees across major EVM-compatible blockchains. It shows real-time gas prices, historical trends, and estimated costs for common transactions—so you can save money and optimize your timing."
        },
        {
            id: 2,
            question: "⚙️ How often is the gas price data updated?",
            answer: "Gas prices are updated every minute, synced with a backend cron job that fetches fresh data from reliable third-party APIs."
        },
        {
            id: 3,
            question: "📈 Where does the historical gas data come from?",
            answer: "We use Owlracle API to fetch historical gas price data. This helps generate accurate trend charts for the last 24 hours and beyond."
        },
        {
            id: 4,
            question: "🌍 Which chains are supported?",
            answer: "Currently supported chains: Ethereum, Arbitrum, Optimism, Polygon, Avalanche, Base, Fantom, Cronos, Aurora, Celo, Linea, Blast, Mantle, Harmony, PulseChain, and Fuse."
        },
        {
            id: 5,
            question: "🔄 Why do I see “0.00 Gwei” sometimes?",
            answer: "This happens when gas prices are extremely low (e.g. 3.4e-8). We format numbers with dynamic precision to preserve meaningful digits—even for very small values."
        },
        {
            id: 6,
            question: "🛠 What is “base fee” and how is it different from max or priority fee?",
            answer: "This happens when gas prices are extremely low (e.g. 3.4e-8). We format numbers with dynamic precision to preserve meaningful digits—even for very small values."
        },
        {
            id: 7,
            question: "📊 What data does the gas trend chart use?",
            answer:
                "The gas trend chart only uses the 'close' value of each interval to provide a smooth and realistic trend over time.",
        },
    ]

    return (
        <Accordion className="text-white md:px-6 min-w-full" type="single" collapsible>
            {
                faqContent.map((item) => (
                    <AccordionItem className="py-5 md:py-8 border-b-1" key={item.id} value={`item-${item.id}`}>
                        <AccordionTrigger className="text-lg font-bold cursor-pointer">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base">{item.answer}</AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    );
}

export default FAQ;