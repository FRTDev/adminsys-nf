
export const NotFoundContent = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
      <p className="text-xl text-gray-400 mb-4">Cette page n'existe pas</p>
      <a href="/" className="text-blue-500 hover:text-blue-400 underline">
        Retour à l'accueil
      </a>
    </div>
  );
};
