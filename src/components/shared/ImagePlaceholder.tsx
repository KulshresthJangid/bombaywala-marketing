interface ImagePlaceholderProps {
  name: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImagePlaceholder({
  name,
  width = "100%",
  height = 320,
  className,
  style,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`img-placeholder ${className ?? ""}`}
      style={{
        width,
        height,
        ...style,
      }}
    >
      <span>{name}</span>
    </div>
  );
}
