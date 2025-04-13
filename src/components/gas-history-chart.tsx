"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { GasPriceHistoryPayload } from "@/lib/types"

const GasHistoryChart = ({ histories }: { histories: Array<GasPriceHistoryPayload> | [] }) => {
  const chartData = () => {
    const sortedHistories = histories.slice().reverse();
    const newData = sortedHistories.map((history) => {
      // Format
      const formatted = new Date(history.timestamp)
        .toISOString()
        .replace('T', ' ')
        .slice(0, 16);

      return {
        gasPrice: history.gasPrice.close,
        timestamp: formatted,
      }
    })
    return newData
  }

  const chartConfig = {
    gasPrice: {
      label: "Gas Price",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

  return (
    <Card className="bg-black rounded-lg border-3 border-indigo-500">
      <CardHeader className="flex flex-col items-center text-white">
        <CardTitle className="text-2xl font-bold tracking-tight pb-1.5 border-b-6 border-b-indigo-500 my-2">gas price history</CardTitle>
        <CardDescription className="text-base text-white/70 mb-4">
          Showing gas prices for last 3 days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData()}
            margin={{
              left: 4,
              right: 12,
            }}

          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="timestamp"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
              className="md:text-base font-bold"
            />
            <YAxis
              dataKey="gasPrice"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={6}
              className="md:text-base font-bold"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="gasPrice"
              type="natural"
              fill="var(--color-gasPrice)"
              fillOpacity={0.4}
              stroke="var(--color-gasPrice)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default GasHistoryChart