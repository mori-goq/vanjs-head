const cssPath = van.state('style.css')

const Head = () => {
  const { meta, title, link } = van.tags

  // head直下に追加するため、配列で返す（React.Fragmentみたいな）
  return [
    meta({ charset: 'UTF-8' }),
    meta({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    }),
    title('vanjs-head'),
    // cssのパスを変数にして、動的に変更できるようにしている
    link({ rel: 'stylesheet', href: cssPath })
  ]
}

// headタグに追加
van.add(document.head, Head())

const App = () => {
  const { div, button } = van.tags

  return div(
    button(
      { type: 'button', onclick: () => (cssPath.val = 'style.css') },
      'style.css',
    ),
    button(
      { type: 'button', onclick: () => (cssPath.val = 'style2.css') },
      'style2.css',
    ),
  )
}

// bodyタグに追加
van.add(document.body, App())
