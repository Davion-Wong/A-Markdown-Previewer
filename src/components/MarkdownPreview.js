import {marked} from 'marked';

function MarkdownPreview ({ markdown}) {
  const createMarkup = () => {
    return{__html: marked(markdown, { breaks: true })};
  }

  return (
    <div id="preview" dangerouslySetInnerHTML={createMarkup()} />
  );
}

export default MarkdownPreview;