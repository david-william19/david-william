
export const PROJECTS_QUERY = `*[_type == "project"] | order(_updatedAt desc){
	name,
	urlProject,
	description,
	"imageUrl": imageGallery.asset->url,
	"headerImageUrl": headerImage.asset->url,
	deviceType,
	color,
	techStack,
	_id,
}`;

// export const PROJECT_QUERY = defineQuery(`*[_type == "project" && slug.current == $slug][0] {
//     _id, title, body, mainImage
//     }`)
