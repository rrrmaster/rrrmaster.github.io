import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query SiteMetaData {
        		site {
					siteMetadata {
						url
            			title
						author {
							name
						}
					}
				}
			}	
		`
	);
	return site.siteMetadata;
}
export default useSiteMetadata;