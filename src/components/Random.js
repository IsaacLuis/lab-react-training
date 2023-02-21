const Random= ({min,max})=> {
    return (

        <div   id="Random" >
<p>Random value between {min} and {max} = {String(min + Math.round(Math.random() * (max - min)))}</p>
        </div>
    )

}

export default Random