export default function ProtectedImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <img src={src} alt={alt} className="w-full h-full block object-contain" draggable="false" />
      <div 
        className="absolute inset-0 z-10 bg-transparent cursor-default" 
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
