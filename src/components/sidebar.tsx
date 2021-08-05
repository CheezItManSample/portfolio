import React from 'react';

type SidebarProps = {
    children?: JSX.Element[],
}

const Sidebar: React.FC<SidebarProps> = ({children}: SidebarProps) => {
    return (
        <aside className="portfolio__sidebar">
            {children}
        </aside>
    );
}

export default Sidebar