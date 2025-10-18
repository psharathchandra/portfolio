import React from 'react';

type TimelineItem = {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string[];
  tags?: string[];
};

type TimelineProps = {
  items: TimelineItem[];
  /** translate classname for overlap - allowed: '4' | '6' | '8' */
  overlapAmount?: '10' | '12' | '8';
};

function tagKey(tag: string, i: number) {
  return `${tag}-${i}`;
}

export default function Timeline({ items, overlapAmount = '10' }: TimelineProps) {
  // map allowed overlap amounts to explicit Tailwind classes so JIT can pick them up
  const translateMapPos: Record<'10' | '12' | '8', string> = {
    '10': 'md:translate-x-10',
    '12': 'md:translate-x-12',
    '8': 'md:translate-x-8'
  };
  const translateMapNeg: Record<'10' | '12' | '8', string> = {
    '10': 'md:-translate-x-10',
    '12': 'md:-translate-x-12',
    '8': 'md:-translate-x-8'
  };

  const translatePos = translateMapPos[overlapAmount];
  const translateNeg = translateMapNeg[overlapAmount];

  return (
    <div className="relative space-y-12 pt-12 pb-12">
      {/* centered vertical line */}
      <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[6px] bg-black/90 rounded z-0 mb-0" />

      {items.map((it, index) => {
        const isEven = index % 2 === 0;
        const translateClass = isEven ? translatePos : translateNeg;

        return (
          <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className={isEven ? 'flex md:justify-end' : 'hidden md:block'}>
              {isEven && (
                <div className={`relative z-10 bg-light p-6 rounded-lg shadow-md border border-dark/10 md:w-5/6 ${translateClass}`}>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-dark">{it.title}</h3>
                    {it.subtitle && <p className="text-dark/70">{it.subtitle}</p>}
                    {it.period && <p className="text-dark/60 mt-1">{it.period}</p>}
                  </div>

                  {it.description && (
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      {it.description.map((d, i) => (
                        <li key={i} className="text-dark/70">{d}</li>
                      ))}
                    </ul>
                  )}

                  {it.tags && (
                    <div className="flex flex-wrap gap-2">
                      {it.tags.map((t, i) => (
                        <span key={tagKey(t, i)} className="px-3 py-1 bg-dark/5 text-dark/70 rounded-full text-sm">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className={!isEven ? 'flex md:justify-start' : 'hidden md:block'}>
              {!isEven && (
                <div className={`relative z-10 bg-light p-6 rounded-lg shadow-md border border-dark/10 md:w-5/6 ${translateClass}`}>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-dark">{it.title}</h3>
                    {it.subtitle && <p className="text-dark/70">{it.subtitle}</p>}
                    {it.period && <p className="text-dark/60 mt-1">{it.period}</p>}
                  </div>

                  {it.description && (
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      {it.description.map((d, i) => (
                        <li key={i} className="text-dark/70">{d}</li>
                      ))}
                    </ul>
                  )}

                  {it.tags && (
                    <div className="flex flex-wrap gap-2">
                      {it.tags.map((t, i) => (
                        <span key={tagKey(t, i)} className="px-3 py-1 bg-dark/5 text-dark/70 rounded-full text-sm">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* small screens */}
            <div className="md:hidden">
              <div className="relative z-10 bg-light p-6 rounded-lg shadow-md border border-dark/10">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-dark">{it.title}</h3>
                  {it.subtitle && <p className="text-dark/70">{it.subtitle}</p>}
                  {it.period && <p className="text-dark/60 mt-1">{it.period}</p>}
                </div>

                {it.description && (
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    {it.description.map((d, i) => (
                      <li key={i} className="text-dark/70">{d}</li>
                    ))}
                  </ul>
                )}

                {it.tags && (
                  <div className="flex flex-wrap gap-2">
                    {it.tags.map((t, i) => (
                      <span key={tagKey(t, i)} className="px-3 py-1 bg-dark/5 text-dark/70 rounded-full text-sm">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
