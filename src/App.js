import './App.css';
import { useEffect, useState } from 'react';
import {marked} from 'marked';
import TextArea from './components/TextArea';
import MarkdownPreview from './components/MarkdownPreview';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [markdown, setMarkdown] = useState(
    `# Welcome to my React Markdown Previewer!\n` +
    `## This is a sub-heading...\n` +
    `### And here's some other cool stuff:\n\n` +
    `Heres some code, \`<div></div>\`, between 2 backticks.\n\n` +
    `\`\`\`\n` +
    `// this is multi-line code:\n` +
    `function anotherExample(firstLine, lastLine) {\n` +
    `  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {\n` +
    `    return multiLineCode;\n` +
    `  }\n` +
    `}\n` +
    `\`\`\`\n` +
    `- List item\n` +
    `**Bolded text**\n`
  );

  useEffect(() => {
    // Configure marked
    marked.setOptions({
      breaks: true,
    });
  }, []);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  }

  return (
    <div className="App">
      <Header />
      <div id="container">
        <TextArea value={markdown} onChange={handleChange} />
        <MarkdownPreview markdown={markdown} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
