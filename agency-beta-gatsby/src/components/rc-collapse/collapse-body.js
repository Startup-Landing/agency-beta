/** @jsx jsx */
import { jsx } from 'theme-ui';

const CollapseBody = ({ text }) => {
  return <div sx={styles.body}>{text}</div>;
};

export default CollapseBody;

const styles = {
  body: {
    mt: ['16px'],
    fontSize: [1, null, null, 2, null],
    lineHeight: 2,
  },
};
