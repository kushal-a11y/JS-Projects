function zoom(event){
    const div = document.getElementById("square-box")
    const img = event.target.src

    const imgElement = document.createElement('img')
    imgElement.setAttribute('src',img)

    div.innerHTML = ''

    div.appendChild(imgElement)

}