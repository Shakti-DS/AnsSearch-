import * as React from "react";
import MenuItemcard from "../components/cards/menuItemcard";

import usePageSetupEffect from "../hooks/usePageSetupEffect";

export interface IMenuitemProps { }

export default function Menuitem({ verticalKey }: { verticalKey: string }) {
    usePageSetupEffect(verticalKey);

    const [apiData, setApiData] = React.useState<any>([]);

    React.useEffect(() => {
        const url =
            "https://liveapi-sandbox.yext.com/v2/accounts/me/entities?api_key=aae38614d0701660f74015c1c1fe1587&v=20230110&entityTypes=ce_menuItems";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    console.log("apiData===>", apiData);

    return (
        <>
            <div className="flex flex-wrap gap-y-2">
                {apiData?.response?.entities?.map((item: any) => {
                    return (
                        <>
                            <MenuItemcard
                                name={item?.name}
                                image={item?.primaryPhoto?.image?.url}
                                price={item?.price?.value}
                                details={item?.primaryPhoto?.description}
                            />
                        </>
                    );
                })}
            </div>
        </>
    );
}
