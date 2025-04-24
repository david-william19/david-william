import ProjectContainer from "./ProjectContainer";
import {Project}  from "@/types/Project"
  
export default function ProjectSection({projects}: {projects: Project[]}) { 
return (
        <div className="w-full px-[150px]">
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
