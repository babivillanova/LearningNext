function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        
            <div>
               <div> {dynamicDateString} (dinâmico) </div>
                <div> {props.staticDateString} (estático) </div>
            </div>
      
    )
}

//essa função não vai para o frontend
export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    return{
        props: {
            staticDateString
    }
}
}

export default Tempo