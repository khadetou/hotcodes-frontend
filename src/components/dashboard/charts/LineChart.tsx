import React, { useRef, useEffect, FC } from "react";

import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";

// Import utilities
import { tailwindConfig, formatValue } from "@/utils/Utils";

Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
);

interface LineChartProps {
  data: any;
  width: any;
  height: any;
}
const LineChart: FC<LineChartProps> = ({ data, width, height }) => {
  const canvas = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx!, {
      type: "line",
      data: data,

      options: {
        // chartArea: {
        //   backgroundColor: tailwindConfig().theme.colors.slate[50],
        // },
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            display: false,
            beginAtZero: true,
          },
          x: {
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
            },
            display: false,
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              // Disable tooltip title
              label: (context) => formatValue(context.parsed.y),
            },
          },
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvas} width={width} height={height}></canvas>;
};

export default LineChart;
