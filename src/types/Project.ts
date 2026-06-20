export interface TechStack {
	label?: string;
	value?: string;
}

export interface Project {
	_id: string;
	name: string;
	description?: string;
	techStack?: (TechStack | string)[];
	urlProject?: string;
	/** Product/gallery shot used as the floating image on the card */
	imageUrl?: string;
	/** Fallback image when no gallery image is set */
	headerImageUrl?: string;
	deviceType?: string;
	color?: string;
	slug?: string;
}
