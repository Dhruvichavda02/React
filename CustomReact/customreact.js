function customRender(){
    // create dom
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('Target',reactElement.props.target)

    mainContainer.appendChild(domElement)
}

const reactElement ={
    type:'a',
    props:{
        href : 'https://google.com',
        target: '_blank'
    },
    children : 'Click me to visit google'
}
const mainContainer = document.querySelector('#root')

// to inject reactElement in root '
// (what_to_inject,where_to_inject )
customRender(reactElement,mainContainer)