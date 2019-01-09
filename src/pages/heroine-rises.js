import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from "gatsby"
import heroineRisesImage from '../images/gallery/Harbour Cover 2.jpg';
import SEO from '../components/seo'

const HeroineRises = ({data}) => (
  <Layout>
    <SEO title="Heroine Rises" keywords={[`Heroine`, `Rises`, `comic`]} />
        <div>
            <h2 className="comic-title"><i>Heroine Rises</i></h2>
            <div className="comic-info">
                <div className="comic-synopsis">
                    <p><i>Heroine Rises</i> is a comic series that follows Madeline Harbour, a small-time detective who has become sucessful solving mysteries about runaway cats, stolen answer sheets, and misplaced library books. However, her dreams of becoming a 'heroine' in the city of Northern Serenity won't be achieved by beating petty criminals. Madeline knows she must move on - she needs to take on the city's 'actual' criminals to further her pursuit of the greater good.</p>
                    <p>Grappling with her own self-doubt and her mother’s over-protective nature, Madeline and her friends take on bigger cases, hoping that solving them will propel them to that coveted 'heroic' status... and give the experience they need to eventually tackle Madeline’s biggest mystery - the disappearance of her father some fifteen years ago. However, Madeline's quest for success opens her eyes to the dark side of the city. Tales of rampant corruption within the government and police department, shocking truths about the unspoken and shady history of their city, the many deadly and powerful organized crime hierarchies, and the shadowy figures who seem to be trying to foil Madeline’s investigations at every turn soon make the amateur detective understand why Serenity has no heroes.</p>
                </div>
                <img src={heroineRisesImage} alt="cover" className="comic-cover"/>
            </div>
        </div>
    <Link to="/heroine-rises/0/0">Read from the Start</Link>
  </Layout>
)

export default HeroineRises

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`
