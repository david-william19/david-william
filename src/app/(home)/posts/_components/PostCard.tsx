"use client";

import ItemCard from "@/components/ItemCard";
import { PostDevTo } from "@/types/Post";
import TagLabel from "../../_components/Posts/GenrePostLabel";
import { tagPostColorGenerator } from "../../../../../utils/tagPostColor";

export default function PostCard(data: PostDevTo & { imagePosts: string }) {
  return (
    <ItemCard>
      {/* image project */}
      <ItemCard.ImageHeader alt={`${data.id}-post`} src={data.imagePosts} />
      {/* content project */}
      <ItemCard.Body>
        <h3 className="text-white text-lg font-poppins font-semibold mb-2.5">
          {data.title}
        </h3>
        <p className="text-white line-clamp-3">{data.description}</p>

        <ItemCard.Footer>
          {data.tag_list.map((data, index) => (
            <TagLabel
              key={index}
              data={data}
              index={index}
              color={tagPostColorGenerator(data)}
            />
          ))}
        </ItemCard.Footer>
      </ItemCard.Body>
    </ItemCard>
  );
}
