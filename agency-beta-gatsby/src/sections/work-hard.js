/** @jsx jsx */
import { jsx, Box, Flex, Container, Text, Image as Img } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import Image from 'components/image';
import emoji from 'assets/images/icons/emoji.png';
import check from 'assets/images/icons/check-circle.png';

const data = [
  {
    id: 1,
    label: 'Medical and vision',
  },
  {
    id: 2,
    label: 'Life insurance',
  },
  {
    id: 3,
    label: '400(k) savings',
  },
  {
    id: 4,
    label: 'HSAs and FSAs',
  },
  {
    id: 5,
    label: 'Commuter benefits',
  },
  {
    id: 6,
    label: '529 college savings',
  },
];

const WorkHard = () => {
  const illustration = useStaticQuery(graphql`
    query {
      workHard: file(relativePath: { eq: "work-hard.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box as="section" variant="section.workHard">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="Don’t work hard, be smart &amp; work smartly. Take a relax sit"
              description="Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
            />
            <Box sx={styles.features}>
              {data?.map(({ id, label }) => (
                <Flex key={id} as="span" sx={{ alignItems: 'flex-start' }}>
                  <Img src={check} alt="" />
                  <Text as="span">{label}</Text>
                </Flex>
              ))}
            </Box>
            <Box sx={styles.learnMore}>
              <LearnMore label="Explore more" path="#!" />
            </Box>
          </Box>
          <Box sx={styles.illustration}>
            <Image
              src={illustration.workHard.childImageSharp.fluid}
              alt="workHard"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkHard;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ['block', null, null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'column', 'row'],
    gridTemplateColumns: ['0.9fr 1.1fr'],
    alignItems: [null, null, null, null, 'center'],
  },
  heading: {
    maxWidth: ['none', null, null, '495px', 'none'],
    textAlign: ['center', null, null, null, 'left'],
    mb: ['20px'],
    ml: [0, null, null, 'auto', 0],
    h2: {
      color: 'heading',
      fontSize: ['24px', '24px', null, '36px', '31px', '35px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', null, null, '30px', null, null, '100%'],
      top: ['4px', '8px'],
    },
    p: {
      maxWidth: 430,
    },
  },
  features: {
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ['20px', 0],
    maxWidth: ['none', null, null, '495px', 'none'],
    m: [null, null, null, '0 auto', 'initial'],
    img: {
      mr: '10px',
      mt: '11px',
    },
    '+ a': {
      mt: '25px',
      ml: ['20px', 0],
    },
  },
  learnMore: {
    mt: [4],
    ml: [20, null, null, 0],
    textAlign: [null, null, null, 'center', 'left'],
  },
  illustration: {
    mt: ['50px', null, null, null, 0],
    '.gatsby-image-wrapper': {
      maxWidth: [null, null, null, 566, 'none'],
      m: [null, null, null, '0 auto', null],
    },
  },
};
