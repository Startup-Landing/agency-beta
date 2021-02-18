/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
// import Accordion from 'components/accordion/accordion';
import Accordion from 'components/rc-collapse/collapse';
import Image from 'components/image';
import emoji from 'assets/images/icons/emoji-2.png';

const data = [
  {
    id: 1,
    title: 'Organize your project content',
    contents: `Get your blood tests delivered at let collect sample from the victory of the managements that supplies best design system guidelines ever.`,
  },
  {
    id: 2,
    title: 'Collaborate your documents easily',
    contents: `Get your blood tests delivered at let collect sample from the victory of the managements that supplies best design system guidelines ever.`,
  },
  {
    id: 3,
    title: `Build your team's knowledge base`,
    contents: `Get your blood tests delivered at let collect sample from the victory of the managements that supplies best design system guidelines ever.`,
  },
];

const ExcitingFeatures = () => {
  const illustration = useStaticQuery(graphql`
    query {
      feature: file(relativePath: { eq: "feature.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box as="section" variant="section.excitingFeatures">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.illustration}>
            <Image
              src={illustration.feature.childImageSharp.fluid}
              alt="feature"
            />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="Meet our exciting features that make you wow"
              description="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents."
            />
            <Box sx={styles.accordionGroup}>
              {/* <Accordion items={data} /> */}
              <Accordion items={data} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExcitingFeatures;

const styles = {
  contentWrapper: {
    // gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid', 'flex', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: ['unset', 'unset', 'unset', 'unset', 'center'],
    flexDirection: ['column-reverse'],
  },
  illustration: {
    display: ['none', 'none', 'block'],
  },
  heading: {
    maxWidth: [295, 295, 495, 495, 410, 500],
    textAlign: ['center', null, null, null, 'left'],
    mb: [30],
    ml: ['auto', null, null, null, 0],
    h2: {
      fontSize: ['28px', '28px', '28px', '36px', '32px', '36px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', '24px', '24px', '30px', '30px', '30px', '100%'],
      top: ['4px', '8px'],
    },
  },
  accordionGroup: {
    maxWidth: ['none', null, null, 600, 'none'],
  },
};
