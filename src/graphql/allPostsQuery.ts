import { useStaticQuery, graphql } from "gatsby";
import _ from "lodash";
export const usePosts = (count?: number) => {
    const { allMdx, allDataJson } = useStaticQuery(graphql`
            query BlogsAndPosts {
                allMdx {
                    nodes {
                    frontmatter {
                        date
                        excerpt
                        slug
                        tags
                        title
                    }
                    id
                    }
                }
                allDataJson {
                    nodes {
                        posts {
                        date
                        excerpt
                        url
                        tags
                        title
                        featured_image
                        }
                    }
                }
            }
    `);
    const posts = allDataJson.nodes.find((res) => res.posts).posts;
    const sortedPosts = _.orderBy(posts, ['date'], ['desc']);
    return count ? _.filter(sortedPosts, (_, index) => index < count) : sortedPosts;
};