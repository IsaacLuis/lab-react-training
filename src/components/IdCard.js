
const IdCard = (props) => {

    const date = String(props.birth)

    return (
        <div id="card">
            <img src={props.picture}    alt="profile"/>
            <div>
                <p><span className="card-span">First name:</span>{props.firstName}</p>
                <p><span   className="card-span"> Last name:</span>{props.lastName}</p>
                <p><span  className="card-span">  Gender:</span>{props.gender}</p>
                <p><span className="card-span">Height:</span>{props.height*0.1}</p>
                <p><span className="card-span">Birth:</span>{date}</p>
            </div>
        </div>
    )
}

export default IdCard