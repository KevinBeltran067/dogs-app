import "../styles/Card.css"

export default function Card({id,img,ancho,alto}){
    return(
        <>
        <div className="Card_back">
            <p>Codigo id: {id}</p>
            <h3>Perrito</h3>
            <p>Raza: perro</p>
            <img src={img} alt={id} width="200px" height="200px"></img>
            <p>{alto}px x {ancho}px (Tamano real img)</p>
            <p>Utilidad: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Temperamento: Ullam velit autem quis ipsam fuga perferendis recusandae eligendi, maxime explicabo maiores! Ipsum fugit, odio id inventore aspernatur quam quibusdam quaerat.</p>
            <button onClick={() => window.location.reload()} className="Card_Button">Otro perrito</button>
        </div>
        </>
    )
}