export default function ASCIIBorder() {
  const pattern = "[..]"
  const repeat = 50

  return (
    <>
      <div className="ascii-border top">{pattern.repeat(repeat)}</div>
      <div className="ascii-border bottom">{pattern.repeat(repeat)}</div>
      <div className="ascii-border left">
        {Array(repeat)
          .fill(pattern)
          .map((p, i) => (
            <div key={i}>{p}</div>
          ))}
      </div>
      <div className="ascii-border right">
        {Array(repeat)
          .fill(pattern)
          .map((p, i) => (
            <div key={i}>{p}</div>
          ))}
      </div>
    </>
  )
}

