import { getTags } from "@/services/devtoApi";
import LabelPost from "./LabelPost";

type TagsResponse = {
    name: string,
    id: number,
}

async function TagContainer() {
    const dataTags = await getTags();

    return (
        <section className="flex gap-2.5 mb-5">
            <div>
                <h3 className="font-thunder font-bold text-white mb-2.5">Tags</h3>
                <div className="flex gap-2.5">
                    {
                        dataTags.map((tag: TagsResponse, index: number) => (
                            <LabelPost title={tag.name} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TagContainer;