import { NumberTicker } from "@/components/magicui/number-ticker";

function Stat() {
  const stats = [
    { number: 500, label: "Happy Clients",end:'+' },
    { number: 10, label: "Years Experience",end:'+' },
    { number: 1000, label: "Projects Completed",end:'+' },
    { number: 99, label: "Client Satisfaction",end:'%' },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center text-white">
            <div className="text-4xl md:text-6xl font-bold mb-2 text-white">
              <NumberTicker
                value={stat.number}
                startValue={0}
                className="text-white"
              />{stat.end}
            </div>
            <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stat;
