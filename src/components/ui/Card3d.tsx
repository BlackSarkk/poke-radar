import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


export default function Card3d({ url }: { url: string }) {
    return (
        <div>

                <CardContainer className="inter-var">
                    <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto xl:w-[50rem] h-auto rounded-xl border  ">

                        <CardItem translateZ="100" className="w-full mt-0">
                            <img
                                src={url}
                                height="1000"
                                width="1000"
                                className="h-140 object-cover rounded-[40px] group-hover/card:shadow-xl"
                                alt="thumbnail"
                                />
                            </CardItem>

                    </CardBody>
                </CardContainer>



        </div>
    )
}
