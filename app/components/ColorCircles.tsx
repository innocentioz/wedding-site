export default function ColorCircles() {
    const colors = [
      { color: "#696E58" },
      { color: "#9EBB8D" },
      { color: "#9A9B89" },
      { color: "#B9847E" },
      { color: "#FEDADA" },
      { color: "#FFE4E6" },
    ];
  
    return (
      <div className="grid grid-cols-2 gap-4">
        {colors.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-16 h-16 rounded-full transition-all duration-250 hover:scale-110 hover:shadow-lg cursor-pointer"
              style={{ backgroundColor: item.color }}
            ></div>
          </div>
        ))}
      </div>
    );
  }