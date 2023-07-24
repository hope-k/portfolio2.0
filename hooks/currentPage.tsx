import React, { createContext, useContext, useState } from 'react';

type Props = {
    children: React.ReactNode;
}
type InViewContextType = {
    selectedTab: number;
    setSelectedTab: (index: number) => void;
};

const InViewContext = createContext<InViewContextType>({
    selectedTab: 0,
    setSelectedTab: () => { },
});


export function InViewProvider({ children }: Props) {
    const [selectedTab, setSelectedTab] = useState(0); // Initialize with 0

    return (
        <InViewContext.Provider value={{  selectedTab, setSelectedTab }}>
            {children}
        </InViewContext.Provider>
    );
}

export function useInViewContext() {
    return useContext(InViewContext);
}