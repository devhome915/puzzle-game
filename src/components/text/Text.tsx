import "./Text.css"

export default function Text({children}: {children: string}){
    return(
        <div id="message">{children}</div>
    )

}