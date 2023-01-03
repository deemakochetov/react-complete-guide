import './Chart.css';
import ChartBar from './ChartBar';

function Chart({ dataPoints }) {
  const maxValue = dataPoints.reduce(
    (previousValue, currValue) => Math.max(previousValue, currValue.value),
    0
  );
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
