document.getElementById('jsWarning').remove()
const projects = {
  "Springy Particle Physics": {
    link: 'https://bootlegaidan.github.io/Springy-Particle-Physics/',
    text: 'Github Page'
  },
  "Mouse Forcefield": {
    link: "https://bootlegaidan.github.io/Mouse-Forcefield/",
    text: 'Github Page'
  },
  "IP Grabber": {
    link: 'https://github.com/BootLegAidan/authorize',
    text: 'Github Repo',
    text2: 'Clicking the link does not log your IP'
  },
  "Overly Complicated Calendar": {
    link: 'https://bootlegaidan.github.io/Calendar/',
    text: 'Github Page'
  },
  "HTML Music Visualizer": {
    link: 'https://github.com/BootLegAidan/HTML-Visualizer',
    text: 'Github Repo',
    link2: 'https://bootlegaidan.github.io/HTML-Visualizer/',
    text2: 'Github Page'
  },
  "Shared Scripts": {
    link: 'https://github.com/BootLegAidan/SharedScripts',
    text: 'Github Repo',
    link2: 'https://bootlegaidan.github.io/SharedScripts/',
    text2: 'Github Page'
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
  let mainEl = document.createElement('article')
  mainEl.classList.add('thumb')

  let thumbnail = document.createElement('a')
  thumbnail.href = `images/fulls/${name.replaceAll(' ','')}.jpg`
  thumbnail.classList.add('image')

  let thumbImg = document.createElement('img')
  thumbImg.src = `images/thumbs/${name.replaceAll(' ','')}.jpg`
  thumbnail.append(thumbImg)
  mainEl.append(thumbnail)

  let title = document.createElement('h2')
  title.innerText = name
  mainEl.append(title)

  let link1 = document.createElement('a')
  link1.href = data.link
  let link1text = document.createElement('p')
  link1text.innerHTML = data.text
  link1.append(link1text)
  mainEl.append(link1)

  if (data.link2 && data.text2) {
    let link2 = document.createElement('a')
    link2.href = data.link2
    let link2text = document.createElement('p')
    link2text.innerHTML = data.text2
    link2.append(link2text)
    mainEl.append(link2)
  } else if (data.text2) {
    let text2 = document.createElement('p')
    text2.innerHTML = data.text2
    mainEl.append(text2)
  }
  container.append(mainEl)
});
