import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

const linkPattern = /\[([^\]]+)\]\((\/[^)]*)\)/g;

const renderInline = (text: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  linkPattern.lastIndex = 0;
  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    nodes.push(
      <Link key={`${match[2]}-${match.index}`} to={match[2]} className="text-primary hover:underline">
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
};

interface ArticleContentProps {
  content: string;
}

/**
 * Renders article body text. Supports "## ", "### " and "#### " heading
 * prefixes, bullet lines and inline [label](/path) internal links, while
 * keeping the existing typography classes unchanged.
 */
const ArticleContent = ({ content }: ArticleContentProps) => {
  const blocks = content.split('\n\n').map((b) => b.trim()).filter(Boolean);

  return (
    <>
      {blocks.map((block, index) => {
        if (block.startsWith('#### ')) {
          return (
            <h4 key={index} className="font-serif text-base md:text-lg text-primary/90 mt-6 mb-2">
              {renderInline(block.slice(5))}
            </h4>
          );
        }
        if (block.startsWith('### ')) {
          return (
            <h3 key={index} className="font-serif text-lg md:text-xl mt-8 mb-3">
              {renderInline(block.slice(4))}
            </h3>
          );
        }
        if (block.startsWith('## ')) {
          return (
            <h2 key={index} className="font-serif text-xl md:text-2xl mt-10 mb-4">
              {renderInline(block.slice(3))}
            </h2>
          );
        }
        const lines = block.split('\n');
        if (lines.every((line) => line.startsWith('•') || line.startsWith('- '))) {
          return (
            <ul key={index} className="list-none space-y-2 mb-4">
              {lines.map((line, i) => (
                <li key={i} className="text-base md:text-lg text-foreground/90 leading-relaxed pl-4 border-l border-primary/30">
                  {renderInline(line.replace(/^([•]|- )\s*/, ''))}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
            {renderInline(block)}
          </p>
        );
      })}
    </>
  );
};

export default ArticleContent;