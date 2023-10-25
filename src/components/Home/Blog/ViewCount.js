'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react";

const supabase = createClientComponentClient();

export default function ViewCount({ slug, noCount = false, showCount = true }) {
    
    const [views, setViews] = useState(0);

    useEffect(() => {
        const incrementView = async () => {
            try {
                let { error } = await supabase.rpc('increment', {
                    slug_text: slug
                });

                if (error) console.error("Error occured while incrementing count in try block", error);
            } catch (error) {
                console.error("Error occured while incrementing count", error);
            }
        };

        if (!noCount) {
            incrementView();
        }
    }, [slug, noCount])

    useEffect(() => {
        const getViews = async () => {
            try {
                
                let { data, error } = await supabase
                    .from('views')
                    .select('count')
                    .match({ slug: slug })
                    .single()

                if (error) console.error("Error occured while incrementing count in try block", error);

                setViews(data.count)

            } catch (error) {
                console.error("Error occured while incrementing count", error);
            }
        };
        getViews();

    },[slug])


    if (showCount) {
        return (
            <>{ views }</>
        )
    }
    return null;
}
