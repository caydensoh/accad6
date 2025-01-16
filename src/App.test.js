import { render, screen } from '@testing-library/react'; 
import { MemoryRouter, Route, Routes } from 'react-router-dom'; 
import App from './App'; 
import PostPageUpdate from './views/PostPageUpdate'; 
import PostPageDetails from './views/PostPageDetails'; 
import PostPageAdd from './views/PostPageAdd'; 
import HomePage from './views/HomePage'; 
 
test('True', () => { 
    expect(true).toBe(true); 
}); 
 
test('renders learn react link', () => { 
  render(<App />); 
  const linkElement = screen.getByText(/learn react/i); 
  expect(linkElement).toBeInTheDocument(); 
}); 
 
test('routes to update page', () => { 
  render( 
    <MemoryRouter initialEntries={['/update/1']}> 
      <Routes> 
        <Route path="/update/:id" element={<PostPageUpdate />} /> 
      </Routes> 
    </MemoryRouter> 
  ); 
  const updateElement = screen.getByText(/update/i); 
  expect(updateElement).toBeInTheDocument(); 
}); 
 
test('routes to details page', () => { 
  render( 
    <MemoryRouter initialEntries={['/details/1']}> 
      <Routes> 
        <Route path="/details/:id" element={<PostPageDetails />} /> 
      </Routes> 
    </MemoryRouter> 
  ); 
  const detailsElement = screen.getByText(/details/i); 
  expect(detailsElement).toBeInTheDocument(); 
}); 
 
test('routes to add page', () => { 
  render( 
    <MemoryRouter initialEntries={['/add']}> 
      <Routes> 
        <Route path="/add" element={<PostPageAdd />} /> 
      </Routes> 
    </MemoryRouter> 
  ); 
  const addElement = screen.getByText(/add/i); 
  expect(addElement).toBeInTheDocument(); 
}); 
 
test('routes to home page', () => { 
  render( 
    <MemoryRouter initialEntries={['/']}> 
      <Routes> 
        <Route path="/" element={<HomePage />} /> 
      </Routes> 
    </MemoryRouter> 
  ); 
  const homeElement = screen.getByText(/home/i); 
  expect(homeElement).toBeInTheDocument(); 
});