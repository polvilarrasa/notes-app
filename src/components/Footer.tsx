import React from 'react'
import { TabMenu } from 'primereact/tabmenu';
import { useState } from 'react';

const Footer = () => {
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Tags', icon: 'pi pi-fw pi-tag'}
    ];

    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center">
                <TabMenu model={items} activeIndex={activeTab} onTabChange={(e) => setActiveTab(e.index)} />
            </div>
        </div>
    )
}

export default Footer