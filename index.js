// Este arquivo serve como ponto de entrada para o Cloudflare Pages
// Ele não faz nada além de servir como um marcador para o Cloudflare Pages

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Obter a URL da solicitação
  const url = new URL(request.url)
  
  // Se a URL for a raiz, servir o index.html
  if (url.pathname === '/' || url.pathname === '') {
    return fetch('/index.html')
  }
  
  // Caso contrário, tentar servir o arquivo solicitado
  try {
    const response = await fetch(request)
    if (response.ok) {
      return response
    }
  } catch (e) {
    // Se houver um erro, servir o index.html (comportamento SPA)
    return fetch('/index.html')
  }
  
  // Se o arquivo não for encontrado, servir o index.html (comportamento SPA)
  return fetch('/index.html')
} 