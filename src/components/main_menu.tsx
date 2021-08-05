import React from "react";

export type LinkEntry = {
    icon: string,
    text: string,
    url: string
}
type MainMenuProps = {
    links: LinkEntry[]
}

const MainMenu: React.FC<MainMenuProps> = (props: MainMenuProps) => {
    // TODO:  Add key prop
   const linksJSX: JSX.Element[] = props.links.map(link => {
        return( 
        <li>
            <a href={link.url}>{link.text}</a>
        </li>)
    });

    return(
    <div>
        <ul>
            {linksJSX}
        </ul>
    </div>);
}


export default MainMenu; 