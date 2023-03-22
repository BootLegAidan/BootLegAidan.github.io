const projects = {
  "Overly Complicated Calendar": {
    link: 'https://bootlegaidan.github.io/Calendar/',
    text: 'Github Page'
  },
  "HTML Visualizer": {
    link: 'https://github.com/BootLegAidan/HTML-Visualizer',
    text: 'Github Repo'
  },
  "Shared Scripts": {
    link: 'https://github.com/BootLegAidan/SharedScripts',
    text: 'Github Repo'
  },
  "Clickpocalypse 2 Decompilation": {
    link: 'https://github.com/BootLegAidan/Clickpocalypse2DecompilationProject',
    text: 'Github Repo'
  },
  "Evil Calculator": {
    link: 'https://bootlegaidan.github.io/Evil-Calculator/',
    text: 'Github Page'
  },
  "Circles": {
    link: 'https://bootlegaidan.github.io/Circles/',
    text: 'Github Page'
  },
  "Incremental Snake": {
    link: 'https://bootlegaidan.github.io/IncrementalSnake/',
    text: 'Github Page'
  },
  "Typing Monkeys": {
    link: 'https://bootlegaidan.github.io/Typing-Monkeys/',
    text: 'Github Page'
  },
  "Color Pallette Generator": {
    link: 'https://bootlegaidan.github.io/Color-Pallette-Generator/',
    text: 'Github Page'
  },
  "Star Window": {
    link: 'https://bootlegaidan.github.io/Star-Window/',
    text: 'Github Page'
  },
  "Light System": {
    link: 'https://bootlegaidan.github.io/LightSystem/',
    text: 'Github Page'
  },
  "Image Distortion": {
    link: 'https://bootlegaidan.github.io/Image-Distortion/',
    text: 'Github Page'
  },
  "Distort Grid": {
    link: 'https://bootlegaidan.github.io/DistortGrid/',
    text: 'Github Page'
  },
  "Particle Physics": {
    link: 'https://bootlegaidan.github.io/Particle-Physics/',
    text: 'Github Page'
  },
  "Image Filter Sweep": {
    link: 'https://bootlegaidan.github.io/Image-Filter-Sweep/',
    text: 'Github Page'
  },
  "Fake 3D Noise": {
    link: 'https://bootlegaidan.github.io/Fake3DNoise/',
    text: 'Github Page'
  },
  'Random Color': {
    link: 'https://bootlegaidan.github.io/Random-Color/',
    text: 'Github Page'
  },
  "Hex Clock": {
    link: 'https://bootlegaidan.github.io/HexClock/',
    text: 'Github Page'
  },
  "Geometrical Thing": {
    link: 'https://bootlegaidan.github.io/Geometrical-Thing/',
    text: 'Github Page'
  },
  "Colored Noise Haze": {
    link: 'https://bootlegaidan.github.io/Colored-Noise-Haze/',
    text: 'Github Page'
  },
  "Desmos Custom Colors": {
    link: 'https://github.com/BootLegAidan/Desmos-Custom-Colors',
    text: 'Github Repo'
  },
  "Rainbow Highlight": {
    link: 'https://bootlegaidan.github.io/Rainbow-Highlight/',
    text: 'Github Page'
  },
}

let container = document.getElementById('main')
container.innerHTML = ''
Object.entries(projects).forEach(([name,data], i) => {
  let articleEl = document.createElement('article')
  articleEl.classList.add('thumb')

  let a1El = document.createElement('a')
  a1El.href = `images/fulls/${name.replaceAll(' ','')}.jpg`
  a1El.classList.add('image')

  let imgEl = document.createElement('img')
  imgEl.src = `images/thumbs/${name.replaceAll(' ','')}.jpg`
  a1El.append(imgEl)
  articleEl.append(a1El)

  let h2El = document.createElement('h2')
  h2El.innerText = name
  articleEl.append(h2El)

  let a2El = document.createElement('a')
  a2El.href = data.link
  let pEl = document.createElement('p')
  pEl.innerText = data.text
  a2El.append(pEl)
  articleEl.append(a2El)
  container.append(articleEl)
});
