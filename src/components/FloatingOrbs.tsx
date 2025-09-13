export const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-floating-orbs animate-orb-float opacity-40" />
      <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-floating-orbs animate-orb-float opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-floating-orbs animate-orb-float opacity-50" style={{ animationDelay: '4s' }} />
      
      {/* Small sparkles */}
      <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-accent rounded-full animate-sparkle" style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-primary-glow rounded-full animate-sparkle" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-accent-glow rounded-full animate-sparkle" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-secondary rounded-full animate-sparkle" style={{ animationDelay: '2.5s' }} />
    </div>
  );
};