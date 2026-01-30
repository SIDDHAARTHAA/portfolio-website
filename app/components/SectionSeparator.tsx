'use client';

export default function SectionSeparator() {
    return (
        <div className="w-full max-w-5xl mx-auto my-16 px-6">
            <div
                className="w-full h-px"
                style={{
                    background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)'
                }}
            />
        </div>
    );
}
