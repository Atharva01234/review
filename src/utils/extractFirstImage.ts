export const extractFirstImg = (content: string) => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(content, 'text/html');
    const image = htmlDocument.querySelector('img');
    return image ? image.getAttribute('src') : null;
  }
