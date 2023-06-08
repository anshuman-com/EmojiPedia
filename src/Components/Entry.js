export function Entry(props){
    return (
    <div className= "body">
        {props.id}
        {props.meaning}
        <div className= "emoji">{props.emoji}</div>
        {props.name}
    </div>
    )
}