
export const PROJECTS_QUERY = `*[_type == "project"]{
	name,
	urlProject,
  description,
	headerImage,  
	"imageUrl": imageGallery.asset->url,
}`;

// export const PROJECT_QUERY = defineQuery(`*[_type == "project" && slug.current == $slug][0] {
//     _id, title, body, mainImage
//     }`)
