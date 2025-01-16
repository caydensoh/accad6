import PostPageUpdate from './views/PostPageUpdate'; 
import PostPageDetails from './views/PostPageDetails'; 
import PostPageAdd from './views/PostPageAdd'; 
import PostPageHome from './views/PostPageHome'; 
import { render } from 'react-dom'; 
import { MemoryRouter, Route, Routes } from 'react-router-dom'; 
import App from './App'; 
 
test('True', () => { 
    expect(true).toBe(true); 
}); 
 
test('home page exists', () => { 
  render(<App />); 
  const linkElement = screen.getByText(/book list/i); 
  expect(linkElement).toBeInTheDocument(); 
}); 
 
test('routes to add page', () => { 
  render( 
    <MemoryRouter initialEntries={['/add']}> 
      <Routes> 
        <Route path="/add" element={<PostPageAdd />} /> 
      </Routes> 
    </MemoryRouter> 
  ); 
  const addElement = screen.getByText(/add book/i); 
  expect(addElement).toBeInTheDocument(); 
}); 