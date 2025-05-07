import ProjectContainer from "./ProjectContainer";
import {Project}  from "@/types/Project"
  
export default function ProjectSection({projects}: {projects: Project[]}) { 
return (
        <div className="w-full container mx-auto bg-red-200">
              {
	     	projects.map((data) => {
			return (
				<ProjectContainer project={data} key={data._id} />	
			)  
		})  
	      }  
   	</div>  
	) 
}
