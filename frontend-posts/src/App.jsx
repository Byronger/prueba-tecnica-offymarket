import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="bg-red-600 text-white p-6 text-2xl">
          Posts por Usuario
        </h1>

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
            {filteredPosts.map((post, index) => (
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
      </div>
    </div>
  );
}

export default App;