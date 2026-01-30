'use client';

export default function GridBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none select-none overflow-hidden bg-background">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    opacity: '1'
                }}
            />
            {/* Radial Fade */}
            <div
                className="absolute inset-0 bg-background"
                style={{
                    maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black 100%)'
                }}
            />
        </div>
    );
}
