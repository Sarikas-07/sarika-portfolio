/** Layered gradients, a faint grid and a sparse "neural" node map. Pure CSS/SVG, decorative only. */
const nodes = [
  [120, 140], [310, 90], [470, 220], [640, 120], [820, 250], [980, 150], [1090, 330],
  [210, 360], [400, 440], [590, 380], [760, 520], [940, 470], [150, 600], [350, 700], [560, 620], [880, 690],
];
const links = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [0, 7], [7, 8], [8, 2], [8, 9], [9, 4], [9, 10], [10, 11], [11, 6],
  [7, 12], [12, 13], [13, 14], [14, 9], [14, 15], [15, 11],
];

export function AIBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[560px] w-[560px] animate-drift rounded-full bg-electric/20 blur-[120px]" />
      <div className="absolute -right-32 top-1/4 h-[520px] w-[520px] animate-drift rounded-full bg-iris/20 blur-[130px] [animation-delay:-9s]" />
      <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-electric/10 blur-[110px]" />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 60% 40%, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 60% 40%, black 10%, transparent 70%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {links.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="rgba(141,184,255,0.16)" strokeWidth="1" />
        ))}
        {nodes.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 3.5 : 2.5} fill="#8db8ff" className="animate-node" style={{ animationDelay: `${(i % 6) * -0.9}s` }} />
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}
