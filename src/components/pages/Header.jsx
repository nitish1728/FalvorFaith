import '../css/Header.css'

export default function Header(props){
    console.log(props)
    return(
        <div className="Header">
            <img src={props.images.image} alt={props.images.src} />
            <h1>FlavorFaith</h1>
        </div>
    )
}