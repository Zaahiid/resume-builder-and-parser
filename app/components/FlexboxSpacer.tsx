export const FlexboxSpacer = ({
  maxWidth,
  minWidth = 0,
  className = "",
}: {
  maxWidth: number;
  minWidth?: number;
  className?: string;
}) => {
  return (
    <div
      className={`invisible shrink-[1000] grow ${className}`}
      style={{ maxWidth: `${maxWidth}px`, minWidth: `${minWidth}px` }}
    />
  );
};
