# v-list
Webcomponent wrapper for [`virtualized-list`](https://github.com/clauderic/virtualized-list).

Demo: run `npm start`

```html
  <v-list estimated-row-height='50' row-count='500'></v-list>

  <script>
    const list = document.querySelector('v-list')
    const words =
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
      .split(' ')

    const rowCount = parseInt(list.getAttribute('row-count'))
    list.items = Array(rowCount).fill(0).map(() => {
      return Array(10 + Math.round(Math.random() * 40)).fill(0).map(() => {
        return words[Math.floor(Math.random() * words.length)]
      }).join(' ')
    })
    list.generator = (index) => {
      // console.log('generator', index)
      const el = document.createElement('div')
      el.innerHTML = `ITEM ${index + 1} ${list.items[index]}`
      return el
    }
  </script>
```
