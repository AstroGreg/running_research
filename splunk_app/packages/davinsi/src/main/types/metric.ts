interface Metric {
    kilometer: number;
    exertion: number;
    gym: number;
}

interface DailyMetric {
    day: number;
    metrics: Metric[];
}

export { Metric, DailyMetric}