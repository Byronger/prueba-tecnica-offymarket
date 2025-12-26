import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 10;
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filteredPosts = posts.filter(post =>
    post.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-between bg-blue-600 p-6 mb-6 rounded">
          <img
            src="https://www.offymarket.com/wp-content/uploads/2021/12/logo-01.png"
            alt="Logo"
            className="h-12 bg-white p-2 rounded"
          />

          <h1 className="text-white text-2xl font-bold">
            Posts por Usuario
          </h1>
        </div>
        <input
          type="text"
          placeholder="Buscar usuario..."
          className="w-full mb-4 p-2 border rounded"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Usuario</th>
              <th className="p-2 border">Cantidad de Posts</th>
            </tr>
          </thead>
          <tbody>
            {paginatedPosts.map((post, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-2 border">{post.name}</td>
                <td className="p-2 border">{post.count}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No hay resultados
          </p>
        )}

        {filteredPosts.length > 0 && (
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Anterior
            </button>

            <span className="text-sm text-gray-600">
              Página {currentPage} de {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;