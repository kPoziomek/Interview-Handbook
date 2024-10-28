import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  children: string;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const language = className?.replace('language-', '');

  return (
    <div className="relative my-6 rounded-lg">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: '0.5rem',
          padding: '1.5rem',
          fontSize: '0.875rem',
        }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
