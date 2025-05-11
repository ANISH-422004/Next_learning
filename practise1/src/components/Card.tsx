import type React from "react"


type cardProps = {
    title: string;
    description?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}


const Card: React.FC<cardProps> = ({ title, description, children, footer }) => {
    // props  
    //  - title 
    //  - description
    // - children
    // - footer

    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-flex flex-col w-1/4 h-1/2">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            {children && <div className="mb-4">
                {children}
            </div>}

            {footer && <div className="mt-4">
                {footer}
            </div>}
        
        </div>
    )
}


export default Card 