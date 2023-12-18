import { render, screen } from '@testing-library/react'
import Post from './Post';
import { expect } from '@storybook/test';
import { BrowserRouter } from 'react-router-dom';

describe('Post', () => {
  test('should render correctly', () => {
    const post = {
      id: 1,
      author: 'Lucas',
      content: 'Hello, Vitest!',
      starsCount: 1
    }

    render(
      <BrowserRouter>
        <Post post={post} />
      </BrowserRouter>
    )

    expect(screen.getByText('Hello, Vitest!')).toBeInTheDocument()
    expect(screen.getByText('Publicado por Lucas')).toBeInTheDocument()
  });
})
