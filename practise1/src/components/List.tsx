import type React from "react";
import Card from "./Card";

export type Listobj = {
    title: string,
    description: string
}

export type Listprops = {
    list: Listobj[]
}


const List: React.FC<Listprops> = ({ list }) => {

    return (
        <>
            {
                list.map((item, i) => {
                    return (
                        <Card 
                        
                        key={i}
                        title={item.title}>
                            <p>
                                {item.description}
                            </p>

                        </Card>
                    )
                })
            }


        </>
    )


};


export default List;