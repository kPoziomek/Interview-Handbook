'use client';

import { ReactNode, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SolutionProps {
  children: ReactNode;
}

export function Solution({ children }: SolutionProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="my-4">
      <Button onClick={() => setIsVisible(!isVisible)} variant="outline">
        {isVisible ? 'Hide Solution' : 'Show Solution'}
      </Button>

      <div
        className={cn(
          'mt-4 transition-all duration-200',
          isVisible ? 'block' : 'hidden'
        )}
      >
        {children}
      </div>
    </div>
  );
}
