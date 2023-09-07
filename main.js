const Head = () => {
  const { meta, title, link } = van.tags

  // head直下に追加するため、配列で返す（React.Fragmentみたいな）
  return [
    meta({ charset: 'UTF-8' }),
    meta({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    }),
    title('動的に追加したタイトル'),
    link({ rel: 'stylesheet', href: 'style.css' })
  ]
}

// headタグに追加
van.add(document.head, Head())
