
export const PROJECTS_QUERY = `*[_type == "project"] | order(_updateAt desc){
	name,
	urlProject,
  description,
	headerImage,  
	"imageUrl": imageGallery.asset->url,
	deviceType,
	color,
	_id,
}`;

// export const PROJECT_QUERY = defineQuery(`*[_type == "project" && slug.current == $slug][0] {
//     _id, title, body, mainImage
//     }`)
