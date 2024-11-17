import { encode } from 'html-entities';
import { useMemo } from 'react';
import { default as formatter } from 'xml-formatter';

const XML_DECLARATION = '<?xml version="1.0" encoding="UTF-8" ?>';

export interface OpenSearchDescriptionOptions {
  description: string | null;
  image: string | null;
  inputEncoding: string | null;
  name: string;
  params: string | null;
  suggestionURL: string | null;
  url: string;
}

function addDescriptionElement(
  xml: XMLDocument,
  { description }: OpenSearchDescriptionOptions,
): void {
  if (description !== null) {
    const element = xml.createElementNS(
      'http://a9.com/-/spec/opensearch/1.1/',
      'Description',
    );
    element.textContent = description;
    xml.documentElement.appendChild(element);
  }
}

function addImageElement(
  xml: XMLDocument,
  { image }: OpenSearchDescriptionOptions,
): void {
  if (image !== null) {
    const element = xml.createElementNS(
      'http://a9.com/-/spec/opensearch/1.1/',
      'Image',
    );
    element.setAttributeNS(null, 'height', '16');
    element.setAttributeNS(null, 'width', '16');

    if (image.startsWith('https://')) {
      element.setAttributeNS(null, 'type', 'image/x-icon');
    }

    element.textContent = image;
    xml.documentElement.appendChild(element);
  }
}

function addInputEncodingElement(
  xml: XMLDocument,
  { inputEncoding }: OpenSearchDescriptionOptions,
): void {
  if (inputEncoding !== null) {
    const element = xml.createElementNS(
      'http://a9.com/-/spec/opensearch/1.1/',
      'InputEncoding',
    );
    element.textContent = inputEncoding;
    xml.documentElement.appendChild(element);
  }
}

function addShortNameElement(
  xml: XMLDocument,
  { name }: OpenSearchDescriptionOptions,
): void {
  const element = xml.createElementNS(
    'http://a9.com/-/spec/opensearch/1.1/',
    'ShortName',
  );
  element.textContent = encode(name, {
    level: 'all',
    mode: 'nonAscii',
    numeric: 'hexadecimal',
  });
  xml.documentElement.appendChild(element);
}

function addSuggestionURLElement(
  xml: XMLDocument,
  { suggestionURL }: OpenSearchDescriptionOptions,
): void {
  if (suggestionURL !== null) {
    const element = xml.createElementNS(
      'http://a9.com/-/spec/opensearch/1.1/',
      'Url',
    );
    element.setAttributeNS(null, 'type', 'application/x-suggestions+json');
    element.setAttributeNS(null, 'rel', 'suggestions');
    element.textContent = suggestionURL.replace(/%s/g, '{searchTerms}');
    xml.documentElement.appendChild(element);
  }
}

function addURLElement(
  xml: XMLDocument,
  { params, url }: OpenSearchDescriptionOptions,
): void {
  const element = xml.createElementNS(
    'http://a9.com/-/spec/opensearch/1.1/',
    'Url',
  );
  element.setAttributeNS(null, 'type', 'text/html');
  if (params !== null) {
    element.setAttributeNS(null, 'method', 'POST');
  } else {
    element.setAttributeNS(null, 'method', 'GET');
  }
  element.setAttributeNS(null, 'rel', 'results');
  element.setAttributeNS(null, 'template', url.replace(/%s/g, '{searchTerms}'));
  xml.documentElement.appendChild(element);

  if (params !== null) {
    const items = new URLSearchParams(params);
    for (const [name, value] of items) {
      const element = xml.createElementNS(
        'http://a9.com/-/spec/opensearch/1.1/',
        'Param',
      );
      element.setAttributeNS(null, 'name', name);
      element.setAttributeNS(
        null,
        'value',
        value.replace(/%s/g, '{searchTerms}'),
      );
      xml.documentElement.appendChild(element);
    }
  }
}

export function useOpenSearchDescription(
  options: OpenSearchDescriptionOptions,
): string {
  if (typeof window === 'undefined') {
    return '';
  }

  return useMemo<string>(() => {
    const serialzer = new XMLSerializer();
    const xml = document.implementation.createDocument(
      'http://a9.com/-/spec/opensearch/1.1/',
      'OpenSearchDescription',
    );

    xml.documentElement.setAttributeNS(
      'http://www.w3.org/2000/xmlns/',
      'xmlns:moz',
      'http://www.mozilla.org/2006/browser/search/',
    );

    addShortNameElement(xml, options);
    addDescriptionElement(xml, options);
    addInputEncodingElement(xml, options);
    addImageElement(xml, options);
    addURLElement(xml, options);
    addSuggestionURLElement(xml, options);

    return formatter(`${XML_DECLARATION}${serialzer.serializeToString(xml)}`, {
      collapseContent: true,
      indentation: '  ',
      whiteSpaceAtEndOfSelfclosingTag: true,
    });
  }, [options]);
}
