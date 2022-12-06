interface Movie {
	title: string;
	duration: number;
}

interface TvShow {
	title: string;
	numOfEpisodes: number;
	episodeDuration: number;
}

function getDuration(item: Movie | TvShow): string {
	// The 'in' operator is used to check if a property exists in an object
	if ('numOfEpisodes' in item) {
		return `${item.numOfEpisodes * item.episodeDuration}minutes`;
	}
	return `${item.duration}minutes`;
}
