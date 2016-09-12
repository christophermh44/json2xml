# json2xml
Just a JSON parser to turn JSON data into XML

## Example

The example file will produce this html content:

```html
<html lang="en">
  <head>
    <title>Home | My website</title>
    <link rel="stylesheet" href="screen.css" media="screen">
  </head>
  <body class="no-js">
    <header>
      <div id="logo">
        <img src="http://lorempixel.com/600/600" alt="Logo">
      </div>
      <h1>My website</h1>
    </header>
    <main>
      <section class="container">Lorem ipsum dolor sit amet.</section>
    </main>
    <footer>
      <a href="http://example.com/">Link example</a>
    </footer>
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
```

I don't know if it can be useful. But why not :)
