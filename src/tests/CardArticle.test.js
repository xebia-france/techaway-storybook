import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Default as CardArticleDefault } from '../stories/CardArticle.stories';

describe('CardArticle stories', () => {
  beforeAll(() => {
    global.open = jest.fn();
  });

  it('should handle clicking read button', () => {
    // Given
    const { getByText } = render(<CardArticleDefault />);

    // When
    fireEvent.click(getByText('view_article'));

    // Then
    expect(global.open).toHaveBeenCalledTimes(1);
    expect(global.open).toHaveBeenCalledWith(
      'https://blog.engineering.publicissapient.fr/2019/09/23/xebia-devient-publicis-sapient-engineering',
    );
  });
});
